import Link from 'next/link'

export default function TermsPage() {
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
            利用規約
          </h1>
          <p className="text-xl text-gray-600">
            当店サービスご利用時の規約について
          </p>
        </section>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">第1条（適用）</h2>
            <p className="text-gray-700 leading-relaxed">
              本利用規約（以下「本規約」）は、Glacière Lumière（以下「当店」）が提供するサービス
              （店舗でのジェラート販売、ウェブサイト、パズルゲーム等を含む。以下「本サービス」）の
              利用条件を定めるものです。お客様には、本規約に同意の上、本サービスをご利用いただきます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">第2条（利用登録）</h2>
            <p className="text-gray-700 leading-relaxed">
              本サービスの利用に当たり、お客様に利用登録をしていただく場合があります。
              この場合、お客様は、当店の定める方法により利用登録を申請し、
              当店がこれを承認することによって、利用登録が完了するものとします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">第3条（禁止事項）</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              お客様は、本サービスの利用にあたり、以下の行為をしてはなりません：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当店、ほかのお客様、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>当店のサービスの運営を妨害するおそれのある行為</li>
              <li>他のお客様に関する個人情報等を収集または蓄積する行為</li>
              <li>不正アクセスをし、またはこれを試みる行為</li>
              <li>他のお客様に成りすます行為</li>
              <li>営利目的での本サービスの利用</li>
              <li>その他、当店が不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">第4条（本サービスの提供の停止等）</h2>
            <p className="text-gray-700 leading-relaxed">
              当店は、以下のいずれかの事由があると判断した場合、お客様に事前に通知することなく
              本サービスの全部または一部の提供を停止または中断することができるものとします。
              本条に基づく本サービスの提供の停止または中断により、
              お客様または第三者が被ったいかなる不利益または損害についても、
              当店は一切の責任を負わないものとします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">第5条（商品・価格）</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                当店で販売する商品の価格は、店舗に表示された価格および当店ウェブサイトに記載された価格といたします。
                価格には消費税が含まれています。
              </p>
              <p>
                商品の在庫には限りがあり、品切れの場合はご了承ください。
                また、季節限定商品については販売期間が限定されています。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">第6条（パズルゲーム特典について）</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                当店ウェブサイトのパズルゲームをクリアされた場合に提供される割引クーポンについては、
                以下の条件が適用されます：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>クーポンの有効期限は発行日から30日間です</li>
                <li>1回のお会計につき1枚まで利用可能です</li>
                <li>他の割引との併用はできません</li>
                <li>現金との引き換えはできません</li>
                <li>紛失・盗難については責任を負いかねます</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">第7条（知的財産権）</h2>
            <p className="text-gray-700 leading-relaxed">
              本サービスおよび本サービスに関連して当店がお客様に提供するコンテンツ
              （情報、データ、画像、動画、音声、音楽、文章、プログラム等を含みますが、これらに限定されません）
              に関する知的財産権は、当店または当店にライセンスを許諾している第三者に帰属します。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">第8条（免責事項）</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                当店は、本サービスに関して、お客様と第三者との間において生じた取引、連絡または紛争等について
                一切責任を負いません。
              </p>
              <p>
                当店は、本サービスが中断しないこと、エラーが生じないこと、
                本サービスの利用によりお客様の機器に不具合が生じないこと等について、
                いかなる保証もするものではありません。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">第9条（サービス内容の変更等）</h2>
            <p className="text-gray-700 leading-relaxed">
              当店は、お客様への事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、
              お客様はこれに同意するものとします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">第10条（利用規約の変更）</h2>
            <p className="text-gray-700 leading-relaxed">
              当店は必要と判断した場合には、お客様に通知することなくいつでも本規約を変更することができるものとします。
              なお、本規約の変更後、本サービスの利用を開始した場合には、
              当該お客様は変更後の規約に同意したものとみなします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">第11条（個人情報の取扱い）</h2>
            <p className="text-gray-700 leading-relaxed">
              当店は、本サービスの利用によって取得する個人情報については、
              当店「プライバシーポリシー」に従い適切に取り扱うものとします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">第12条（準拠法・裁判管轄）</h2>
            <p className="text-gray-700 leading-relaxed">
              本規約の解釈にあたっては、日本法を準拠法とします。
              本サービスに関して紛争が生じた場合には、
              東京地方裁判所を専属的合意管轄とします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-charcoal mb-4">お問い合わせ</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                本規約についてご質問がございましたら、下記までお問い合わせください。
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Glacière Lumière</strong>
              </p>
              <p className="text-gray-700 mb-2">
                住所：〒100-0001 東京都千代田区千代田1-1-1 ルミエールビル 1F
              </p>
              <p className="text-gray-700 mb-2">
                電話：03-****-****
              </p>
              <p className="text-gray-700">
                メール：info@glaciere-lumiere.jp
              </p>
            </div>
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
              ご利用をお待ちしております
            </h2>
            <p className="mb-6 text-luxury-cream/80">
              利用規約にご同意いただき、当店のプレミアムジェラートをお楽しみください
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