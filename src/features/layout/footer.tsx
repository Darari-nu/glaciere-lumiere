import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-luxury-charcoal to-black border-t border-brand-secondary/20 relative">
      {/* Luxury pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-secondary)_1px,_transparent_1px)] bg-[length:80px_80px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* ブランド情報 */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-heading gold-gradient tracking-tight mb-4">
                Glacière Lumière
              </h3>
              <p className="text-luxury-cream/80 leading-relaxed max-w-md">
                フランスの伝統技法と日本の繊細な美意識が融合した、唯一無二のプレミアムジェラート専門店。職人が一つ一つ丁寧に手作りする至極の逸品をお楽しみください。
              </p>
            </div>
            
            {/* SNSリンク */}
            <div className="flex space-x-4">
              <a href="https://instagram.com/glaciere.lumiere" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-brand-secondary/20 hover:bg-brand-secondary/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5 text-brand-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <a href="https://twitter.com/glaciere_lumiere" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-brand-secondary/20 hover:bg-brand-secondary/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5 text-brand-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              <a href="https://facebook.com/glaciere.lumiere" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-brand-secondary/20 hover:bg-brand-secondary/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5 text-brand-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* 店舗情報 */}
          <div>
            <h4 className="text-xl font-heading text-brand-secondary mb-6 tracking-wide">店舗情報</h4>
            <div className="space-y-4 text-luxury-cream/80">
              <div>
                <p className="font-semibold text-luxury-cream mb-1">本店</p>
                <p className="text-sm leading-relaxed">
                  〒100-0001<br />
                  東京都千代田区千代田1-1-1<br />
                  ルミエールビル 1F
                </p>
              </div>
              <div>
                <p className="font-semibold text-luxury-cream mb-1">営業時間</p>
                <p className="text-sm">11:00 - 21:00</p>
              </div>
              <div>
                <p className="font-semibold text-luxury-cream mb-1">定休日</p>
                <p className="text-sm">水曜日</p>
              </div>
              <div>
                <p className="font-semibold text-luxury-cream mb-1">お問い合わせ</p>
                <p className="text-sm">
                  TEL: 03-****-****<br />
                  Email: info@glaciere-lumiere.jp
                </p>
              </div>
            </div>
          </div>
          
          {/* ナビゲーション */}
          <div>
            <h4 className="text-xl font-heading text-brand-secondary mb-6 tracking-wide">メニュー</h4>
            <nav className="space-y-3">
              <Link href="/about" className="block text-luxury-cream/80 hover:text-brand-secondary transition-colors duration-300 text-sm">
                ブランドについて
              </Link>
              <Link href="/flavors" className="block text-luxury-cream/80 hover:text-brand-secondary transition-colors duration-300 text-sm">
                フレーバー一覧
              </Link>
              <Link href="/puzzle" className="block text-luxury-cream/80 hover:text-brand-secondary transition-colors duration-300 text-sm">
                パズルゲーム
              </Link>
              <Link href="/news" className="block text-luxury-cream/80 hover:text-brand-secondary transition-colors duration-300 text-sm">
                ニュース
              </Link>
              <Link href="/contact" className="block text-luxury-cream/80 hover:text-brand-secondary transition-colors duration-300 text-sm">
                お問い合わせ
              </Link>
              <Link href="/privacy" className="block text-luxury-cream/80 hover:text-brand-secondary transition-colors duration-300 text-sm">
                プライバシーポリシー
              </Link>
            </nav>
          </div>
        </div>
        
        {/* コピーライト */}
        <div className="border-t border-brand-secondary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-luxury-cream/60 text-sm">
              © 2024 Glacière Lumière. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-luxury-cream/60 hover:text-brand-secondary transition-colors duration-300 text-sm">
                利用規約
              </Link>
              <Link href="/privacy" className="text-luxury-cream/60 hover:text-brand-secondary transition-colors duration-300 text-sm">
                プライバシーポリシー
              </Link>
              <Link href="/sitemap" className="text-luxury-cream/60 hover:text-brand-secondary transition-colors duration-300 text-sm">
                サイトマップ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}