'use client'

import { useEffect, useState } from 'react'
import { usePuzzleStore } from '@/store/puzzle-store'
import Image from 'next/image'

export function PuzzleGame() {
  const {
    gamePhase,
    selectedImage,
    gridSize,
    timeRemaining,
    moves,
    tiles,
    isTimerRunning,
    startGame,
    shuffleTiles,
    moveTile,
    tick
  } = usePuzzleStore()

  const [shuffling, setShuffling] = useState(false)

  useEffect(() => {
    if (gamePhase === 'shuffling') {
      setShuffling(true)
      const timer = setTimeout(() => {
        shuffleTiles()
        setShuffling(false)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [gamePhase, shuffleTiles])

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(tick, 1000)
      return () => clearInterval(interval)
    }
  }, [isTimerRunning, tick])

  useEffect(() => {
    if (gamePhase === 'selecting' && selectedImage) {
      startGame()
    }
  }, [gamePhase, selectedImage, startGame])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getTilePosition = (index: number) => {
    const row = Math.floor(index / gridSize)
    const col = index % gridSize
    return { row, col }
  }

  const getTileNumber = (index: number) => {
    return tiles[index]
  }

  if (!selectedImage) return null

  return (
    <div className="max-w-4xl mx-auto">
      {/* ゲーム情報 */}
      <div className="flex justify-between items-center mb-6 p-4 bg-white rounded-lg shadow">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-sm text-gray-500">時間</div>
            <div className={`text-xl font-bold ${timeRemaining <= 30 ? 'text-red-600' : 'text-blue-600'}`}>
              {formatTime(timeRemaining)}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500">手数</div>
            <div className="text-xl font-bold text-gray-800">{moves}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">{selectedImage.nameJa}</div>
          <div className="text-lg font-semibold text-gray-800">
            {gridSize}×{gridSize} パズル
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* パズルグリッド - メイン */}
        <div className="w-full">
          {shuffling && (
            <div className="text-center mb-4">
              <div className="text-lg font-semibold text-blue-600 animate-pulse">
                パズルをシャッフル中...
              </div>
            </div>
          )}
          
          <div 
            className="relative aspect-square max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden shadow-xl"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
              gap: '2px'
            }}
          >
            {Array.from({ length: gridSize * gridSize }, (_, index) => {
              const tileNumber = getTileNumber(index)
              const isEmpty = tileNumber === 0
              const { row, col } = getTilePosition(tileNumber === 0 ? 0 : tileNumber - 1)
              
              return (
                <div
                  key={index}
                  className={`
                    relative aspect-square cursor-pointer transition-all duration-200
                    ${isEmpty ? 'bg-gray-300' : 'bg-white hover:brightness-110'}
                    ${shuffling ? 'animate-pulse' : ''}
                  `}
                  onClick={() => !isEmpty && moveTile(index)}
                  style={{
                    backgroundImage: isEmpty ? 'none' : `url(${selectedImage.imagePath})`,
                    backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
                    backgroundPosition: `${col * (100 / (gridSize - 1))}% ${row * (100 / (gridSize - 1))}%`
                  }}
                >
                  {!isEmpty && (
                    <div className="absolute top-1 left-1 bg-black bg-opacity-50 text-white text-xs px-1 rounded">
                      {tileNumber}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* プレビュー画像 - 下部に小さく */}
        <div className="flex justify-center">
          <div className="text-center">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">完成画像</h3>
            <div className="w-32 h-32 relative rounded-lg overflow-hidden shadow-md">
              <Image
                src={selectedImage.imagePath}
                alt={selectedImage.nameJa}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {gamePhase === 'playing' && (
        <div className="text-center mt-6">
          <p className="text-white/80">
            💡 空白の隣のタイルをクリックして移動させよう！
          </p>
          <p className="text-xs text-white/60 mt-2">
            目標: 1, 2, 3, ... の順番に並べて、右下を空白にする
          </p>
        </div>
      )}
    </div>
  )
}