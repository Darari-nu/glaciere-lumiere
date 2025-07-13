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
    <div className="min-h-screen bg-gradient-to-b from-brand-primary via-luxury-charcoal to-brand-primary py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Link href="/" className="text-brand-secondary hover:underline mb-4 inline-block">
            ← ホームに戻る
          </Link>
          <h1 className="text-5xl md:text-7xl font-heading gold-gradient mb-4 tracking-tight">
            Puzzle Game
          </h1>
          <p className="text-xl text-luxury-cream/80 max-w-2xl mx-auto">
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
              className="px-8 py-3 bg-black/30 border border-brand-secondary/30 text-luxury-cream rounded-full hover:bg-brand-secondary/20 hover:border-brand-secondary transition-all duration-300"
            >
              最初に戻る
            </button>
          </div>
        )}
      </div>
    </div>
  )
}