'use client'

export function FontSizeTest() {
  const testImages = [
    { id: 1, nameJa: 'テストタイトル1', name: 'Test Title 1' },
    { id: 2, nameJa: 'テストタイトル2', name: 'Test Title 2' },
    { id: 3, nameJa: 'テストタイトル3', name: 'Test Title 3' }
  ]

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-8 text-center">フォントサイズテスト</h2>
      
      {/* 元のパズル画像と同じ構造 */}
      <div className="grid grid-cols-3 gap-6 mb-12">
        {testImages.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="aspect-square bg-gradient-to-br from-pink-100 to-orange-100 flex items-center justify-center">
              <span className="text-4xl">🍨</span>
            </div>
            {/* 問題の箇所と同じ構造 */}
            <div className="p-4">
              <h3 className="font-bold text-gray-800 mb-1">{image.nameJa}</h3>
              <p className="text-sm text-gray-600">{image.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 比較用: 明示的サイズ指定 */}
      <h3 className="text-xl font-bold mb-4">比較用（明示的サイズ指定）</h3>
      <div className="grid grid-cols-3 gap-6 mb-12">
        {testImages.map((image) => (
          <div
            key={`explicit-${image.id}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
              <span className="text-4xl">🧪</span>
            </div>
            <div className="p-4">
              <h3 
                className="font-bold text-gray-800 mb-1"
                style={{ fontSize: '14px', lineHeight: '1.3' }}
              >
                {image.nameJa}
              </h3>
              <p 
                className="text-gray-600"
                style={{ fontSize: '12px', lineHeight: '1.2' }}
              >
                {image.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 比較用: CSS Variables使用 */}
      <h3 className="text-xl font-bold mb-4">比較用（CSS Variables）</h3>
      <div className="grid grid-cols-3 gap-6">
        {testImages.map((image) => (
          <div
            key={`vars-${image.id}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-yellow-100 flex items-center justify-center">
              <span className="text-4xl">⚡</span>
            </div>
            <div className="p-4">
              <h3 
                className="font-bold text-gray-800 mb-1"
                style={{ 
                  fontSize: 'var(--puzzle-title-size, 14px)', 
                  lineHeight: '1.3' 
                }}
              >
                {image.nameJa}
              </h3>
              <p 
                className="text-gray-600"
                style={{ 
                  fontSize: 'var(--puzzle-subtitle-size, 12px)', 
                  lineHeight: '1.2' 
                }}
              >
                {image.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* デバッグ情報 */}
      <div className="mt-12 p-4 bg-yellow-100 rounded-lg">
        <h4 className="font-bold mb-2">デバッグ情報:</h4>
        <ul className="text-sm space-y-1">
          <li>• 上段: 元のパズル画像と同じ構造（問題が再現されるか確認）</li>
          <li>• 中段: inline styleで明示的サイズ指定</li>
          <li>• 下段: CSS Variables使用</li>
          <li>• ローカルとデプロイでサイズが違うかチェック</li>
        </ul>
      </div>
    </div>
  )
}