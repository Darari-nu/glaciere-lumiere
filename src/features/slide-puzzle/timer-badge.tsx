'use client'

import { formatTime } from '@/lib/utils'

interface TimerBadgeProps {
  timeRemaining: number
  isPlaying: boolean
}

export function TimerBadge({ timeRemaining, isPlaying }: TimerBadgeProps) {
  const isLowTime = timeRemaining <= 30
  
  return (
    <div className={`inline-flex items-center px-4 py-2 rounded-full font-semibold ${
      isLowTime && isPlaying
        ? 'bg-red-500 text-white animate-pulse'
        : 'bg-brand-secondary text-brand-primary'
    }`}>
      <svg 
        className="w-5 h-5 mr-2" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
        />
      </svg>
      {formatTime(timeRemaining)}
    </div>
  )
}