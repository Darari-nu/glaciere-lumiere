'use client'

import Link from 'next/link'
import { usePuzzleStore } from '@/store/puzzle-store'
import { DifficultySelector } from '@/components/puzzle/DifficultySelector'
import { ImageSelector } from '@/components/puzzle/ImageSelector'
import { PuzzleGame } from '@/components/puzzle/PuzzleGame'
import { GameResult } from '@/components/puzzle/GameResult'

export default function PuzzlePage() {
  const { gamePhase, resetGame } = usePuzzleStore()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
            ← ホームに戻る
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🧩 Glacière Puzzle Game
          </h1>
          <p className="text-gray-600">
            スライドパズルを完成させてクーポンをGETしよう！
          </p>
        </div>

        {gamePhase === 'idle' && <DifficultySelector />}
        {gamePhase === 'selecting' && <ImageSelector />}
        {(gamePhase === 'shuffling' || gamePhase === 'playing') && <PuzzleGame />}
        {(gamePhase === 'success' || gamePhase === 'failed') && <GameResult />}

        {gamePhase !== 'idle' && (
          <div className="text-center mt-8">
            <button
              onClick={resetGame}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              最初に戻る
            </button>
          </div>
        )}
      </div>
    </div>
  )
}