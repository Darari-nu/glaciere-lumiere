'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faClock, faUserTie, faTrophy, faNewspaper } from '@fortawesome/free-solid-svg-icons'

const newsArticles = {
  '1': {
    id: 1,
    date: '2024.07.15',
    category: '新商品',
    title: '夏季限定「メロン・エスティーヴォ」販売開始',
    excerpt: '茨城県産クラウンメロンを使用した夏季限定フレーバーの販売を開始いたします。',
    icon: faGift,
    content: `
      <p>この度、Glacière Lumièreでは夏季限定フレーバー「メロン・エスティーヴォ」の販売を開始いたします。</p>
      
      <h3>商品概要</h3>
      <p>茨城県産の最高級クラウンメロンを贅沢に使用した、夏にぴったりの爽やかなジェラートです。メロン本来の上品な甘さと香りを活かすため、添加物を一切使用せず、職人が一つ一つ丁寧に手作りしております。</p>
      
      <h3>販売期間・価格</h3>
      <ul>
        <li>販売期間：2024年7月15日（月）〜9月30日（月）</li>
        <li>価格：¥850（税込）</li>
        <li>販売数：1日限定30カップ</li>
      </ul>
      
      <h3>こだわりポイント</h3>
      <p>使用するクラウンメロンは、茨城県の契約農家で丹精込めて育てられた最高品質のもののみを厳選。収穫から24時間以内に加工することで、メロンの鮮度と風味を最大限に活かしています。</p>
      
      <p>ぜひこの機会に、極上の夏の味わいをお楽しみください。</p>
    `
  },
  '2': {
    id: 2,
    date: '2024.07.01',
    category: 'お知らせ',
    title: '7月の営業時間変更について',
    excerpt: '夏季期間中は営業時間を延長し、10:00-22:00とさせていただきます。',
    icon: faClock,
    content: `
      <p>平素より格別のご愛顧を賜り、誠にありがとうございます。</p>
      
      <h3>営業時間変更のお知らせ</h3>
      <p>7月1日（月）より、夏季期間中の営業時間を以下のとおり変更させていただきます。</p>
      
      <h3>変更内容</h3>
      <ul>
        <li>変更前：11:00 - 21:00</li>
        <li>変更後：10:00 - 22:00</li>
        <li>変更期間：2024年7月1日（月）〜8月31日（土）</li>
      </ul>
      
      <h3>変更理由</h3>
      <p>夏季期間中はより多くのお客様にご利用いただけるよう、営業時間を1時間ずつ延長いたします。朝の涼しい時間帯から、夜のお食事後のデザートタイムまで、幅広い時間でお楽しみいただけます。</p>
      
      <p>9月1日（日）より通常営業時間（11:00 - 21:00）に戻らせていただきます。</p>
      
      <p>お客様にはご迷惑をおかけいたしますが、何卒ご理解のほどよろしくお願いいたします。</p>
    `
  },
  '3': {
    id: 3,
    date: '2024.06.20',
    category: 'イベント',
    title: 'ジェラート作り体験教室開催',
    excerpt: '職人による本格的なジェラート作り体験教室を8月に開催予定です。',
    icon: faUserTie,
    content: `
      <p>Glacière Lumièreでは、8月にジェラート作り体験教室を開催いたします。</p>
      
      <h3>イベント概要</h3>
      <p>当店のマエストロ・田中勇樹が直接指導する、本格的なジェラート作り体験教室です。プロの技術と厳選された素材を使って、ご自身だけのオリジナルジェラートを作っていただけます。</p>
      
      <h3>開催詳細</h3>
      <ul>
        <li>開催日時：8月10日（土）、8月24日（土） 各日14:00〜17:00</li>
        <li>参加費：¥8,000（材料費込み、作ったジェラート2カップお持ち帰り）</li>
        <li>定員：各回8名様（要予約）</li>
        <li>対象：中学生以上（未成年者は保護者同伴）</li>
      </ul>
      
      <h3>体験内容</h3>
      <ol>
        <li>ジェラートの歴史と製法についての講義</li>
        <li>素材の選び方と扱い方のレクチャー</li>
        <li>実際のジェラート作り体験</li>
        <li>試食とマエストロからのアドバイス</li>
      </ol>
      
      <h3>お申し込み</h3>
      <p>7月1日（月）10:00より、お電話またはご来店にて受付開始いたします。定員に達し次第締切となりますので、お早めにお申し込みください。</p>
      
      <p>皆様のご参加を心よりお待ちしております。</p>
    `
  },
  '4': {
    id: 4,
    date: '2024.06.10',
    category: '受賞',
    title: '国際ジェラート大会で金賞受賞',
    excerpt: 'イタリア・ミラノで開催された国際ジェラート大会で当店の「ピーチ・ソルベット」が金賞を受賞いたしました。',
    icon: faTrophy,
    content: `
      <p>この度、イタリア・ミラノで開催された「International Gelato Championship 2024」において、当店の「ピーチ・ソルベット」が金賞を受賞いたしました。</p>
      
      <h3>大会概要</h3>
      <p>International Gelato Championshipは、世界中のジェラート職人が技術を競う権威ある国際大会です。今年は45カ国から300名を超える職人が参加し、厳正な審査の結果、栄えある金賞をいただくことができました。</p>
      
      <h3>受賞作品について</h3>
      <p>「ピーチ・ソルベット」は、岡山県産の白桃を使用した当店の代表的なフレーバーです。桃本来の甘さと香りを最大限に活かすため、添加物を一切使用せず、伝統的な製法で丁寧に作り上げています。</p>
      
      <h3>審査員からのコメント</h3>
      <p>「素材の持つ自然な甘さと酸味のバランスが絶妙で、口の中でとろけるような滑らかな食感が印象的。日本の職人技とフランスの伝統技法が見事に融合した逸品」との高い評価をいただきました。</p>
      
      <h3>今後の展望</h3>
      <p>この受賞を励みに、今後もお客様に愛される最高品質のジェラートを提供し続けてまいります。また、日本のジェラート文化の発展に貢献できるよう、技術の向上と後進の指導にも力を入れてまいります。</p>
      
      <p>皆様の温かいご支援のおかげで、このような栄誉ある賞をいただくことができました。心より感謝申し上げます。</p>
    `
  },
  '5': {
    id: 5,
    date: '2024.05.25',
    category: 'メディア',
    title: 'グルメ雑誌「Tokyo Gourmet」に掲載',
    excerpt: '月刊グルメ雑誌「Tokyo Gourmet」7月号の特集「注目のスイーツ店」に掲載されました。',
    icon: faNewspaper,
    content: `
      <p>月刊グルメ雑誌「Tokyo Gourmet」7月号の特集「注目のスイーツ店 2024夏」に、Glacière Lumièreが掲載されました。</p>
      
      <h3>掲載内容</h3>
      <p>4ページにわたる特集記事では、当店のブランドストーリー、職人のこだわり、人気フレーバーの紹介などが詳しく紹介されています。また、マエストロ・田中勇樹のインタビューも掲載され、ジェラート作りへの情熱と技術について語っています。</p>
      
      <h3>撮影について</h3>
      <p>撮影は店内で行われ、実際のジェラート製造過程から美しく盛り付けられた商品まで、プロのカメラマンによって丁寧に撮影されました。特に、職人の手作業による製造シーンは、読者の皆様にも当店のこだわりを感じていただけることと思います。</p>
      
      <h3>記事の見どころ</h3>
      <ul>
        <li>フランス修行時代のエピソード</li>
        <li>素材選びへのこだわり</li>
        <li>6つの定番フレーバーの誕生秘話</li>
        <li>季節限定メニューの開発プロセス</li>
        <li>お客様からの反響と今後の展望</li>
      </ul>
      
      <h3>Tokyo Gourmet 7月号</h3>
      <p>全国の書店・コンビニエンスストアにて好評発売中です。ぜひお手に取ってご覧ください。</p>
      
      <p>このような機会をいただき、誠にありがとうございました。今後も皆様に愛される店づくりに努めてまいります。</p>
    `
  }
}

export default function NewsArticlePage() {
  const params = useParams()
  const id = params.id as string
  const article = newsArticles[id as keyof typeof newsArticles]

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-brand-primary via-luxury-charcoal to-brand-primary">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl font-heading text-brand-secondary mb-4">記事が見つかりません</h1>
          <Link href="/news" className="text-brand-gold-light hover:underline">
            ← ニュース一覧に戻る
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-primary via-luxury-charcoal to-brand-primary">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/news" className="text-brand-secondary hover:underline mb-8 inline-block">
            ← ニュース一覧に戻る
          </Link>
        </div>

        <article className="bg-black/20 backdrop-blur-sm rounded-2xl border border-brand-secondary/20 overflow-hidden">
          <div className="p-8">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 w-20 h-20 bg-brand-secondary/20 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={article.icon} className="text-3xl text-brand-secondary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                  <time className="text-sm text-luxury-cream/70 font-mono">{article.date}</time>
                  <span className={`
                    inline-block px-3 py-1 rounded-full text-xs font-semibold
                    ${article.category === '新商品' ? 'bg-green-600/20 text-green-300 border border-green-500/30' : ''}
                    ${article.category === 'お知らせ' ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30' : ''}
                    ${article.category === 'イベント' ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30' : ''}
                    ${article.category === '受賞' ? 'bg-brand-secondary/20 text-brand-secondary border border-brand-secondary/30' : ''}
                    ${article.category === 'メディア' ? 'bg-pink-600/20 text-pink-300 border border-pink-500/30' : ''}
                  `}>
                    {article.category}
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-4 leading-tight">
                  {article.title}
                </h1>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <div 
                className="text-luxury-cream/90 leading-relaxed text-content japanese-text space-y-4"
                dangerouslySetInnerHTML={{ __html: article.content }}
                style={{
                  fontSize: 'clamp(16px, 1.1vw, 18px)',
                  lineHeight: '1.8'
                }}
              />
            </div>
          </div>
        </article>

        <div className="text-center mt-12">
          <Link
            href="/news"
            className="bg-gradient-to-r from-brand-secondary to-brand-gold-light text-brand-primary px-8 py-4 rounded-full font-heading text-lg tracking-wider hover:shadow-2xl hover:shadow-brand-secondary/30 transition-all duration-300 transform hover:scale-105"
          >
            ニュース一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  )
}