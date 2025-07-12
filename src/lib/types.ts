export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export interface PuzzleConfig {
  difficulty: Difficulty
  gridSize: number
  timeLimit: number
  discount: number
}

export interface Tile {
  id: number
  position: number
  correctPosition: number
  isEmpty: boolean
}

export interface PuzzleState {
  tiles: Tile[]
  isShuffling: boolean
  isPlaying: boolean
  timeRemaining: number
  moves: number
  isCompleted: boolean
  difficulty: Difficulty
}

export interface Coupon {
  id: string
  discount: number
  difficulty: Difficulty
  expiresAt: Date
  isUsed: boolean
}

export interface ReservationData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
  couponId?: string
}