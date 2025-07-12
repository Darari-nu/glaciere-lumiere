export interface PuzzleImage {
  id: string
  name: string
  nameJa: string
  imagePath: string
  previewPath: string
}

export const puzzleImages: PuzzleImage[] = [
  {
    id: 'peach',
    name: 'Peach Sorbetto',
    nameJa: 'ピーチ・ソルベット',
    imagePath: '/images/puzzle/puzzle-peach-cup.jpg',
    previewPath: '/images/products/peach-cup.jpg'
  },
  {
    id: 'blueberry',
    name: 'Blueberry Lavanda',
    nameJa: 'ブルーベリー・ラベンダー',
    imagePath: '/images/puzzle/puzzle-blueberry-cup.jpg',
    previewPath: '/images/products/blueberry-cup.jpg'
  },
  {
    id: 'kiwi',
    name: 'Kiwi Verde',
    nameJa: 'キウイ・ヴェルデ',
    imagePath: '/images/puzzle/puzzle-kiwi-cup.jpg',
    previewPath: '/images/products/kiwi-cup.jpg'
  },
  {
    id: 'lemon',
    name: 'Limone Fresco',
    nameJa: 'リモーネ・フレスコ',
    imagePath: '/images/puzzle/puzzle-lemon-cup.jpg',
    previewPath: '/images/products/lemon-cup.jpg'
  },
  {
    id: 'mango',
    name: 'Mango Tropicale',
    nameJa: 'マンゴー・トロピカーレ',
    imagePath: '/images/puzzle/puzzle-mango-cup.jpg',
    previewPath: '/images/products/mango-cup.jpg'
  },
  {
    id: 'raspberry',
    name: 'Lampone Rosso',
    nameJa: 'ランポーネ・ロッソ',
    imagePath: '/images/puzzle/puzzle-raspberry-cup.jpg',
    previewPath: '/images/products/raspberry-cup.jpg'
  }
]