import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-primary via-luxury-charcoal to-brand-primary">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <Link href="/" className="text-brand-secondary hover:underline mb-8 inline-block">
            ← ホームに戻る
          </Link>
          <h1 className="text-5xl md:text-7xl font-heading gold-gradient mb-8 tracking-tight">
            Contact
          </h1>
          <p className="text-xl text-luxury-cream/80 max-w-2xl mx-auto">
            お問い合わせ・店舗情報
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 店舗情報 */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-brand-secondary/20">
            <h2 className="text-3xl font-heading text-brand-secondary mb-8">店舗情報</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-brand-gold-light mb-2">本店</h3>
                <p className="text-luxury-cream/80 leading-relaxed">
                  〒150-0001<br/>
                  東京都渋谷区神宮前6-12-20<br/>
                  J6フロントビル 1F
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-gold-light mb-2">営業時間</h3>
                <p className="text-luxury-cream/80">
                  平日: 11:00 - 21:00<br/>
                  土日祝: 10:00 - 22:00
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-gold-light mb-2">定休日</h3>
                <p className="text-luxury-cream/80">水曜日</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-gold-light mb-2">アクセス</h3>
                <p className="text-luxury-cream/80 leading-relaxed">
                  JR原宿駅 徒歩5分<br/>
                  東京メトロ明治神宮前駅 徒歩3分<br/>
                  表参道駅 徒歩8分
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-gold-light mb-2">お問い合わせ</h3>
                <p className="text-luxury-cream/80">
                  TEL: 03-5123-4567<br/>
                  Email: info@glaciere-lumiere.jp
                </p>
              </div>
            </div>
          </div>

          {/* お問い合わせフォーム */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-brand-secondary/20">
            <h2 className="text-3xl font-heading text-brand-secondary mb-8">お問い合わせ</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-brand-gold-light mb-2">
                  お名前 *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/30 border border-brand-secondary/30 rounded-lg text-luxury-cream focus:border-brand-secondary focus:outline-none"
                  placeholder="田中 太郎"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-gold-light mb-2">
                  メールアドレス *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-black/30 border border-brand-secondary/30 rounded-lg text-luxury-cream focus:border-brand-secondary focus:outline-none"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-gold-light mb-2">
                  お問い合わせ種別
                </label>
                <select className="w-full px-4 py-3 bg-black/30 border border-brand-secondary/30 rounded-lg text-luxury-cream focus:border-brand-secondary focus:outline-none">
                  <option>一般的なお問い合わせ</option>
                  <option>商品について</option>
                  <option>イベント・ケータリング</option>
                  <option>メディア・取材</option>
                  <option>その他</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-gold-light mb-2">
                  メッセージ *
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-black/30 border border-brand-secondary/30 rounded-lg text-luxury-cream focus:border-brand-secondary focus:outline-none resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-secondary to-brand-gold-light text-brand-primary py-4 rounded-lg font-heading text-lg tracking-wider hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                送信する
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/"
            className="bg-white/10 backdrop-blur-sm border-2 border-brand-secondary text-brand-secondary px-8 py-4 rounded-full font-heading text-lg tracking-wider hover:bg-brand-secondary hover:text-brand-primary transition-all duration-300 transform hover:scale-105"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}