import Link from 'next/link'

const flavors = [
  {
    id: 'peach',
    name: 'Peach Sorbetto',
    nameJa: 'ピーチ・ソルベット',
    price: '¥680',
    description: '岡山県産白桃を使用した、フレッシュで上品な甘さのソルベット',
    ingredients: '岡山県産白桃、きび砂糖、レモン果汁、海塩',
    emoji: '🍑'
  },
  {
    id: 'blueberry',
    name: 'Blueberry Lavanda',
    nameJa: 'ブルーベリー・ラベンダー',
    price: '¥720',
    description: '信州産ブルーベリーとフランス産ラベンダーの香り高い組み合わせ',
    ingredients: '信州産ブルーベリー、フランス産ラベンダー、生クリーム',
    emoji: '🫐'
  },
  {
    id: 'kiwi',
    name: 'Kiwi Verde',
    nameJa: 'キウイ・ヴェルデ',
    price: '¥650',
    description: '静岡県産キウイの酸味と甘みが絶妙にバランスした爽やかな味わい',
    ingredients: '静岡県産キウイ、はちみつ、ライム果汁',
    emoji: '🥝'
  },
  {
    id: 'lemon',
    name: 'Limone Fresco',
    nameJa: 'リモーネ・フレスコ',
    price: '¥660',
    description: '瀬戸内産レモンの芳醇な香りと酸味を活かした定番フレーバー',
    ingredients: '瀬戸内産レモン、きび砂糖、マスカルポーネ',
    emoji: '🍋'
  },
  {
    id: 'mango',
    name: 'Mango Tropicale',
    nameJa: 'マンゴー・トロピカーレ',
    price: '¥710',
    description: '宮崎県産完熟マンゴーの濃厚な甘さとトロピカルな風味',
    ingredients: '宮崎県産マンゴー、ココナッツミルク、ライム',
    emoji: '🥭'
  },
  {
    id: 'raspberry',
    name: 'Lampone Rosso',
    nameJa: 'ランポーネ・ロッソ',
    price: '¥730',
    description: '北海道産ラズベリーの甘酸っぱさが口いっぱいに広がる贅沢な味わい',
    ingredients: '北海道産ラズベリー、生クリーム、バニラビーンズ',
    emoji: '🍇'
  }
]

export default function FlavorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-primary via-luxury-charcoal to-brand-primary">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <Link href="/" className="text-brand-secondary hover:underline mb-8 inline-block">
            ← ホームに戻る
          </Link>
          <h1 className="text-5xl md:text-7xl font-heading gold-gradient mb-8 tracking-tight">
            Premium Flavors
          </h1>
          <p className="text-xl text-luxury-cream/80 max-w-3xl mx-auto">
            厳選された国産素材とフランス伝統技法が織りなす、6つの至極のフレーバー
          </p>
        </div>

        {/* フレーバー一覧 */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {flavors.map((flavor) => (
            <div key={flavor.id} className="bg-black/20 backdrop-blur-sm rounded-2xl border border-brand-secondary/20 overflow-hidden hover:border-brand-secondary/40 transition-all duration-300 transform hover:scale-105">
              <div className="aspect-square bg-gradient-to-br from-brand-secondary/20 to-brand-gold-light/20 flex items-center justify-center">
                <span className="text-6xl">{flavor.emoji}</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-brand-secondary mb-1">
                      {flavor.nameJa}
                    </h3>
                    <p className="text-sm text-luxury-cream/70 italic">
                      {flavor.name}
                    </p>
                  </div>
                  <span className="text-2xl font-bold text-brand-gold-light">
                    {flavor.price}
                  </span>
                </div>
                <p className="text-luxury-cream/90 mb-4 leading-relaxed text-content japanese-text">
                  {flavor.description}
                </p>
                <div className="border-t border-brand-secondary/20 pt-4">
                  <h4 className="text-sm font-semibold text-brand-gold-light mb-2">
                    主な原材料
                  </h4>
                  <p className="text-sm text-luxury-cream/70">
                    {flavor.ingredients}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* 季節限定メニュー */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading text-brand-secondary text-center mb-12">
            季節限定フレーバー
          </h2>
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-brand-secondary/20 text-center">
            <h3 className="text-2xl font-bold text-brand-secondary mb-4">
              🌸 春限定：桜とあんこのジェラート
            </h3>
            <p className="text-luxury-cream/90 mb-6 leading-relaxed text-content japanese-text">
              吉野の桜葉と北海道産小豆を使用した、日本の春を表現した特別なフレーバー。
              桜の上品な香りと小豆の優しい甘さが絶妙にマッチした季節限定品です。
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-brand-gold-light mb-2">販売期間</h4>
                <p className="text-luxury-cream/80">3月上旬〜5月上旬（桜の開花に合わせて）</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-gold-light mb-2">価格</h4>
                <p className="text-luxury-cream/80">¥800（特別価格）</p>
              </div>
            </div>
          </div>
        </section>

        {/* 製造プロセス */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading text-brand-secondary text-center mb-12">
            こだわりの製造プロセス
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-brand-secondary/20">
              <div className="w-20 h-20 bg-brand-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-brand-gold-light mb-2">素材選び</h3>
              <p className="text-luxury-cream/80 text-content japanese-text">
                全国の契約農家から届く旬の素材を、職人が一つ一つ厳選。その日の状態を見極めて最適な素材のみを使用します。
              </p>
            </div>
            <div className="text-center bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-brand-secondary/20">
              <div className="w-20 h-20 bg-brand-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚗️</span>
              </div>
              <h3 className="text-xl font-bold text-brand-gold-light mb-2">調合</h3>
              <p className="text-luxury-cream/80 text-content japanese-text">
                フランス伝統のレシピをベースに、日本の素材に合わせて独自に調整。絶妙なバランスを追求した調合技術です。
              </p>
            </div>
            <div className="text-center bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-brand-secondary/20">
              <div className="w-20 h-20 bg-brand-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❄️</span>
              </div>
              <h3 className="text-xl font-bold text-brand-gold-light mb-2">熟成</h3>
              <p className="text-luxury-cream/80 text-content japanese-text">
                特別な冷却技術により、素材の風味を最大限に引き出しながら、なめらかな食感を実現。時間をかけた熟成が極上の味わいを生み出します。
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