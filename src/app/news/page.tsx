import Link from 'next/link'

const newsItems = [
  {
    id: 1,
    date: '2024.07.15',
    category: '新商品',
    title: '夏季限定「メロン・エスティーヴォ」販売開始',
    excerpt: '茨城県産クラウンメロンを使用した夏季限定フレーバーの販売を開始いたします。',
    image: '🍈'
  },
  {
    id: 2,
    date: '2024.07.01',
    category: 'お知らせ',
    title: '7月の営業時間変更について',
    excerpt: '夏季期間中は営業時間を延長し、10:00-22:00とさせていただきます。',
    image: '⏰'
  },
  {
    id: 3,
    date: '2024.06.20',
    category: 'イベント',
    title: 'ジェラート作り体験教室開催',
    excerpt: '職人による本格的なジェラート作り体験教室を8月に開催予定です。',
    image: '👨‍🍳'
  },
  {
    id: 4,
    date: '2024.06.10',
    category: '受賞',
    title: '国際ジェラート大会で金賞受賞',
    excerpt: 'イタリア・ミラノで開催された国際ジェラート大会で当店の「ピーチ・ソルベット」が金賞を受賞いたしました。',
    image: '🏆'
  },
  {
    id: 5,
    date: '2024.05.25',
    category: 'メディア',
    title: 'グルメ雑誌「Tokyo Gourmet」に掲載',
    excerpt: '月刊グルメ雑誌「Tokyo Gourmet」7月号の特集「注目のスイーツ店」に掲載されました。',
    image: '📰'
  }
]

export default function NewsPage() {
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
            <Link href="/flavors" className="hover:text-brand-secondary transition-colors">フレーバー</Link>
            <Link href="/news" className="text-brand-secondary">ニュース</Link>
            <Link href="/contact" className="hover:text-brand-secondary transition-colors">お問い合わせ</Link>
          </nav>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* ヒーローセクション */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading text-luxury-charcoal mb-6">
            ニュース
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Glacière Lumièreの最新情報をお届けします
          </p>
        </section>

        {/* ニュース一覧 */}
        <section className="space-y-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">{item.image}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                      <time className="text-sm text-gray-500 font-mono">{item.date}</time>
                      <span className={`
                        inline-block px-3 py-1 rounded-full text-xs font-semibold
                        ${item.category === '新商品' ? 'bg-green-100 text-green-800' : ''}
                        ${item.category === 'お知らせ' ? 'bg-blue-100 text-blue-800' : ''}
                        ${item.category === 'イベント' ? 'bg-purple-100 text-purple-800' : ''}
                        ${item.category === '受賞' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${item.category === 'メディア' ? 'bg-pink-100 text-pink-800' : ''}
                      `}>
                        {item.category}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-luxury-charcoal mb-3 leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="mt-4">
                      <button className="text-brand-secondary hover:text-yellow-600 font-semibold text-sm transition-colors duration-300">
                        続きを読む →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* お知らせ */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4 flex items-center">
              <span className="text-2xl mr-3">📢</span>
              重要なお知らせ
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <h3 className="font-semibold text-luxury-charcoal mb-2">夏季休業のお知らせ</h3>
                <p className="text-gray-700 text-sm">
                  8月13日（火）〜8月16日（金）は夏季休業とさせていただきます。
                  8月17日（土）より通常営業を再開いたします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                <h3 className="font-semibold text-luxury-charcoal mb-2">台風・荒天時の営業について</h3>
                <p className="text-gray-700 text-sm">
                  台風や荒天の際は、お客様の安全を考慮し臨時休業する場合があります。
                  最新の営業状況はInstagram公式アカウントをご確認ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ニュースレター登録 */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-luxury-charcoal to-gray-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-heading mb-4">
              ニュースレター登録
            </h2>
            <p className="mb-6 text-luxury-cream/80">
              新商品情報やイベントのお知らせを、いち早くお届けします
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="メールアドレスを入力"
                  className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                />
                <button className="bg-brand-secondary hover:bg-yellow-500 text-luxury-charcoal font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                  登録
                </button>
              </div>
              <p className="text-xs text-luxury-cream/60 mt-3">
                ※ 配信停止はいつでも可能です
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-heading text-luxury-charcoal mb-4">
              店舗でお待ちしています
            </h2>
            <p className="text-gray-600 mb-6">
              最新のフレーバーや季節限定商品を、ぜひ店頭でお楽しみください
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/puzzle" 
                className="inline-block bg-brand-secondary hover:bg-yellow-500 text-luxury-charcoal font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                パズルで割引クーポン
              </Link>
              <Link 
                href="/contact" 
                className="inline-block border-2 border-luxury-charcoal text-luxury-charcoal hover:bg-luxury-charcoal hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                アクセス・営業時間
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