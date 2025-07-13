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
      
      {/* デバッグ用セクション - パズル画像テスト */}
      <section className="py-16 bg-yellow-50 border-t-4 border-yellow-500">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-yellow-700">🔧 パズル画像テスト（一時的）</h2>
          <p className="text-yellow-600">ローカルとデプロイの違いを確認</p>
        </div>
        <FontSizeTest />
        
        {/* 実際のパズル画像セレクターもテスト */}
        <div className="mt-12 p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">実際のImageSelectorテスト</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-orange-100 flex items-center justify-center">
                <span className="text-4xl">🍑</span>
              </div>
              <div className="p-4">
                {/* 英語のみ表示 - 日本語完全削除 */}
                <div className="text-center">
                  <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#374151' }}>
                    Peach Sorbetto
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                <span className="text-4xl">🫐</span>
              </div>
              <div className="p-4">
                <div className="text-center">
                  <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#374151' }}>
                    Blueberry Lavanda
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}