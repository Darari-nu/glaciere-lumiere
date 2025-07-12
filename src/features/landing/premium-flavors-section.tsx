import { premiumFlavors } from '@/data/gelatos'

export function PremiumFlavorsSection() {
  return (
    <section id="flavors" className="py-32 bg-gradient-to-b from-brand-primary via-luxury-charcoal to-brand-primary relative">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-secondary)_1px,_transparent_1px)] bg-[length:80px_80px]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-8 py-20 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-brand-secondary"></div>
            <div className="mx-6 w-3 h-3 bg-brand-secondary rounded-full"></div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-brand-secondary"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading gold-gradient mb-8 tracking-tight">
            Premium Flavors
          </h2>
          <p className="text-xl md:text-2xl luxury-text text-luxury-cream/80 max-w-3xl mx-auto leading-relaxed">
            季節の恵みを閉じ込めた、6つの至極のフレーバー
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {premiumFlavors.map((flavor, index) => (
            <div key={flavor.name} className="group">
              <div className="bg-black/60 backdrop-blur-md rounded-2xl overflow-hidden border border-brand-secondary/20 group-hover:border-brand-secondary/40 transition-all duration-500 group-hover:scale-105">
                {/* 商品カップ画像 */}
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={flavor.image}
                    alt={`${flavor.nameJa} ジェラートカップ`}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    style={{ imageRendering: 'auto' as const }}
                  />
                  {/* カラーオーバーレイ */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${flavor.color} mix-blend-overlay`}></div>
                  {/* ダークオーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* 価格表示 */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-brand-secondary font-heading text-lg font-semibold">
                      {flavor.price}
                    </span>
                  </div>
                </div>
                
                {/* テキスト情報 */}
                <div className="p-6 text-center space-y-4">
                  <h3 className="text-xl font-heading text-brand-secondary tracking-wide">
                    {flavor.nameJa}
                  </h3>
                  <p className="luxury-text text-brand-gold-light italic text-sm">
                    {flavor.name}
                  </p>
                  <p className="text-luxury-cream/80 text-sm leading-relaxed">
                    {flavor.description}
                  </p>
                  <div className="w-12 h-px bg-brand-secondary/40 mx-auto mt-4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}