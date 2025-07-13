import Link from 'next/link'

const sitePages = [
  {
    title: 'ホーム',
    url: '/',
    description: 'トップページ - Glacière Lumièreの紹介'
  },
  {
    title: 'ブランドについて',
    url: '/about',
    description: 'ブランドストーリー、職人紹介、受賞歴'
  },
  {
    title: 'プレミアムフレーバー',
    url: '/flavors',
    description: '6つの定番フレーバーと季節限定メニュー'
  },
  {
    title: 'パズルゲーム',
    url: '/puzzle',
    description: 'インタラクティブパズルで割引クーポン獲得'
  },
  {
    title: 'ニュース',
    url: '/news',
    description: '最新情報、新商品、イベント情報'
  },
  {
    title: 'お問い合わせ',
    url: '/contact',
    description: '店舗情報、アクセス、お問い合わせフォーム'
  }
]

const legalPages = [
  {
    title: 'プライバシーポリシー',
    url: '/privacy',
    description: '個人情報保護に関する方針'
  },
  {
    title: '利用規約',
    url: '/terms',
    description: 'サービス利用時の規約'
  },
  {
    title: 'サイトマップ',
    url: '/sitemap',
    description: '当サイトの構成一覧'
  }
]

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-luxury-cream to-white">
      {/* ヘッダー */}
      <header className="bg-luxury-charcoal text-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-heading gold-gradient">
            Glacière Lumière
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-brand-secondary transition-colors">ホーム</Link>
            <Link href="/about" className="hover:text-brand-secondary transition-colors">ブランドについて</Link>
            <Link href="/contact" className="hover:text-brand-secondary transition-colors">お問い合わせ</Link>
          </nav>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading text-luxury-charcoal mb-6">
            サイトマップ
          </h1>
          <p className="text-xl text-gray-600">
            当ウェブサイトの構成一覧
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* メインページ */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-6 flex items-center">
              <span className="text-2xl mr-3">🏠</span>
              メインページ
            </h2>
            <div className="space-y-4">
              {sitePages.map((page) => (
                <div key={page.url} className="border-b border-gray-100 pb-4 last:border-b-0">
                  <Link 
                    href={page.url}
                    className="block hover:bg-gray-50 rounded-lg p-3 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold text-luxury-charcoal hover:text-brand-secondary transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {page.description}
                    </p>
                    <p className="text-xs text-brand-secondary mt-2">
                      {page.url}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* 法的ページ */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-6 flex items-center">
              <span className="text-2xl mr-3">📋</span>
              法的情報
            </h2>
            <div className="space-y-4">
              {legalPages.map((page) => (
                <div key={page.url} className="border-b border-gray-100 pb-4 last:border-b-0">
                  <Link 
                    href={page.url}
                    className="block hover:bg-gray-50 rounded-lg p-3 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold text-luxury-charcoal hover:text-brand-secondary transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {page.description}
                    </p>
                    <p className="text-xs text-brand-secondary mt-2">
                      {page.url}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 外部リンク */}
        <section className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-6 flex items-center">
              <span className="text-2xl mr-3">🔗</span>
              外部リンク・SNS
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a 
                href="https://instagram.com/glaciere.lumiere" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-brand-secondary hover:bg-pink-50 transition-all duration-300"
              >
                <span className="text-2xl">📸</span>
                <div>
                  <h3 className="font-semibold text-luxury-charcoal">Instagram</h3>
                  <p className="text-sm text-gray-600">@glaciere.lumiere</p>
                </div>
              </a>
              
              <a 
                href="https://twitter.com/glaciere_lumiere" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-brand-secondary hover:bg-blue-50 transition-all duration-300"
              >
                <span className="text-2xl">🐦</span>
                <div>
                  <h3 className="font-semibold text-luxury-charcoal">Twitter</h3>
                  <p className="text-sm text-gray-600">@glaciere_lumiere</p>
                </div>
              </a>
              
              <a 
                href="https://facebook.com/glaciere.lumiere" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-brand-secondary hover:bg-blue-50 transition-all duration-300"
              >
                <span className="text-2xl">📘</span>
                <div>
                  <h3 className="font-semibold text-luxury-charcoal">Facebook</h3>
                  <p className="text-sm text-gray-600">glaciere.lumiere</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* アクセシビリティ情報 */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-6 flex items-center">
              <span className="text-2xl mr-3">♿</span>
              アクセシビリティについて
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                当ウェブサイトは、すべてのお客様にご利用いただけるよう、
                ウェブアクセシビリティの向上に努めています。
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>レスポンシブデザインによるスマートフォン・タブレット対応</li>
                <li>適切な色彩コントラストの確保</li>
                <li>キーボードナビゲーション対応</li>
                <li>代替テキストの提供</li>
              </ul>
              <p className="text-sm">
                アクセシビリティに関するご意見・ご要望がございましたら、
                <Link href="/contact" className="text-brand-secondary hover:underline">お問い合わせフォーム</Link>
                よりご連絡ください。
              </p>
            </div>
          </div>
        </section>

        {/* 技術情報 */}
        <section className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-6 flex items-center">
              <span className="text-2xl mr-3">⚙️</span>
              技術情報
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">推奨ブラウザ</h3>
                <ul className="text-sm space-y-1">
                  <li>• Google Chrome（最新版）</li>
                  <li>• Mozilla Firefox（最新版）</li>
                  <li>• Safari（最新版）</li>
                  <li>• Microsoft Edge（最新版）</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">対応デバイス</h3>
                <ul className="text-sm space-y-1">
                  <li>• デスクトップPC</li>
                  <li>• ノートPC</li>
                  <li>• タブレット（iPad、Android）</li>
                  <li>• スマートフォン（iOS、Android）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-16">
          <div className="bg-gradient-to-r from-luxury-charcoal to-gray-800 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-heading mb-4">
              お探しのページは見つかりましたか？
            </h2>
            <p className="mb-6 text-luxury-cream/80">
              ご不明な点がございましたら、お気軽にお問い合わせください
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/" 
                className="inline-block bg-brand-secondary hover:bg-yellow-500 text-luxury-charcoal font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                ホームに戻る
              </Link>
              <Link 
                href="/contact" 
                className="inline-block border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-luxury-charcoal font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-luxury-charcoal text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-luxury-cream/60">
            © 2024 Glacière Lumière. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}