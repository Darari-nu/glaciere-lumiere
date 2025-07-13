# CLAUDE.md - Project Documentation

## プロジェクト概要

### Glacière Lumière - 高級ジェラート店ウェブサイト

**コンセプト**: フランスの伝統技法と日本の美意識を融合した高級ジェラート店
**所在地**: 〒100-0001 東京都千代田区千代田1-1-1（架空住所）
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
- **アイコン**: Font Awesome (@fortawesome/react-fontawesome)
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

### OGP画像設定とトラブルシューティング (2025-07-13)

#### 問題の経緯
**症状**: SNS（Discord、LINE、Facebook等）でサイトシェア時にOGP画像が表示されない
- 初期実装: SVG形式の画像を使用
- 結果: SNSの多くがSVG形式のOGP画像を認識しない

#### 根本原因と解決策
1. **SVG形式の非対応**: 多くのSNSプラットフォームはSVG画像をOGP画像として認識しない
2. **解決手順**:
   ```bash
   # 既存のジェラート画像をOGP用にコピー
   cp public/images/products/peach-cup.jpg public/images/ogp-image.jpg
   
   # metadata設定をJPG形式に変更
   # layout.tsx内の画像パスを .svg → .jpg に変更
   
   # デプロイして反映
   git add . && git commit -m "OGP画像をSVGからJPGに変更"
   git push origin clean-master
   vercel --prod --yes
   ```

#### OGP設定詳細
```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  openGraph: {
    title: 'Glacière Lumière | Premium Gelato',
    description: '最高級素材で作る極上のジェラート。パズルゲームをクリアして特別割引をゲット！',
    url: 'https://glaciere-lumiere.vercel.app',
    siteName: 'Glacière Lumière',
    images: [
      {
        url: '/images/ogp-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Glacière Lumière - Premium Gelato Experience',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glacière Lumière | Premium Gelato',
    description: '最高級素材で作る極上のジェラート。パズルゲームをクリアして特別割引をゲット！',
    images: ['/images/ogp-image.jpg'],
  },
}
```

#### OGP表示確認方法
1. **Facebook OGPデバッガー**（最も確実）:
   - https://developers.facebook.com/tools/debug/
   - URLを入力して「デバッグ」→「再度スクレイピング」

2. **Twitter Card Validator**:
   - https://cards-dev.twitter.com/validator

3. **画像直接確認**:
   - https://glaciere-lumiere.vercel.app/images/ogp-image.jpg

4. **実際のSNSテスト**:
   - LINE: URLを貼り付けてプレビュー確認
   - Discord: URLを貼り付け（キャッシュ注意）
   - Slack: URLを貼り付けてプレビュー確認

#### キャッシュ問題と対処法
**症状**: OGP画像を修正したのにSNSで古い画像/情報が表示される

**原因**: SNSプラットフォームがOGP情報をキャッシュしている

**対処法**:
1. **Facebook OGPデバッガーでキャッシュクリア**
   - 「再度スクレイピング」ボタンをクリック
   - 最も効果的な方法

2. **URLパラメータ追加**
   ```
   https://glaciere-lumiere.vercel.app/?v=1
   https://glaciere-lumiere.vercel.app/?v=2
   ```
   - 異なるURLとしてSNSに認識させる

3. **時間を置く**
   - Discord: 数分～数時間
   - Twitter: 数分～30分
   - Facebook: 即座（デバッガー使用時）

#### 成功確認
- ✅ 画像ファイル: https://glaciere-lumiere.vercel.app/images/ogp-image.jpg （アクセス可能）
- ✅ Content-Type: image/jpeg （正しい形式）
- ✅ ファイルサイズ: 231KB （適切なサイズ）
- ✅ OGPメタデータ: 正常に設定済み
- ✅ SNSでの表示: LINE、Facebook、Slackで確認済み

#### 今後の注意点
1. **画像形式**: OGP用画像は必ずJPG/PNG形式を使用
2. **画像サイズ**: 1200×630px推奨（SNS最適サイズ）
3. **ファイルサイズ**: 1MB以下推奨
4. **キャッシュ**: 修正後は必ずFacebook OGPデバッガーでキャッシュクリア
5. **テスト**: 複数のSNSプラットフォームで動作確認

#### 今後の改善案
1. CSS Modules導入でスタイルの競合を防止
2. E2Eテストの追加
3. パフォーマンス監視の強化
4. アクセシビリティの向上
5. CI/CDパイプラインの安定化

## プロジェクト完成版情報 (2025-07-13)

### 最終仕様

#### 実装済み全ページ
1. **ホームページ** (`/`) - メインランディングページ
2. **ブランドについて** (`/about`) - ブランドストーリー、職人紹介、受賞歴
3. **フレーバー一覧** (`/flavors`) - 6種類のプレミアムフレーバー詳細
4. **パズルゲーム** (`/puzzle`) - 3段階難易度のスライドパズル
5. **ニュース** (`/news`) - 最新情報一覧とニュース詳細ページ
6. **お問い合わせ** (`/contact`) - 店舗情報、アクセス、お問い合わせフォーム
7. **プライバシーポリシー** (`/privacy`) - 個人情報保護方針
8. **利用規約** (`/terms`) - サービス利用規約
9. **サイトマップ** (`/sitemap`) - サイト全体の構成

#### デザイン統一
- **全ページ共通**: ダークグラデーション背景、ゴールド・シルバー配色
- **レスポンシブ対応**: モバイル・タブレット・デスクトップ完全対応
- **Font Awesome**: プロフェッショナルなアイコン使用
- **実画像**: フレーバーページに商品実写画像使用

#### セキュリティ対応
- **架空住所**: 〒100-0001 東京都千代田区千代田1-1-1 ルミエールビル 1F
- **マスク電話**: 03-****-****
- **実在情報削除**: プライバシーと法的リスクを回避

### GitHub情報

#### リポジトリ詳細
- **リポジトリ名**: glaciere-lumiere
- **リポジトリURL**: https://github.com/Darari-nu/glaciere-lumiere
- **メインブランチ**: clean-master
- **オーナー**: Darari-nu

#### ブランチ戦略
```bash
# 開発・修正作業用ブランチ
clean-master (開発用メインブランチ)
├── 全ての開発作業はここで実行
├── コミット・プッシュ先
└── Vercel自動デプロイ連携

# 本番用ブランチ（必要に応じて）
master (本番反映用)
└── clean-masterから強制プッシュで更新可能
```

#### 重要なコミット履歴
```bash
# 最新の主要コミット
1088d4fe - ビルドエラー修正とNext.js 15対応
e088b89a - 重要な修正: 実在住所削除、Font Awesome導入、ニュース詳細機能追加
702682db - メインHPのラグジュアリーなデザインに統一
d6a7ef34 - フッターリンク対応ページを追加とコンテンツ充実
e80f6b45 - パズル画像テストページ削除とパズル画像選択に日本語表示追加
```

### Vercel情報

#### デプロイメント詳細
- **プロジェクト名**: glaciere-lumiere
- **本番URL**: https://glaciere-lumiere.vercel.app
- **Vercelダッシュボード**: https://vercel.com/standard847385-gmailcoms-projects/glaciere-lumiere
- **アカウント**: standard847385-gmailcoms-projects

#### デプロイ設定
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

#### 自動デプロイ
- **トリガー**: clean-masterブランチへのpush
- **ビルド時間**: 約30-40秒
- **ビルドログ**: Vercelダッシュボードで確認可能

#### 手動デプロイコマンド
```bash
# 緊急時の手動デプロイ
vercel --prod --yes

# エイリアス更新（必要時）
vercel alias set [新デプロイURL] glaciere-lumiere.vercel.app
```

### 技術仕様詳細

#### Next.js 15対応
- **Static Site Generation (SSG)**: 全ページ事前生成
- **Dynamic Routes**: `/news/[id]` でニュース詳細ページ
- **generateStaticParams**: ニュース記事1-5を事前生成
- **Export設定**: 静的サイトとしてエクスポート

#### 依存関係
```json
{
  "dependencies": {
    "next": "15.3.5",
    "react": "19.0.0",
    "typescript": "^5",
    "tailwindcss": "^3.4.1",
    "zustand": "^5.0.2",
    "@fortawesome/fontawesome-svg-core": "^6.x.x",
    "@fortawesome/free-solid-svg-icons": "^6.x.x",
    "@fortawesome/react-fontawesome": "^0.2.x"
  }
}
```

#### ビルド出力
```
Route (app)                     Size    First Load JS
├ ○ /                          39.9 kB   164 kB
├ ○ /about                     192 B     105 kB
├ ○ /flavors                   192 B     105 kB
├ ○ /news                      192 B     105 kB
├ ● /news/[id]                 192 B     105 kB (SSG)
├ ○ /puzzle                    2.61 kB   117 kB
└ [その他のページ]
```

### 運用情報

#### 推奨フォルダ名
- **現在**: test4 (変更推奨)
- **推奨名**: glaciere-lumiere-website
- **代替案**: glaciere-lumiere-lp, luxury-gelato-site

#### 開発環境起動
```bash
# 通常起動
npm run dev

# バックグラウンド起動（長時間作業時）
nohup npm run dev > server.log 2>&1 &

# ポート確認
curl -I http://localhost:3000
# または http://localhost:3002 (ポート競合時)
```

#### デプロイ手順
```bash
# 1. 変更をコミット
git add .
git commit -m "変更内容の説明"

# 2. GitHubにプッシュ
git push origin clean-master

# 3. Vercel自動デプロイ確認
# または手動デプロイ
vercel --prod --yes
```

### プロジェクト完成確認

#### 全機能動作確認済み
- ✅ レスポンシブデザイン（Mobile/Tablet/Desktop）
- ✅ パズルゲーム（3段階難易度、画像選択、QRコード生成）
- ✅ ニュース機能（一覧 + 詳細ページ）
- ✅ フォーム機能（お問い合わせ、ニュースレター登録）
- ✅ ナビゲーション（全ページ間遷移）
- ✅ SEO対応（メタタグ、構造化データ）
- ✅ パフォーマンス最適化（画像最適化、コード分割）

#### ブラウザ対応
- ✅ Chrome (最新版)
- ✅ Safari (最新版) 
- ✅ Firefox (最新版)
- ✅ Edge (最新版)
- ✅ モバイルブラウザ（iOS Safari、Android Chrome）

#### 品質保証
- ✅ TypeScript型安全性
- ✅ ESLint/Prettier準拠
- ✅ Next.js Best Practices適用
- ✅ Tailwind CSS最適化
- ✅ Font Awesome軽量化

### 最終ステータス: 🎉 完成・本番稼働中

**本番URL**: https://glaciere-lumiere.vercel.app
**開発完了日**: 2025年7月13日
**最終ビルド**: 成功（19ページ生成）
**ステータス**: Production Ready ✅