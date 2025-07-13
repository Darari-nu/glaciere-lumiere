import { FontSizeTest } from '@/components/debug/FontSizeTest'

export default function DebugPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">フォントサイズ問題デバッグページ</h1>
        <FontSizeTest />
      </div>
    </div>
  )
}