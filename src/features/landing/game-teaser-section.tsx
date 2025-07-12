import Link from 'next/link'

export function GameTeaserSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-brand-primary via-luxury-charcoal to-brand-primary relative overflow-hidden">
      {/* Luxury pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_var(--color-brand-secondary)_25%,_var(--color-brand-secondary)_75%,_transparent_75%)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
        <div className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-brand-secondary"></div>
            <div className="mx-6 flex space-x-2">
              <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
              <div className="w-2 h-2 bg-brand-gold-light rounded-full"></div>
              <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
            </div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-brand-secondary"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-heading gold-gradient mb-8 tracking-tight">
            パズルゲームに挑戦
          </h2>
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-heading text-brand-secondary mb-6 tracking-wide">
              特別割引をゲット
            </h3>
            <p className="text-xl md:text-2xl text-luxury-cream mb-4 max-w-3xl mx-auto leading-relaxed">
              ジェラートの美しいパズルゲームに挑戦！
            </p>
            <p className="luxury-text text-brand-gold-light/80 text-lg max-w-2xl mx-auto">
              制限時間内にクリアして、お得な割引クーポンを手に入れよう。
            </p>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {[
            { level: '初級', grid: '3×3', time: '90秒', discount: '5% OFF', bg: 'from-brand-secondary/20 to-brand-gold-light/10' },
            { level: '中級', grid: '4×4', time: '120秒', discount: '8% OFF', bg: 'from-brand-gold-light/20 to-brand-secondary/20' },
            { level: '上級', grid: '5×5', time: '180秒', discount: '12% OFF', bg: 'from-brand-secondary/30 to-brand-gold-dark/20' }
          ].map((item, index) => (
            <div key={item.level} className="group cursor-pointer">
              <div className={`bg-gradient-to-br ${item.bg} backdrop-blur-sm rounded-2xl p-8 border border-brand-secondary/30 shadow-xl shadow-black/40 group-hover:shadow-brand-secondary/20 transition-all duration-500 group-hover:scale-105`}>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-px bg-brand-secondary/50"></div>
                  <div className="mx-3 w-3 h-3 bg-brand-secondary rounded-full"></div>
                  <div className="w-12 h-px bg-brand-secondary/50"></div>
                </div>
                
                <h3 className="text-2xl font-heading text-brand-secondary mb-4 tracking-wide">
                  {item.level}
                </h3>
                <p className="luxury-text text-luxury-cream/80 mb-6 leading-relaxed">
                  {item.grid} • {item.time}
                </p>
                <div className="text-3xl font-heading text-brand-secondary tracking-wider elegant-shadow">
                  {item.discount}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <Link
            href="/puzzle"
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-brand-secondary to-brand-gold-light text-brand-primary px-12 py-5 text-xl luxury-text font-semibold rounded-full shadow-xl shadow-brand-secondary/25 hover:shadow-brand-secondary/40 transition-all duration-300 transform hover:scale-105"
          >
            <span>パズルゲームスタート</span>
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
          
          <p className="luxury-text text-luxury-cream/60 text-sm tracking-wide">
            ゲームをお楽しみいただき、特別な体験をご堪能ください
          </p>
        </div>
      </div>
    </section>
  )
}