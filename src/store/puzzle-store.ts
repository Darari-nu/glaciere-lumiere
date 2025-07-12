import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { PuzzleImage } from '@/data/puzzle-images'
import { isPuzzleComplete, getValidMoves } from '@/utils/puzzle-utils'

interface PuzzleState {
  gamePhase: 'idle' | 'selecting' | 'playing' | 'shuffling' | 'success' | 'failed'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  selectedImage: PuzzleImage | null
  gridSize: number
  timeLimit: number
  timeRemaining: number
  moves: number
  isTimerRunning: boolean
  tiles: number[]
  emptyIndex: number
  couponEarned: string | null
  
  // Actions
  setDifficulty: (difficulty: 'beginner' | 'intermediate' | 'advanced') => void
  setSelectedImage: (image: PuzzleImage) => void
  startGame: () => void
  shuffleTiles: () => void
  moveTile: (index: number) => void
  endGame: (success: boolean) => void
  tick: () => void
  resetGame: () => void
}

const difficultySettings = {
  beginner: { gridSize: 3, timeLimit: 180 },  // 3分で余裕を持って
  intermediate: { gridSize: 4, timeLimit: 240 },
  advanced: { gridSize: 5, timeLimit: 300 }
}

export const usePuzzleStore = create<PuzzleState>()(
  persist(
    (set, get) => ({
      gamePhase: 'idle',
      difficulty: 'beginner',
      selectedImage: null,
      gridSize: 3,
      timeLimit: 180,
      timeRemaining: 180,
      moves: 0,
      isTimerRunning: false,
      tiles: [],
      emptyIndex: 8,
      couponEarned: null,

      setDifficulty: (difficulty) => {
        const settings = difficultySettings[difficulty]
        const totalTiles = settings.gridSize * settings.gridSize
        const initialTiles = Array.from({ length: totalTiles }, (_, i) => i === totalTiles - 1 ? 0 : i + 1)
        
        set({
          difficulty,
          gridSize: settings.gridSize,
          timeLimit: settings.timeLimit,
          timeRemaining: settings.timeLimit,
          tiles: initialTiles,
          emptyIndex: totalTiles - 1,
          gamePhase: 'selecting'
        })
      },

      setSelectedImage: (image) => {
        set({ selectedImage: image })
        get().startGame()
      },

      startGame: () => {
        const { gridSize } = get()
        const totalTiles = gridSize * gridSize
        const initialTiles = Array.from({ length: totalTiles }, (_, i) => i === totalTiles - 1 ? 0 : i + 1)
        
        set({
          gamePhase: 'shuffling',
          moves: 0,
          isTimerRunning: false,
          timeRemaining: get().timeLimit,
          tiles: initialTiles,
          emptyIndex: totalTiles - 1
        })
      },

      shuffleTiles: () => {
        const { gridSize } = get()
        const totalTiles = gridSize * gridSize
        
        // シャッフル可能な配置を生成
        let shuffled: number[]
        do {
          shuffled = Array.from({ length: totalTiles }, (_, i) => i === totalTiles - 1 ? 0 : i + 1)
          for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
          }
        } while (isPuzzleComplete(shuffled, gridSize))
        
        const emptyIndex = shuffled.indexOf(0)
        set({
          tiles: shuffled,
          emptyIndex,
          gamePhase: 'playing',
          isTimerRunning: true
        })
      },

      moveTile: (clickedIndex) => {
        const { tiles, emptyIndex, gridSize, gamePhase } = get()
        if (gamePhase !== 'playing') return
        
        const validMoves = getValidMoves(emptyIndex, gridSize)
        if (!validMoves.includes(clickedIndex)) return
        
        // タイルを移動
        const newTiles = [...tiles]
        newTiles[emptyIndex] = newTiles[clickedIndex]
        newTiles[clickedIndex] = 0
        
        const newMoves = get().moves + 1
        
        set({
          tiles: newTiles,
          emptyIndex: clickedIndex,
          moves: newMoves
        })
        
        // 完成チェック
        if (isPuzzleComplete(newTiles, gridSize)) {
          get().endGame(true)
        }
      },

      endGame: (success) => {
        const { difficulty } = get()
        const discounts = { beginner: '5% OFF', intermediate: '8% OFF', advanced: '12% OFF' }
        
        set({
          gamePhase: success ? 'success' : 'failed',
          isTimerRunning: false,
          couponEarned: success ? discounts[difficulty] : null
        })
      },

      tick: () => {
        const { timeRemaining, isTimerRunning } = get()
        if (isTimerRunning && timeRemaining > 0) {
          const newTime = timeRemaining - 1
          set({ timeRemaining: newTime })
          
          if (newTime === 0) {
            get().endGame(false)
          }
        }
      },

      resetGame: () => {
        set({
          gamePhase: 'idle',
          selectedImage: null,
          moves: 0,
          isTimerRunning: false,
          timeRemaining: get().timeLimit,
          tiles: [],
          emptyIndex: 0,
          couponEarned: null
        })
      },

      // Helper methods
      isPuzzleComplete: (tiles: number[]) => {
        const { gridSize } = get()
        const totalTiles = gridSize * gridSize
        for (let i = 0; i < totalTiles - 1; i++) {
          if (tiles[i] !== i + 1) return false
        }
        return tiles[totalTiles - 1] === 0
      },

      getValidMoves: (emptyIndex: number, size: number) => {
        const moves: number[] = []
        const row = Math.floor(emptyIndex / size)
        const col = emptyIndex % size
        
        if (row > 0) moves.push(emptyIndex - size)
        if (row < size - 1) moves.push(emptyIndex + size)
        if (col > 0) moves.push(emptyIndex - 1)
        if (col < size - 1) moves.push(emptyIndex + 1)
        
        return moves
      }
    }),
    {
      name: 'puzzle-game-storage',
      partialize: (state) => ({ 
        difficulty: state.difficulty,
        couponEarned: state.couponEarned 
      })
    }
  )
)