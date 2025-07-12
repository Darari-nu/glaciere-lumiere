import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-primary via-luxury-charcoal to-brand-primary">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <Link href="/" className="text-brand-secondary hover:underline mb-8 inline-block">
            ← ホームに戻る
          </Link>
          <h1 className="text-5xl md:text-7xl font-heading gold-gradient mb-8 tracking-tight">
            About Us
          </h1>
          <p className="text-xl text-luxury-cream/80 max-w-2xl mx-auto">
            Glacière Lumièreの物語と職人の想い
          </p>
        </div>

        <div className="space-y-12 text-luxury-cream/90">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-brand-secondary/20">
            <h2 className="text-3xl font-heading text-brand-secondary mb-6">私たちの物語</h2>
            <div className="readable-content space-y-6">
              <p className="text-content japanese-text">
                Glacière Lumièreは、フランスの伝統的なジェラート製法と日本の繊細な美意識を融合させた、世界でも類を見ないプレミアムジェラート専門店です。
              </p>
              <p className="text-content japanese-text">
                創業者である田中マリー・ルミエールは、パリの名門パティスリーで10年間修行を積み、その後イタリアのジェラート発祥の地シチリアで更なる技術を磨きました。
              </p>
              <p className="text-content japanese-text">
                帰国後、日本の四季折々の素材の美しさに魅せられ、フランス伝統の技法と日本の素材を組み合わせた独自のジェラートを開発しました。
              </p>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-brand-secondary/20">
            <h2 className="text-3xl font-heading text-brand-secondary mb-6">職人のこだわり</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="readable-content">
                <h3 className="text-xl font-semibold text-brand-gold-light mb-4">厳選素材</h3>
                <p className="text-content japanese-text text-base">
                  国内外から厳選した最高品質の素材のみを使用。契約農家から直接仕入れる季節の果物や、フランス産の最高級クリームなど、妥協のない素材選びを徹底しています。
                </p>
              </div>
              <div className="readable-content">
                <h3 className="text-xl font-semibold text-brand-gold-light mb-4">手作りの技</h3>
                <p className="text-content japanese-text text-base">
                  全て手作業で丁寧に仕上げるジェラートは、機械では表現できない滑らかさと深い味わいを実現。その日の気温や湿度まで考慮した、職人の経験と感性による至極の逸品です。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-brand-secondary/20">
            <h2 className="text-3xl font-heading text-brand-secondary mb-6">受賞歴</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-brand-secondary/20 pb-2">
                <span>国際ジェラート協会 最優秀賞</span>
                <span className="text-brand-gold-light">2023年</span>
              </div>
              <div className="flex justify-between items-center border-b border-brand-secondary/20 pb-2">
                <span>日本フードアワード グランプリ</span>
                <span className="text-brand-gold-light">2022年</span>
              </div>
              <div className="flex justify-between items-center border-b border-brand-secondary/20 pb-2">
                <span>ミシュラン推奨店</span>
                <span className="text-brand-gold-light">2021年</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
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