import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faClock, faUserTie, faTrophy, faNewspaper } from '@fortawesome/free-solid-svg-icons'

const newsItems = [
  {
    id: 1,
    date: '2024.07.15',
    category: '新商品',
    title: '夏季限定「メロン・エスティーヴォ」販売開始',
    excerpt: '茨城県産クラウンメロンを使用した夏季限定フレーバーの販売を開始いたします。',
    icon: faGift
  },
  {
    id: 2,
    date: '2024.07.01',
    category: 'お知らせ',
    title: '7月の営業時間変更について',
    excerpt: '夏季期間中は営業時間を延長し、10:00-22:00とさせていただきます。',
    icon: faClock
  },
  {
    id: 3,
    date: '2024.06.20',
    category: 'イベント',
    title: 'ジェラート作り体験教室開催',
    excerpt: '職人による本格的なジェラート作り体験教室を8月に開催予定です。',
    icon: faUserTie
  },
  {
    id: 4,
    date: '2024.06.10',
    category: '受賞',
    title: '国際ジェラート大会で金賞受賞',
    excerpt: 'イタリア・ミラノで開催された国際ジェラート大会で当店の「ピーチ・ソルベット」が金賞を受賞いたしました。',
    icon: faTrophy
  },
  {
    id: 5,
    date: '2024.05.25',
    category: 'メディア',
    title: 'グルメ雑誌「Tokyo Gourmet」に掲載',
    excerpt: '月刊グルメ雑誌「Tokyo Gourmet」7月号の特集「注目のスイーツ店」に掲載されました。',
    icon: faNewspaper
  }
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-primary via-luxury-charcoal to-brand-primary">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <Link href="/" className="text-brand-secondary hover:underline mb-8 inline-block">
            ← ホームに戻る
          </Link>
          <h1 className="text-5xl md:text-7xl font-heading gold-gradient mb-8 tracking-tight">
            News
          </h1>
          <p className="text-xl text-luxury-cream/80 max-w-2xl mx-auto">
            Glacière Lumièreの最新情報をお届けします
          </p>
        </div>

        {/* ニュース一覧 */}
        <section className="space-y-8 mb-16">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-black/20 backdrop-blur-sm rounded-2xl border border-brand-secondary/20 overflow-hidden hover:border-brand-secondary/40 transition-all duration-300">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-brand-secondary/20 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={item.icon} className="text-3xl text-brand-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                      <time className="text-sm text-luxury-cream/70 font-mono">{item.date}</time>
                      <span className={`
                        inline-block px-3 py-1 rounded-full text-xs font-semibold
                        ${item.category === '新商品' ? 'bg-green-600/20 text-green-300 border border-green-500/30' : ''}
                        ${item.category === 'お知らせ' ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30' : ''}
                        ${item.category === 'イベント' ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30' : ''}
                        ${item.category === '受賞' ? 'bg-brand-secondary/20 text-brand-secondary border border-brand-secondary/30' : ''}
                        ${item.category === 'メディア' ? 'bg-pink-600/20 text-pink-300 border border-pink-500/30' : ''}
                      `}>
                        {item.category}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-secondary mb-3 leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-luxury-cream/90 leading-relaxed text-content japanese-text">
                      {item.excerpt}
                    </p>
                    <div className="mt-4">
                      <Link href={`/news/${item.id}`} className="text-brand-gold-light hover:text-brand-secondary font-semibold text-sm transition-colors duration-300">
                        続きを読む →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* お知らせ */}
        <section className="mb-16">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-brand-secondary/20">
            <h2 className="text-2xl font-bold text-brand-secondary mb-4 flex items-center">
              <span className="text-2xl mr-3">📢</span>
              重要なお知らせ
            </h2>
            <div className="space-y-4">
              <div className="bg-black/30 rounded-lg p-4 border-l-4 border-red-500">
                <h3 className="font-semibold text-brand-gold-light mb-2">夏季休業のお知らせ</h3>
                <p className="text-luxury-cream/80 text-sm text-content japanese-text">
                  8月13日（火）〜8月16日（金）は夏季休業とさせていただきます。
                  8月17日（土）より通常営業を再開いたします。
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-4 border-l-4 border-yellow-500">
                <h3 className="font-semibold text-brand-gold-light mb-2">台風・荒天時の営業について</h3>
                <p className="text-luxury-cream/80 text-sm text-content japanese-text">
                  台風や荒天の際は、お客様の安全を考慮し臨時休業する場合があります。
                  最新の営業状況はInstagram公式アカウントをご確認ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ニュースレター登録 */}
        <section className="mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-brand-secondary/20 text-center">
            <h2 className="text-2xl font-heading text-brand-secondary mb-4">
              ニュースレター登録
            </h2>
            <p className="mb-6 text-luxury-cream/80 text-content japanese-text">
              新商品情報やイベントのお知らせを、いち早くお届けします
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="メールアドレスを入力"
                  className="flex-1 px-4 py-3 rounded-full bg-black/30 border border-brand-secondary/30 text-luxury-cream placeholder-luxury-cream/50 focus:outline-none focus:border-brand-secondary"
                />
                <button className="bg-gradient-to-r from-brand-secondary to-brand-gold-light text-brand-primary font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
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
        <div className="text-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-brand-secondary to-brand-gold-light text-brand-primary px-8 py-4 rounded-full font-heading text-lg tracking-wider hover:shadow-2xl hover:shadow-brand-secondary/30 transition-all duration-300 transform hover:scale-105"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}