'use client'

import { useEffect, useState } from 'react'
import { usePuzzleStore } from '@/store/puzzle-store'
import { generateDailyPassword } from '@/utils/puzzle-utils'

export function GameResult() {
  const {
    gamePhase,
    difficulty,
    selectedImage,
    moves,
    timeRemaining,
    couponEarned,
    timeLimit,
    resetGame,
    setDifficulty
  } = usePuzzleStore()

  const [showCelebration, setShowCelebration] = useState(false)
  const [couponCode, setCouponCode] = useState<string>('')
  const [couponDate, setCouponDate] = useState<string>('')

  const isSuccess = gamePhase === 'success'
  const timeUsed = timeLimit - timeRemaining

  useEffect(() => {
    if (isSuccess) {
      setShowCelebration(true)
      const timer = setTimeout(() => setShowCelebration(false), 3000)
      
      // 特典コード生成
      if (couponEarned) {
        const today = new Date()
        const password = generateDailyPassword(today, difficulty)
        const dateStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`
        
        setCouponCode(password)
        setCouponDate(dateStr)
      }
      
      return () => clearTimeout(timer)
    }
  }, [isSuccess, couponEarned, difficulty])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getPerformanceRating = () => {
    const efficiency = (timeUsed * 100) / timeLimit
    if (efficiency < 30) return { text: '素晴らしい！', color: 'text-yellow-500', stars: '⭐⭐⭐' }
    if (efficiency < 60) return { text: 'グッド！', color: 'text-blue-500', stars: '⭐⭐' }
    return { text: 'クリア！', color: 'text-green-500', stars: '⭐' }
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* 成功/失敗アニメーション */}
      {showCelebration && isSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="text-center animate-bounce">
            <div className="text-8xl mb-4">🎉</div>
            <div className="text-4xl font-bold text-white">おめでとう！</div>
          </div>
        </div>
      )}

      <div className={`p-8 rounded-xl shadow-lg ${isSuccess ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
        {/* 結果ヘッダー */}
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{isSuccess ? '🎉' : '😢'}</div>
          <h2 className={`text-3xl font-bold mb-2 ${isSuccess ? 'text-green-700' : 'text-red-700'}`}>
            {isSuccess ? 'パズル完成！' : 'タイムアップ...'}
          </h2>
          <p className="text-gray-600">
            {selectedImage?.nameJa} {difficulty === 'beginner' ? '初級' : difficulty === 'intermediate' ? '中級' : '上級'}パズル
          </p>
        </div>

        {/* 成績表示 */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-4 bg-white rounded-lg">
            <div className="text-sm text-gray-500">手数</div>
            <div className="text-2xl font-bold text-gray-800">{moves}</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg">
            <div className="text-sm text-gray-500">時間</div>
            <div className="text-2xl font-bold text-gray-800">
              {formatTime(timeUsed)}
            </div>
          </div>
        </div>

        {isSuccess && (
          <>
            {/* 評価 */}
            <div className="text-center mb-6">
              <div className={`text-2xl font-bold ${getPerformanceRating().color}`}>
                {getPerformanceRating().stars} {getPerformanceRating().text}
              </div>
            </div>

            {/* クーポン */}
            {couponEarned && couponCode && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-dashed border-green-300 mb-6 shadow-lg">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-green-700 mb-6">
                    特典クーポンGET！
                  </h3>
                  
                  {/* 大きな割引表示 */}
                  <div className="bg-green-600 text-white text-4xl font-bold py-4 px-8 rounded-xl mb-6 shadow-md">
                    {couponEarned}
                  </div>
                  
                  {/* クーポン情報 */}
                  <div className="bg-white p-6 rounded-xl border border-green-200 mb-4">
                    <div className="grid grid-cols-2 gap-4 text-left">
                      <div>
                        <div className="text-sm text-gray-500 font-medium">有効期限</div>
                        <div className="text-lg font-bold text-gray-800">{couponDate}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-medium">特典コード</div>
                        <div className="text-2xl font-bold text-green-600 font-mono">{couponCode}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600 space-y-1">
                    <p className="font-semibold">📱 このスクリーンショットをレジで提示してください</p>
                    <p className="text-xs text-red-500">※有効期限：本日限り（{couponDate}）</p>
                    <p className="text-xs text-gray-500">※おひとり様1回限り</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* アクションボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {!isSuccess && (
            <button
              onClick={() => {
                setDifficulty(difficulty)
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              もう一度挑戦
            </button>
          )}
          <button
            onClick={() => setDifficulty(difficulty)}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            {isSuccess ? '同じ難易度でもう一度' : '画像を変えて挑戦'}
          </button>
          <button
            onClick={resetGame}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
          >
            難易度選択に戻る
          </button>
        </div>
      </div>
    </div>
  )
}