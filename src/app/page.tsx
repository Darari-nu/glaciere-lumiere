import { HeroSection } from '@/features/landing/hero-section'
import { BrandStorySection } from '@/features/landing/brand-story-section'
import { PremiumFlavorsSection } from '@/features/landing/premium-flavors-section'
import { ExperienceSection } from '@/features/landing/experience-section'
import { EmbeddedPuzzleSection } from '@/features/landing/embedded-puzzle-section'
import { FontSizeTest } from '@/components/debug/FontSizeTest'
import { Footer } from '@/features/layout/footer'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BrandStorySection />
      <PremiumFlavorsSection />
      <ExperienceSection />
      <EmbeddedPuzzleSection />
      
      {/* デバッグ用セクション - 一時的 */}
      <section className="py-16 bg-red-50 border-t-4 border-red-500">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-red-700">🚨 デバッグセクション（一時的）</h2>
          <p className="text-red-600">フォントサイズ問題の調査用</p>
        </div>
        <FontSizeTest />
      </section>
      
      <Footer />
    </main>
  )
}