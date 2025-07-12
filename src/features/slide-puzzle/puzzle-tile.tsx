'use client'

import { Tile } from '@/lib/types'
import { cn } from '@/lib/utils'

interface PuzzleTileProps {
  tile: Tile
  gridSize: number
  onTileClick: (tileId: number) => void
  isValidMove: boolean
}

export function PuzzleTile({ tile, gridSize, onTileClick, isValidMove }: PuzzleTileProps) {
  const tileSize = 100 / gridSize
  const row = Math.floor(tile.position / gridSize)
  const col = tile.position % gridSize
  
  if (tile.isEmpty) {
    return null
  }

  return (
    <div
      className={cn(
        'absolute transition-all duration-300 ease-in-out cursor-pointer',
        'bg-gradient-to-br from-brand-secondary to-amber-600',
        'border border-brand-primary rounded-lg',
        'flex items-center justify-center font-bold text-brand-primary',
        isValidMove ? 'hover:scale-105 hover:shadow-lg' : 'cursor-not-allowed opacity-70'
      )}
      style={{
        width: `${tileSize}%`,
        height: `${tileSize}%`,
        left: `${col * tileSize}%`,
        top: `${row * tileSize}%`,
      }}
      onClick={() => isValidMove && onTileClick(tile.id)}
    >
      {tile.id + 1}
    </div>
  )
}