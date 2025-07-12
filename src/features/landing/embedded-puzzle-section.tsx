import { EmbeddedPuzzleGame } from '@/components/puzzle/EmbeddedPuzzleGame'

export function EmbeddedPuzzleSection() {
  return (
    <section id="puzzle" className="py-32 bg-gradient-to-b from-brand-primary via-luxury-charcoal to-brand-primary relative overflow-hidden">
      {/* Background pattern */}
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

        {/* 埋め込みパズルゲーム */}
        <div className="max-w-4xl mx-auto">
          <EmbeddedPuzzleGame />
        </div>

        <div className="mt-16 text-center">
          <p className="luxury-text text-luxury-cream/60 text-sm tracking-wide mx-auto" style={{ maxWidth: 'none' }}>
            ゲームをお楽しみいただき、特別な体験をご堪能ください
          </p>
        </div>
      </div>
    </section>
  )
}