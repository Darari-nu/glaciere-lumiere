'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ExperienceItem {
  id: string
  title: string
  description: string
  icon: string
  detailTitle: string
  detailDescription: string
  bulletPoints: string[]
  image: string
}

const experienceItems: ExperienceItem[] = [
  {
    id: 'craftmanship',
    title: '職人の技',
    description: 'フランスの伝統技法で一つ一つ丁寧に手作り',
    icon: '👨‍🍳',
    detailTitle: '職人の技 - 伝統と革新の融合',
    detailDescription: 'パリの名門パティスリーで培った伝統技法と、最新の冷凍技術を組み合わせた独自の製法。職人が一つ一つ手作業で仕上げる至極のジェラート。',
    bulletPoints: [
      '温度管理を0.1℃単位で調整',
      '手作業による絶妙な空気の含有量調整', 
      '24時間熟成による深い味わいの追求',
      '毎日異なる気候条件に合わせた製法調整'
    ],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop'
  },
  {
    id: 'ingredients',
    title: '厳選素材',
    description: '季節の最高品質な素材のみを使用',
    icon: '🌿',
    detailTitle: '厳選素材 - 世界から集めた最高級の恵み',
    detailDescription: '契約農家から直接仕入れる旬の果物、フランス産最高級クリーム、イタリア・シチリア産海塩など、妥協のない素材選びを徹底。',
    bulletPoints: [
      '国内外30以上の契約農家との直接取引',
      'フランス・ノルマンディー産無添加クリーム',
      '有機栽培認証を受けた季節の果物',
      '職人が厳選した天然香料・スパイス'
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  },
  {
    id: 'experience',
    title: '特別体験',
    description: 'ここでしか味わえない唯一無二の逸品',
    icon: '✨',
    detailTitle: '特別体験 - 五感で楽しむ極上のひととき',
    detailDescription: '味覚だけでなく、視覚・嗅覚・触覚すべてで楽しめる特別な体験。季節限定フレーバーや、お客様だけのオーダーメイドジェラートもご用意。',
    bulletPoints: [
      '月替わり限定フレーバーの提供',
      'オーダーメイドジェラートサービス',
      '専用スプーンによる最適な温度での提供',
      'アート性の高い美しい盛り付け'
    ],
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&h=600&fit=crop'
  }
]

export function ExperienceSection() {
  const [selectedItem, setSelectedItem] = useState<ExperienceItem | null>(null)

  return (
    <section className="py-32 bg-gradient-to-b from-brand-primary via-luxury-charcoal to-brand-primary relative overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-secondary)_1px,_transparent_1px)] bg-[length:80px_80px]"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center relative z-10">
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-brand-secondary"></div>
            <div className="mx-6 w-3 h-3 bg-brand-secondary rounded-full"></div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-brand-secondary"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading gold-gradient mb-8 tracking-tight">
            Experience Luxury
          </h2>
        </div>
        
        <div className="space-y-12 text-luxury-cream/90">
          <div className="readable-content mx-auto">
            <p className="text-xl md:text-2xl luxury-text text-content japanese-text">
              一口ごとに広がる、洗練された味わいの世界。ここでしか味わえない特別な時間をお楽しみください。
            </p>
          </div>
          
          {/* クリック可能な特徴カード */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {experienceItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group text-left"
              >
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-brand-secondary/20 group-hover:border-brand-secondary/40 transition-all duration-500 group-hover:scale-105 cursor-pointer">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-heading text-brand-secondary mb-4 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-luxury-cream/80 text-content japanese-text mb-4">
                    {item.description}
                  </p>
                  <div className="text-brand-gold-light text-sm font-semibold">
                    詳細を見る →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* モーダル */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-luxury-charcoal to-brand-primary rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-brand-secondary/30">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{selectedItem.icon}</span>
                  <h3 className="text-3xl font-heading text-brand-secondary">
                    {selectedItem.detailTitle}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-brand-secondary hover:text-brand-gold-light text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-6">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="space-y-6 readable-content">
                  <p className="text-luxury-cream/90 text-content japanese-text">
                    {selectedItem.detailDescription}
                  </p>
                  
                  <div>
                    <h4 className="text-brand-gold-light font-semibold mb-4">特徴</h4>
                    <ul className="space-y-3">
                      {selectedItem.bulletPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3 text-luxury-cream/80">
                          <span className="text-brand-secondary mt-1 text-lg">•</span>
                          <span className="text-content japanese-text">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}