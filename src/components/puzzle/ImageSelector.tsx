'use client'

import { useState } from 'react'
import { usePuzzleStore } from '@/store/puzzle-store'
import { puzzleImages } from '@/data/puzzle-images'
import Image from 'next/image'

export function ImageSelector() {
  const { setSelectedImage, difficulty } = usePuzzleStore()
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  const difficultyInfo = {
    beginner: { name: '初級', color: 'text-green-600', gridSize: '3×3' },
    intermediate: { name: '中級', color: 'text-yellow-600', gridSize: '4×4' },
    advanced: { name: '上級', color: 'text-red-600', gridSize: '5×5' }
  }

  const currentDifficulty = difficultyInfo[difficulty]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          パズル画像を選択してください
        </h2>
        <p className="text-white/80 mb-2">
          選択した画像でスライドパズルを作成します
        </p>
        <div className={`inline-block px-4 py-2 rounded-full ${currentDifficulty.color} bg-white/90 font-semibold`}>
          {currentDifficulty.name} ({currentDifficulty.gridSize})
        </div>
      </div>


      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {puzzleImages.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="aspect-square relative">
              <img
                src={image.previewPath}
                alt={image.nameJa}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  // フォールバックとして絵文字を表示
                  const parent = e.currentTarget.parentElement
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-pink-100 to-orange-100">
                        🍨
                      </div>
                    `
                  }
                }}
              />
            </div>
            <div className="p-4">
              <div className="font-bold text-gray-800 mb-1" style={{ fontSize: '12px !important', lineHeight: '1.3', fontWeight: 'bold' }}>{image.nameJa}</div>
              <p className="text-gray-600" style={{ fontSize: '11px !important', lineHeight: '1.2' }}>{image.name}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-white/60">
          💡 ヒント: 色の境界がはっきりした画像の方が簡単です
        </p>
      </div>
    </div>
  )
}