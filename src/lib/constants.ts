import { PuzzleConfig, Difficulty } from './types'

export const PUZZLE_CONFIGS: Record<Difficulty, PuzzleConfig> = {
  beginner: {
    difficulty: 'beginner',
    gridSize: 3,
    timeLimit: 90,
    discount: 5,
  },
  intermediate: {
    difficulty: 'intermediate',
    gridSize: 4,
    timeLimit: 120,
    discount: 8,
  },
  advanced: {
    difficulty: 'advanced',
    gridSize: 5,
    timeLimit: 180,
    discount: 12,
  },
}

export const CANVAS_SIZE = 600

export const BRAND_COLORS = {
  primary: '#0F1113',
  secondary: '#C7A86C', 
  accent: '#183A2F',
} as const