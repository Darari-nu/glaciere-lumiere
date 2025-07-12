'use client'

import { usePuzzleStore } from '@/store/puzzle-store'

const difficulties = [
  {
    level: 'beginner' as const,
    name: '初級',
    description: '3×3 グリッド',
    timeLimit: 90,
    icon: '🟢',
    bgColor: 'bg-green-100 hover:bg-green-200',
    borderColor: 'border-green-300'
  },
  {
    level: 'intermediate' as const,
    name: '中級',
    description: '4×4 グリッド',
    timeLimit: 120,
    icon: '🟡',
    bgColor: 'bg-yellow-100 hover:bg-yellow-200',
    borderColor: 'border-yellow-300'
  },
  {
    level: 'advanced' as const,
    name: '上級',
    description: '5×5 グリッド',
    timeLimit: 180,
    icon: '🔴',
    bgColor: 'bg-red-100 hover:bg-red-200',
    borderColor: 'border-red-300'
  }
]

export function DifficultySelector() {
  const { setDifficulty, gamePhase } = usePuzzleStore()

  const handleDifficultySelect = (level: 'beginner' | 'intermediate' | 'advanced') => {
    setDifficulty(level)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          難易度を選択してください
        </h2>
        <p className="text-gray-600">
          クリア報酬：初級 5%OFF / 中級 8%OFF / 上級 12%OFF
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {difficulties.map((difficulty) => (
          <button
            key={difficulty.level}
            onClick={() => handleDifficultySelect(difficulty.level)}
            className={`p-6 rounded-xl border-2 transition-all duration-200 transform hover:scale-105 ${difficulty.bgColor} ${difficulty.borderColor}`}
            disabled={gamePhase !== 'idle'}
          >
            <div className="text-center">
              <div className="text-4xl mb-3">{difficulty.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {difficulty.name}
              </h3>
              <p className="text-gray-600 mb-2">{difficulty.description}</p>
              <p className="text-sm text-gray-500">
                制限時間: {difficulty.timeLimit}秒
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}