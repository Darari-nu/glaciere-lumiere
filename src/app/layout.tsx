import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Glacière Lumière | Premium Gelato',
  description: '最高級素材で作る極上のジェラート。パズルゲームをクリアして特別割引をゲット！',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="bg-brand-primary text-white">
        {children}
      </body>
    </html>
  )
}