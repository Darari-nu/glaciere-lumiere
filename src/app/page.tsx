import { HeroSection } from '@/features/landing/hero-section'
import { BrandStorySection } from '@/features/landing/brand-story-section'
import { PremiumFlavorsSection } from '@/features/landing/premium-flavors-section'
import { ExperienceSection } from '@/features/landing/experience-section'
import { EmbeddedPuzzleSection } from '@/features/landing/embedded-puzzle-section'
import { Footer } from '@/features/layout/footer'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BrandStorySection />
      <PremiumFlavorsSection />
      <ExperienceSection />
      <EmbeddedPuzzleSection />
      
      
      <Footer />
    </main>
  )
}