import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Glacière Lumière | Premium Gelato',
  description: '最高級素材で作る極上のジェラート。パズルゲームをクリアして特別割引をゲット！',
  openGraph: {
    title: 'Glacière Lumière | Premium Gelato',
    description: '最高級素材で作る極上のジェラート。パズルゲームをクリアして特別割引をゲット！',
    url: 'https://glaciere-lumiere.vercel.app',
    siteName: 'Glacière Lumière',
    images: [
      {
        url: '/images/ogp-image.svg',
        width: 1200,
        height: 630,
        alt: 'Glacière Lumière - Premium Gelato Experience',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glacière Lumière | Premium Gelato',
    description: '最高級素材で作る極上のジェラート。パズルゲームをクリアして特別割引をゲット！',
    images: ['/images/ogp-image.svg'],
  },
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