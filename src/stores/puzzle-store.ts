import { create } from 'zustand'
import { PuzzleState, Tile, Difficulty } from '@/lib/types'
import { PUZZLE_CONFIGS } from '@/lib/constants'

interface PuzzleStore extends PuzzleState {
  startGame: (difficulty: Difficulty) => void
  moveTile: (tileId: number) => void
  shuffleTiles: () => void
  resetGame: () => void
  tick: () => void
}

const createInitialTiles = (gridSize: number): Tile[] => {
  const totalTiles = gridSize * gridSize
  return Array.from({ length: totalTiles }, (_, index) => ({
    id: index,
    position: index,
    correctPosition: index,
    isEmpty: index === totalTiles - 1,
  }))
}

const isValidMove = (tiles: Tile[], tilePosition: number, gridSize: number): boolean => {
  const emptyTile = tiles.find(tile => tile.isEmpty)
  if (!emptyTile) return false
  
  const emptyPos = emptyTile.position
  const row = Math.floor(tilePosition / gridSize)
  const col = tilePosition % gridSize
  const emptyRow = Math.floor(emptyPos / gridSize)
  const emptyCol = emptyPos % gridSize
  
  return (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
         (Math.abs(col - emptyCol) === 1 && row === emptyRow)
}

const checkCompletion = (tiles: Tile[]): boolean => {
  return tiles.every(tile => tile.position === tile.correctPosition)
}

export const usePuzzleStore = create<PuzzleStore>((set, get) => ({
  tiles: [],
  isShuffling: false,
  isPlaying: false,
  timeRemaining: 0,
  moves: 0,
  isCompleted: false,
  difficulty: 'beginner',

  startGame: (difficulty: Difficulty) => {
    const config = PUZZLE_CONFIGS[difficulty]
    const tiles = createInitialTiles(config.gridSize)
    
    set({
      difficulty,
      tiles,
      isShuffling: true,
      isPlaying: false,
      timeRemaining: config.timeLimit,
      moves: 0,
      isCompleted: false,
    })
    
    setTimeout(() => {
      get().shuffleTiles()
      set({ isShuffling: false, isPlaying: true })
    }, 1000)
  },

  moveTile: (tileId: number) => {
    const state = get()
    if (!state.isPlaying || state.isCompleted) return

    const { tiles, difficulty } = state
    const config = PUZZLE_CONFIGS[difficulty]
    const tile = tiles.find(t => t.id === tileId)
    const emptyTile = tiles.find(t => t.isEmpty)
    
    if (!tile || !emptyTile) return
    if (!isValidMove(tiles, tile.position, config.gridSize)) return

    const newTiles = tiles.map(t => {
      if (t.id === tileId) return { ...t, position: emptyTile.position }
      if (t.isEmpty) return { ...t, position: tile.position }
      return t
    })

    const isCompleted = checkCompletion(newTiles)
    
    set({
      tiles: newTiles,
      moves: state.moves + 1,
      isCompleted,
      isPlaying: !isCompleted,
    })
  },

  shuffleTiles: () => {
    const { tiles, difficulty } = get()
    const config = PUZZLE_CONFIGS[difficulty]
    const shuffled = [...tiles]
    
    for (let i = 0; i < 1000; i++) {
      const validMoves = shuffled
        .filter(tile => !tile.isEmpty)
        .filter(tile => isValidMove(shuffled, tile.position, config.gridSize))
      
      if (validMoves.length > 0) {
        const randomTile = validMoves[Math.floor(Math.random() * validMoves.length)]
        const emptyTile = shuffled.find(t => t.isEmpty)!
        
        const tileIndex = shuffled.findIndex(t => t.id === randomTile.id)
        const emptyIndex = shuffled.findIndex(t => t.isEmpty)
        
        shuffled[tileIndex] = { ...shuffled[tileIndex], position: emptyTile.position }
        shuffled[emptyIndex] = { ...shuffled[emptyIndex], position: randomTile.position }
      }
    }
    
    set({ tiles: shuffled })
  },

  resetGame: () => {
    set({
      tiles: [],
      isShuffling: false,
      isPlaying: false,
      timeRemaining: 0,
      moves: 0,
      isCompleted: false,
      difficulty: 'beginner',
    })
  },

  tick: () => {
    const state = get()
    if (!state.isPlaying || state.timeRemaining <= 0) return
    
    const newTime = state.timeRemaining - 1
    set({
      timeRemaining: newTime,
      isPlaying: newTime > 0,
    })
  },
}))