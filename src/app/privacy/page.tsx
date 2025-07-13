import Link from 'next/link'

export default function PrivacyPage() {
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
            プライバシーポリシー
          </h1>
          <p className="text-xl text-gray-600">
            お客様の個人情報保護に関する当店の取り組み
          </p>
        </section>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">基本方針</h2>
            <p className="text-gray-700 leading-relaxed">
              Glacière Lumière（以下「当店」）は、お客様の個人情報保護の重要性を深く認識し、
              個人情報の保護に関する法律および関連法令等を遵守し、
              お客様の個人情報を適切に取り扱うことをお約束いたします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">個人情報の定義</h2>
            <p className="text-gray-700 leading-relaxed">
              個人情報とは、お客様個人に関する情報であって、
              お名前、住所、電話番号、メールアドレス等により、
              特定の個人を識別できる情報をいいます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">個人情報の収集目的</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当店では、以下の目的で個人情報を収集いたします：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>商品のご注文・配送に関するご連絡</li>
              <li>お問い合わせへの回答</li>
              <li>新商品やイベント情報のご案内</li>
              <li>アンケート調査へのご協力依頼</li>
              <li>当店サービスの向上・改善</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">個人情報の利用・提供</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当店は、収集した個人情報を上記の利用目的の範囲内でのみ利用し、
              お客様の同意を得ることなく第三者に提供することはありません。
              ただし、以下の場合を除きます：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>配送業者等、業務委託先への必要最小限の情報提供</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">個人情報の管理</h2>
            <p className="text-gray-700 leading-relaxed">
              当店は、個人情報の正確性を保ち、これを安全に管理いたします。
              個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、
              必要かつ適切な安全管理措置を実施しています。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">Cookieについて</h2>
            <p className="text-gray-700 leading-relaxed">
              当店のウェブサイトでは、より良いサービス提供のためCookieを使用する場合があります。
              Cookieはお客様を特定する情報を含まず、お客様のプライバシーを侵害するものではありません。
              お客様はブラウザの設定によりCookieの受け入れを拒否することができます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">個人情報の開示・訂正・削除</h2>
            <p className="text-gray-700 leading-relaxed">
              お客様は、当店が保有する個人情報について、開示・訂正・削除を求めることができます。
              ご要望がございましたら、下記のお問い合わせ窓口までご連絡ください。
              本人確認を行った上で、合理的な期間内に対応いたします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">お問い合わせ窓口</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>Glacière Lumière 個人情報保護責任者</strong>
              </p>
              <p className="text-gray-700 mb-2">
                住所：〒100-0001 東京都千代田区千代田1-1-1 ルミエールビル 1F
              </p>
              <p className="text-gray-700 mb-2">
                電話：03-****-****
              </p>
              <p className="text-gray-700">
                メール：privacy@glaciere-lumiere.jp
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">プライバシーポリシーの変更</h2>
            <p className="text-gray-700 leading-relaxed">
              当店は、法令の変更や事業内容の変更に伴い、
              本プライバシーポリシーを変更することがあります。
              変更する場合は、当店ウェブサイトに掲載してお知らせいたします。
            </p>
          </section>

          <section>
            <p className="text-gray-600 text-sm">
              制定日：2024年1月1日<br />
              最終更新日：2024年7月1日
            </p>
          </section>
        </div>

        {/* CTA */}
        <section className="text-center mt-16">
          <div className="bg-gradient-to-r from-luxury-charcoal to-gray-800 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-heading mb-4">
              ご不明な点がございましたら
            </h2>
            <p className="mb-6 text-luxury-cream/80">
              プライバシーポリシーについてご質問がございましたら、お気軽にお問い合わせください
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-brand-secondary hover:bg-yellow-500 text-luxury-charcoal font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              お問い合わせ
            </Link>
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