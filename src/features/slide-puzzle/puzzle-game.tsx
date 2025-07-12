'use client'

import { useState } from 'react'
import { Difficulty } from '@/lib/types'
import { usePuzzleStore } from '@/stores/puzzle-store'
import { useCouponStore } from '@/stores/coupon-store'
import { PUZZLE_CONFIGS } from '@/lib/constants'
import { formatDiscount } from '@/lib/utils'
import { PuzzleCanvas } from './puzzle-canvas'

export function PuzzleGame() {
  const [gameState, setGameState] = useState<'select' | 'playing' | 'success' | 'failure'>('select')
  const [generatedCoupon, setGeneratedCoupon] = useState<string | null>(null)
  
  const { startGame, resetGame, difficulty, moves, timeRemaining } = usePuzzleStore()
  const { generateCoupon } = useCouponStore()

  const handleDifficultySelect = (selectedDifficulty: Difficulty) => {
    startGame(selectedDifficulty)
    setGameState('playing')
  }

  const handleSuccess = () => {
    const coupon = generateCoupon(difficulty)
    setGeneratedCoupon(coupon.id)
    setGameState('success')
  }

  const handleFailure = () => {
    setGameState('failure')
  }

  const handleRestart = () => {
    resetGame()
    setGameState('select')
    setGeneratedCoupon(null)
  }

  if (gameState === 'select') {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-heading text-brand-secondary mb-4">
            Choose Your Challenge
          </h2>
          <p className="text-gray-300">
            Select a difficulty level to start the puzzle
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {(Object.keys(PUZZLE_CONFIGS) as Difficulty[]).map((diff) => {
            const config = PUZZLE_CONFIGS[diff]
            return (
              <button
                key={diff}
                onClick={() => handleDifficultySelect(diff)}
                className="bg-brand-accent/20 hover:bg-brand-accent/30 p-8 rounded-lg text-center transition-all transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-brand-secondary mb-3 capitalize">
                  {diff}
                </h3>
                <p className="text-gray-300 mb-4">
                  {config.gridSize}×{config.gridSize} Grid<br />
                  {config.timeLimit} seconds
                </p>
                <p className="text-2xl font-bold text-brand-secondary">
                  {formatDiscount(config.discount)}
                </p>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  if (gameState === 'playing') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-heading text-brand-secondary mb-2 capitalize">
            {difficulty} Challenge
          </h2>
          <p className="text-gray-300">
            Arrange the tiles in order to win {formatDiscount(PUZZLE_CONFIGS[difficulty].discount)}
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <PuzzleCanvas onSuccess={handleSuccess} onFailure={handleFailure} />
        </div>

        <div className="text-center">
          <button
            onClick={handleRestart}
            className="text-brand-secondary hover:underline"
          >
            Give up and try again
          </button>
        </div>
      </div>
    )
  }

  if (gameState === 'success') {
    return (
      <div className="text-center space-y-6">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-3xl font-heading text-brand-secondary mb-4">
          Congratulations!
        </h2>
        <p className="text-xl text-gray-300 mb-6">
          You completed the {difficulty} puzzle in {moves} moves with {timeRemaining} seconds remaining!
        </p>
        
        <div className="bg-brand-secondary text-brand-primary p-6 rounded-lg max-w-md mx-auto">
          <h3 className="text-xl font-bold mb-2">Your Coupon Code</h3>
          <div className="text-2xl font-mono bg-brand-primary text-brand-secondary p-3 rounded">
            {generatedCoupon}
          </div>
          <p className="text-sm mt-2">
            {formatDiscount(PUZZLE_CONFIGS[difficulty].discount)} off your next reservation
          </p>
        </div>

        <div className="space-y-3">
          <a
            href="/reservation"
            className="block bg-brand-secondary text-brand-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Make Reservation
          </a>
          <button
            onClick={handleRestart}
            className="block w-full text-brand-secondary hover:underline"
          >
            Try Another Puzzle
          </button>
        </div>
      </div>
    )
  }

  if (gameState === 'failure') {
    return (
      <div className="text-center space-y-6">
        <div className="text-6xl mb-4">⏰</div>
        <h2 className="text-3xl font-heading text-brand-secondary mb-4">
          Time&apos;s Up!
        </h2>
        <p className="text-xl text-gray-300 mb-6">
          You made {moves} moves but couldn&apos;t complete the puzzle in time.
        </p>
        
        <div className="space-y-3">
          <button
            onClick={handleRestart}
            className="block w-full bg-brand-secondary text-brand-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Try Again
          </button>
          <a
            href="/reservation"
            className="block text-brand-secondary hover:underline"
          >
            Make Reservation Without Discount
          </a>
        </div>
      </div>
    )
  }

  return null
}