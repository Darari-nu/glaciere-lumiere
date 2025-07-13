# CLAUDE.md - Project Documentation

## プロジェクト概要

### Glacière Lumière - 高級ジェラート店ウェブサイト

**コンセプト**: フランスの伝統技法と日本の美意識を融合した高級ジェラート店
**所在地**: 〒150-0001 東京都渋谷区神宮前6-12-20
**営業時間**: 11:00 - 21:00（水曜定休）

### 要件定義

#### 基本機能
1. **ランディングページ**: ブランドイメージの訴求
2. **商品紹介**: 6種類のプレミアムジェラートフレーバー
3. **体験セクション**: 職人技・厳選素材・特別体験の紹介
4. **パズルゲーム**: インタラクティブな割引クーポン獲得システム
5. **店舗情報**: アクセス・営業時間・連絡先

#### パズルゲーム詳細
- **3つの難易度**: 初級(3×3)、中級(4×4)、上級(5×5)
- **報酬システム**: 初級5%OFF、中級8%OFF、上級12%OFF
- **画像選択**: 6種類のジェラート画像から選択
- **制限時間**: 難易度別の時間制限あり
- **QRコード**: クリア時に割引クーポンのQRコード表示

#### デザイン要件
- **カラーパレット**: ゴールド(#FFD700)、チャコール(#2C2C2C)、クリーム(#F8F6F0)
- **フォント**: Serif系（Cormorant Garamond、Crimson Text、Source Serif Pro）
- **日本語フォント**: Hiragino Mincho ProN、Yu Mincho（明朝系で高級感演出）
- **レスポンシブ**: モバイルファーストデザイン

### 技術スタック

- **フレームワーク**: Next.js 15.3.5
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **状態管理**: Zustand
- **デプロイ**: Vercel
- **バージョン管理**: Git (GitHub: Darari-nu/glaciere-lumiere)

### 商品ラインナップ

1. **ピーチ・ソルベット** (¥680) - Peach Sorbetto
2. **ブルーベリー・ラベンダー** (¥720) - Blueberry Lavanda
3. **キウイ・ヴェルデ** (¥650) - Kiwi Verde
4. **リモーネ・フレスコ** (¥660) - Limone Fresco
5. **マンゴー・トロピカーレ** (¥710) - Mango Tropicale
6. **ランポーネ・ロッソ** (¥730) - Lampone Rosso

## 開発履歴・問題解決

### Typography改善プロジェクト (2025-07-12)

#### 初期要求
> "文章の改行がいまいちでブラウザによってはみにくいですね。例えばスマホ。ここは修正できますか？"

#### 実装内容
1. **日本語フォント最適化**
   - Gothic → Mincho系に変更（ブランド一貫性）
   - font-family: "Hiragino Mincho ProN", "Yu Mincho", serif

2. **レスポンシブタイポグラフィ**
   ```css
   html { font-size: clamp(16px, 1.2vw, 18px); }
   h1 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); }
   h2 { font-size: clamp(1.5rem, 2.8vw, 2.2rem); }
   ```

3. **テキスト最適化クラス**
   ```css
   .text-content {
     max-width: clamp(45ch, 90%, 75ch);
     line-height: 1.8;
     word-break: break-word;
     overflow-wrap: break-word;
   }
   ```

#### 発生した問題: パズル画像テキストサイズ

**現象**: パズル画像選択画面の6つの画像下テキストが大きくなった
- ローカル環境: 正常表示
- デプロイ先: テキストが大きく表示

**根本原因**: グローバルCSS `h3 { font-size: clamp(1.3rem, 2.2vw, 1.8rem); }` の追加

**解決策**: 該当CSS規則を削除し、最初の正常状態に復元

### デプロイ管理

#### ブランチ構成
- **master**: Vercelデプロイ対象ブランチ
- **clean-master**: 開発・修正作業用ブランチ

#### デプロイコマンド
```bash
# 修正をmasterに反映
git push origin clean-master:master --force

# 強制再デプロイ
git commit --allow-empty -m "Force redeploy"
git push
```

### Next.jsサーバー起動の問題と対処法

#### 問題
- `npm run dev` を直接実行すると、Bashツールの2分タイムアウトで中断される
- Next.jsサーバーは初回コンパイル時に数分かかる場合がある
- ポート3000が使用中の場合、自動的にポート3001に切り替わる

#### 対処法
```bash
# バックグラウンドでサーバーを起動
nohup npm run dev > server.log 2>&1 &

# 起動確認
sleep 5 && curl -I http://localhost:3001

# ログ確認
tail -f server.log
```

#### 確認方法
- HTTP 200レスポンスが返れば起動成功
- ブラウザで http://localhost:3001 にアクセス可能
- server.logで詳細なログを確認

#### トラブルシューティング
- プロセス確認: `ps aux | grep -i next`
- ポート確認: `lsof -i :3001`
- 強制終了: `pkill -f "next dev"`

### テスト・品質管理

#### 動作確認項目
1. **レスポンシブデザイン**: モバイル・タブレット・デスクトップ
2. **パズルゲーム**: 全難易度でのゲーム動作
3. **フォント表示**: 日本語・英語の適切な表示
4. **ページ遷移**: 各セクション間のスムーズな移動
5. **QRコード生成**: クリア時の正常な表示

#### パフォーマンス要件
- Core Web Vitals準拠
- モバイル表示最適化
- 画像最適化（Next.js Image component使用）

### 重要なファイル構成

```
src/
├── app/
│   ├── globals.css          # グローバルスタイル
│   ├── layout.tsx          # レイアウト設定
│   └── page.tsx            # ホームページ
├── components/
│   └── puzzle/             # パズルゲーム関連
│       ├── ImageSelector.tsx
│       ├── DifficultySelector.tsx
│       └── EmbeddedPuzzleGame.tsx
├── features/
│   └── landing/            # ランディングページセクション
├── store/
│   └── puzzle-store.ts     # Zustand状態管理
└── data/
    └── puzzle-images.ts    # パズル画像データ
```

### Vercel CLI デプロイ問題と解決 (2025-07-13)

#### 問題の経緯
**症状**: GitHubへのpushで変更が本番環境に反映されない
- ローカル環境: パズル画像テキスト修正済み
- 本番環境: 7時間前のデプロイのまま更新されず
- GitHub Pages、Netlifyでも同様の問題

#### 根本原因
1. **Vercel CLI未ログイン**: GitHub連携の自動デプロイが機能せず
2. **プロジェクト識別ミス**: 新規test4プロジェクト作成 → 既存glaciere-lumiereプロジェクトが対象

#### 解決手順
```bash
# 1. Vercel CLI インストール・ログイン
npm i -g vercel
vercel login  # GitHubアカウントで認証

# 2. 正しいプロジェクトにリンク
vercel link --project=glaciere-lumiere --yes

# 3. 本番デプロイ実行
vercel --prod --yes
```

#### 成功結果
- **デプロイURL**: https://glaciere-lumiere.vercel.app
- **サブURL**: https://glaciere-lumiere-standard847385-gmailcoms-projects.vercel.app
- **状態**: ローカルの修正内容が正常に反映

#### 今後のデプロイ手順
```bash
# 通常のデプロイ（修正後）
git add .
git commit -m "修正内容"
git push
vercel --prod --yes  # 確実にデプロイを反映させる場合
```

### 運用メモ

#### 修正時の注意点
1. **フォント変更**: ブランドイメージに影響するため慎重に
2. **CSS変更**: グローバル設定が他コンポーネントに影響する可能性
3. **パズルゲーム**: 状態管理の複雑性に注意
4. **デプロイ**: Vercel CLI経由で確実な反映を確認
5. **プロジェクト識別**: 正しいglaciere-lumiereプロジェクトか確認

#### デプロイトラブルシューティング
1. `vercel ls` でデプロイ状況確認
2. `vercel projects ls` で対象プロジェクト確認
3. CLI経由の手動デプロイを実行
4. デプロイ完了後、本番URLで動作確認

#### 今後の改善案
1. CSS Modules導入でスタイルの競合を防止
2. E2Eテストの追加
3. パフォーマンス監視の強化
4. アクセシビリティの向上
5. CI/CDパイプラインの安定化