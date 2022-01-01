/* eslint-disable import/prefer-default-export */
export const trxSteps = [
  {
    icon: 'step1',
    title: '1. Start',
    desc1: 'Pilih salah satu game',
    desc2: 'yang ingin kamu top up',
  },
  {
    icon: 'step2',
    title: '2. Fill Up',
    desc1: 'Top up sesuai dengan',
    desc2: 'nominal yang sudah tersedia',
  },
  {
    icon: 'step3',
    title: '3. Be a Winner',
    desc1: 'Siap digunakan untuk',
    desc2: 'improve permainan kamu',
  },
]

export const gameItems: {
  title: string
  category: string
  thumbnail:
    | 'Thumbnail-1'
    | 'Thumbnail-2'
    | 'Thumbnail-3'
    | 'Thumbnail-4'
    | 'Thumbnail-5'
}[] = [
  {
    title: 'Super Mech',
    category: 'mobile',
    thumbnail: 'Thumbnail-1',
  },
  {
    title: 'Call of Duty: Modern',
    category: 'mobile',
    thumbnail: 'Thumbnail-2',
  },
  {
    title: 'Mobile Legends',
    category: 'mobile',
    thumbnail: 'Thumbnail-3',
  },
  {
    title: 'Clash of Clans',
    category: 'mobile',
    thumbnail: 'Thumbnail-4',
  },
  {
    title: 'Valorant',
    category: 'Desktop',
    thumbnail: 'Thumbnail-5',
  },
]
