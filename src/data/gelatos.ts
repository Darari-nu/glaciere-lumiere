export interface Gelato {
  name: string
  nameJa: string
  description: string
  price?: string
  image: string
  color: string
}

export const gelatos: Gelato[] = [
  {
    name: 'Peach Sorbetto',
    nameJa: 'ピーチ・ソルベット',
    description: '完熟桃の甘美な香りと滑らかな口当たり、夏の贅沢な味わい',
    price: '¥680',
    image: '/images/gelato/peach-gelato.jpg',
    color: 'from-pink-400/40 to-orange-300/30'
  },
  {
    name: 'Blueberry Lavanda', 
    nameJa: 'ブルーベリー・ラベンダー',
    description: 'ブルーベリーとラベンダーの上品なハーモニー、心安らぐ逸品',
    price: '¥720',
    image: '/images/gelato/blueberry-gelato.jpg',
    color: 'from-purple-400/40 to-blue-400/30'
  },
  {
    name: 'Kiwi Verde',
    nameJa: 'キウイ・ヴェルデ',
    description: 'ニュージーランド産キウイの爽やかな酸味と自然な甘さ',
    price: '¥650',
    image: '/images/gelato/kiwi-gelato.jpg',
    color: 'from-green-400/40 to-lime-300/30'
  },
  {
    name: 'Fragola Rossa',
    nameJa: 'フラゴラ・ロッサ',
    description: '完熟いちごの濃厚な甘さと華やかな香り、至福のひととき',
    price: '¥690',
    image: '/images/gelato/strawberry-gelato.jpg',
    color: 'from-red-400/40 to-pink-400/30'
  }
]

// 商品カップ画像用のデータ
export const premiumFlavors: Gelato[] = [
  {
    name: 'Peach Sorbetto',
    nameJa: 'ピーチ・ソルベット',
    description: '完熟桃の甘美な香りと滑らかな口当たり',
    price: '¥680',
    image: '/images/products/peach-cup.jpg',
    color: 'from-pink-400/30 to-orange-300/20'
  },
  {
    name: 'Blueberry Lavanda', 
    nameJa: 'ブルーベリー・ラベンダー',
    description: 'ブルーベリーとラベンダーの上品なハーモニー',
    price: '¥720',
    image: '/images/products/blueberry-cup.jpg',
    color: 'from-purple-400/30 to-blue-400/20'
  },
  {
    name: 'Kiwi Verde',
    nameJa: 'キウイ・ヴェルデ',
    description: 'ニュージーランド産キウイの爽やかな酸味',
    price: '¥650',
    image: '/images/products/kiwi-cup.jpg',
    color: 'from-green-400/30 to-lime-300/20'
  },
  {
    name: 'Limone Fresco',
    nameJa: 'リモーネ・フレスコ',
    description: 'シチリア産レモンの爽やかな酸味と上品な苦味',
    price: '¥660',
    image: '/images/products/lemon-cup.jpg',
    color: 'from-yellow-400/30 to-yellow-200/20'
  },
  {
    name: 'Mango Tropicale',
    nameJa: 'マンゴー・トロピカーレ',
    description: '南国マンゴーの濃厚な甘さとトロピカルな香り',
    price: '¥710',
    image: '/images/products/mango-cup.jpg',
    color: 'from-orange-400/30 to-yellow-300/20'
  },
  {
    name: 'Lampone Rosso',
    nameJa: 'ランポーネ・ロッソ',
    description: '野生ラズベリーの酸味と深い果実の風味',
    price: '¥730',
    image: '/images/products/raspberry-cup.jpg',
    color: 'from-rose-400/30 to-red-300/20'
  }
]