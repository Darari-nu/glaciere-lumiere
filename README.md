# Glacière Lumière - Premium Gelato Boutique

高級ジェラート専門店「Glacière Lumière（グラシエール・リュミエール）」のウェブサイト

## 概要

フランスの伝統技法と日本の繊細な美意識が融合した、唯一無二のジェラート工房のウェブサイトです。厳選された季節の素材のみを使用し、一つ一つ丁寧に手作りで仕上げた至極のジェラートを紹介しています。

## 特徴

### デザイン
- **高級感のあるダークテーマ**: 深いブラックとゴールドの配色
- **プレミアムフォント**: Cormorant Garamond、Crimson Text、Source Serif Pro
- **パララックス効果**: スクロールに追従する美しい背景画像
- **レスポンシブデザイン**: デスクトップ・モバイル対応

### 技術仕様
- **Next.js 14**: App Router使用
- **TypeScript**: 型安全な開発
- **Tailwind CSS v4**: 最新のCSS-in-JSアプローチ
- **Zustand**: シンプルな状態管理
- **パララックス効果**: カスタムJavaScript実装

### 主な機能
- **メインビジュアル**: 4つの縦長ジェラート画像（288x4096）のパララックス表示
- **商品紹介**: 厳選された4種類のシグネチャーフレーバー
- **パズルゲーム**: 割引クーポン獲得システム
- **モバイル最適化**: 横スクロール対応

## フレーバーラインナップ

1. **ピーチ・ソルベット** (¥680)
   - 完熟桃の甘美な香りと滑らかな口当たり

2. **ブルーベリー・ラベンダー** (¥720)
   - ブルーベリーとラベンダーの上品なハーモニー

3. **キウイ・ヴェルデ** (¥650)
   - ニュージーランド産キウイの爽やかな酸味

4. **フラゴラ・ロッサ** (¥690)
   - 完熟いちごの濃厚な甘さと華やかな香り

## 開発環境

### 必要な環境
- Node.js 18+
- npm または yarn

### セットアップ
```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバーの起動
npm start
```

### 開発用コマンド
```bash
# 型チェック
npm run type-check

# リンター実行
npm run lint

# フォーマッター実行
npm run format
```

## プロジェクト構造

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # メインページ
│   ├── puzzle/            # パズルゲームページ
│   └── globals.css        # グローバルスタイル
├── features/              # 機能別コンポーネント
│   └── landing/           # ランディングページ
├── data/                  # データ定義
│   └── gelatos.ts         # ジェラート情報
├── store/                 # 状態管理
│   └── puzzle-store.ts    # パズルゲーム状態
└── utils/                 # ユーティリティ
```

## デザインシステム

### カラーパレット
- **プライマリ**: #0A0B0D (深いブラック)
- **セカンダリ**: #D4AF37 (エレガントゴールド)
- **アクセント**: #F4E4BC (ライトゴールド)
- **テキスト**: #F8F6F0 (ラグジュアリークリーム)

### タイポグラフィ
- **ヘッディング**: Cormorant Garamond (セリフ)
- **本文**: Crimson Text (読みやすいセリフ)
- **アクセント**: Source Serif Pro (モダンセリフ)

## 技術的ハイライト

### Tailwind CSS v4 設定
```css
@theme {
  --color-brand-primary: #0A0B0D;
  --color-brand-secondary: #D4AF37;
  --color-brand-accent: #F4E4BC;
  --color-luxury-cream: #F8F6F0;
}
```

### パララックス効果
```typescript
useEffect(() => {
  const handleScroll = () => {
    const scrolled = window.pageYOffset
    const parallaxSpeed = 0.5
    backgroundRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`
  }
  window.addEventListener('scroll', handleScroll)
}, [])
```

## ライセンス

© 2024 Glacière Lumière. All rights reserved.

---

**開発者**: Claude Code
**最終更新**: 2024年7月