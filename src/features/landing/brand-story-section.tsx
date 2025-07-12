export function BrandStorySection() {
  return (
    <section className="py-32 bg-gradient-to-b from-brand-primary via-luxury-charcoal to-brand-primary relative">
      {/* Elegant background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-secondary)_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-8 py-20 text-center relative z-10">
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-brand-secondary"></div>
            <div className="mx-6 w-3 h-3 bg-brand-secondary rounded-full"></div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-brand-secondary"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading gold-gradient mb-8 tracking-tight">
            Our Story
          </h2>
        </div>
        
        <div className="space-y-8 text-luxury-cream/90">
          <p className="text-xl md:text-2xl luxury-text leading-relaxed">
            フランスの伝統技法と日本の繊細な美意識が融合した、
            唯一無二のジェラート工房。
          </p>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            厳選された季節の素材のみを使用し、
            一つ一つ丁寧に手作りで仕上げています。
            その日の気温や湿度まで考慮した、
            職人の技が光る至極の逸品をお届けします。
          </p>
        </div>
      </div>
    </section>
  )
}