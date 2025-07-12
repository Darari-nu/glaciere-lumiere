import { gelatos } from '@/data/gelatos'

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* 背景画像 - 4つの縦長画像を並列配置 */}
      <div className="absolute inset-0 w-full h-full flex">
        {gelatos.map((gelato, index) => (
          <div 
            key={gelato.name} 
            className="flex-1 relative overflow-hidden"
          >
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${gelato.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div className={`absolute inset-0 bg-gradient-to-b ${gelato.color} mix-blend-overlay`}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
          </div>
        ))}
      </div>

      {/* ヒーローコンテンツ */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white space-y-8 px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] rounded-3xl transform scale-110 -z-10"></div>
            
            <div className="relative z-10 p-8 space-y-8">
              <h1 className="text-6xl md:text-8xl font-heading gold-gradient tracking-tight"
                  style={{ 
                    textShadow: '2px 2px 12px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.7)'
                  }}>
                Glacière Lumière
              </h1>
              <p className="text-xl md:text-2xl luxury-text text-luxury-cream/90 max-w-3xl mx-auto leading-relaxed"
                 style={{ 
                   textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.6)'
                 }}>
                職人が織りなす、至極のジェラート体験
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                <a
                  href="#flavors"
                  className="group bg-gradient-to-r from-brand-secondary to-brand-gold-light text-brand-primary px-8 py-4 rounded-full font-heading text-lg tracking-wider hover:shadow-2xl hover:shadow-brand-secondary/30 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    🍨 メニューを見る
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                </a>
                <a
                  href="#puzzle"
                  className="group bg-white/10 backdrop-blur-sm border-2 border-brand-secondary text-brand-secondary px-8 py-4 rounded-full font-heading text-lg tracking-wider hover:bg-brand-secondary hover:text-brand-primary transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    🧩 ゲームで割引GET
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                </a>
              </div>
              
              <div className="mt-12 animate-bounce">
                <div className="w-6 h-10 border-2 border-brand-secondary/60 rounded-full mx-auto flex justify-center">
                  <div className="w-1 h-3 bg-brand-secondary rounded-full mt-2 animate-pulse"></div>
                </div>
                <p className="text-sm text-brand-secondary/80 mt-2 tracking-wide"
                   style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                  スクロールして探索
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}