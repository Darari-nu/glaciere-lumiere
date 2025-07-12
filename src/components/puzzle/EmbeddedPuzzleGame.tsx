'use client'

import { useState } from 'react'
import { usePuzzleStore } from '@/store/puzzle-store'
import { DifficultySlider } from '@/components/ui/difficulty-slider'
import { ImageSelector } from '@/components/puzzle/ImageSelector'
import { PuzzleGame } from '@/components/puzzle/PuzzleGame'
import { GameResult } from '@/components/puzzle/GameResult'

export function EmbeddedPuzzleGame() {
  const { gamePhase, resetGame, setDifficulty } = usePuzzleStore()
  const [showGame, setShowGame] = useState(false)

  const handleDifficultyChange = (difficulty: 'beginner' | 'intermediate' | 'advanced') => {
    setDifficulty(difficulty)
    setShowGame(true)
  }

  const handleBackToSelection = () => {
    resetGame()
    setShowGame(false)
  }

  if (!showGame) {
    return (
      <div className="w-full">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            パズルゲームに挑戦！
          </h3>
          <p className="text-white/80 mb-6">
            難易度を選択してスライドパズルを楽しもう
          </p>
          <DifficultySlider 
            onDifficultyChange={handleDifficultyChange}
            className="mb-4"
          />
          <p className="text-sm text-white/60">
            クリア報酬：初級(3×3) 5%OFF / 中級(4×4) 8%OFF / 上級(5×5) 12%OFF
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white">
          🧩 パズルゲーム
        </h3>
        <button
          onClick={handleBackToSelection}
          className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-sm"
        >
          難易度変更
        </button>
      </div>

      {gamePhase === 'selecting' && <ImageSelector />}
      {(gamePhase === 'shuffling' || gamePhase === 'playing') && <PuzzleGame />}
      {(gamePhase === 'success' || gamePhase === 'failed') && <GameResult />}
    </div>
  )
}