'use client'

import { useEffect } from 'react'
import { usePuzzleStore } from '@/stores/puzzle-store'
import { PUZZLE_CONFIGS } from '@/lib/constants'
import { PuzzleTile } from './puzzle-tile'
import { TimerBadge } from './timer-badge'

interface PuzzleCanvasProps {
  onSuccess: () => void
  onFailure: () => void
}

export function PuzzleCanvas({ onSuccess, onFailure }: PuzzleCanvasProps) {
  const {
    tiles,
    isPlaying,
    isShuffling,
    timeRemaining,
    moves,
    isCompleted,
    difficulty,
    moveTile,
    tick,
  } = usePuzzleStore()

  const config = PUZZLE_CONFIGS[difficulty]

  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      tick()
    }, 1000)

    return () => clearInterval(timer)
  }, [isPlaying, tick])

  useEffect(() => {
    if (isCompleted) {
      onSuccess()
    } else if (timeRemaining === 0 && isPlaying) {
      onFailure()
    }
  }, [isCompleted, timeRemaining, isPlaying, onSuccess, onFailure])

  const isValidMove = (tileId: number): boolean => {
    const tile = tiles.find(t => t.id === tileId)
    const emptyTile = tiles.find(t => t.isEmpty)
    if (!tile || !emptyTile) return false

    const tileRow = Math.floor(tile.position / config.gridSize)
    const tileCol = tile.position % config.gridSize
    const emptyRow = Math.floor(emptyTile.position / config.gridSize)
    const emptyCol = emptyTile.position % config.gridSize

    return (Math.abs(tileRow - emptyRow) === 1 && tileCol === emptyCol) ||
           (Math.abs(tileCol - emptyCol) === 1 && tileRow === emptyRow)
  }

  if (isShuffling) {
    return (
      <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-secondary mx-auto mb-4"></div>
          <p className="text-brand-secondary">Shuffling puzzle...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <TimerBadge timeRemaining={timeRemaining} isPlaying={isPlaying} />
        <div className="text-brand-secondary">
          Moves: <span className="font-bold">{moves}</span>
        </div>
      </div>

      <div className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden">
        {tiles.map((tile) => (
          <PuzzleTile
            key={tile.id}
            tile={tile}
            gridSize={config.gridSize}
            onTileClick={moveTile}
            isValidMove={isValidMove(tile.id)}
          />
        ))}
      </div>
    </div>
  )
}