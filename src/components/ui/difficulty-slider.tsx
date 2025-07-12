"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface DifficultyLevel {
  id: 'beginner' | 'intermediate' | 'advanced'
  name: string
  description: string
  icon: string
  color: string
  bgColor: string
}

interface DifficultySliderProps {
  onDifficultyChange: (difficulty: 'beginner' | 'intermediate' | 'advanced') => void
  defaultDifficulty?: 'beginner' | 'intermediate' | 'advanced'
  className?: string
}

const difficultyLevels: DifficultyLevel[] = [
  {
    id: 'beginner',
    name: '初級',
    description: '3×3',
    icon: '🟢',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    id: 'intermediate',
    name: '中級',
    description: '4×4',
    icon: '🟡',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100'
  },
  {
    id: 'advanced',
    name: '上級',
    description: '5×5',
    icon: '🔴',
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  }
]

export function DifficultySlider({ 
  onDifficultyChange, 
  defaultDifficulty = 'beginner',
  className 
}: DifficultySliderProps) {
  const [activeLevel, setActiveLevel] = useState(defaultDifficulty)

  const handleLevelChange = (level: 'beginner' | 'intermediate' | 'advanced') => {
    setActiveLevel(level)
    onDifficultyChange(level)
  }

  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-1 shadow-lg flex">
        {difficultyLevels.map((level) => {
          const isActive = activeLevel === level.id
          
          return (
            <button
              key={level.id}
              onClick={() => handleLevelChange(level.id)}
              className={cn(
                "relative flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full transition-all duration-300 font-semibold text-sm",
                "hover:bg-white/10",
                isActive 
                  ? "text-gray-800 bg-white shadow-md" 
                  : "text-white/80 hover:text-white"
              )}
            >
              <span className="text-lg">{level.icon}</span>
              <div className="text-center">
                <div className="font-bold">{level.name}</div>
                <div className="text-xs opacity-70">{level.description}</div>
              </div>
              
              {isActive && (
                <motion.div
                  layoutId="slider-background"
                  className="absolute inset-0 bg-white rounded-full shadow-md -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}