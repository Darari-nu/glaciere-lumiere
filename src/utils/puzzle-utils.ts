// 決定論的パスワード生成
export function generateDailyPassword(date: Date, difficulty: 'beginner' | 'intermediate' | 'advanced'): string {
  const seed = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}-${difficulty}`
  
  // シンプルなハッシュ関数（文字列から数値生成）
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // 32bit整数に変換
  }
  
  // 正の数にして4桁にする
  const positive = Math.abs(hash)
  const fourDigit = (positive % 9000) + 1000 // 1000-9999の範囲
  
  return fourDigit.toString()
}

// QRコード用文字列生成
export function generateCouponData(date: Date, difficulty: 'beginner' | 'intermediate' | 'advanced', discount: string): string {
  const password = generateDailyPassword(date, difficulty)
  const dateStr = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
  
  return `GELATO-COUPON:${dateStr}:${difficulty.toUpperCase()}:${password}:${discount}`
}

// 日付チェック（その日のみ有効）
export function isCouponValid(couponDate: string): boolean {
  const today = new Date()
  const todayStr = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`
  return couponDate === todayStr
}

// Fisher-Yatesシャッフル
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// パズルの完成判定
export function isPuzzleComplete(tiles: number[], size: number): boolean {
  const totalTiles = size * size
  for (let i = 0; i < totalTiles - 1; i++) {
    if (tiles[i] !== i + 1) {
      return false
    }
  }
  return tiles[totalTiles - 1] === 0 // 最後は空白
}

// 移動可能な位置を取得
export function getValidMoves(emptyIndex: number, size: number): number[] {
  const moves: number[] = []
  const row = Math.floor(emptyIndex / size)
  const col = emptyIndex % size
  
  // 上
  if (row > 0) moves.push(emptyIndex - size)
  // 下
  if (row < size - 1) moves.push(emptyIndex + size)
  // 左
  if (col > 0) moves.push(emptyIndex - 1)
  // 右
  if (col < size - 1) moves.push(emptyIndex + 1)
  
  return moves
}