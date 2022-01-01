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

export const reachedItems = [
  {
    stats: '290M+',
    desc: 'Players Top Up',
  },
  {
    stats: '12.500',
    desc: 'Games Available',
  },
  {
    stats: '99.9%',
    desc: 'Happy Players',
  },
  {
    stats: '4.7',
    desc: 'Rating Worldwide',
  },
]

export const footerItems = [
  {
    title: 'Company',
    items: [
      { text: 'About Us', href: '' },
      { text: 'Press Release', href: '' },
      { text: 'Terms of Use', href: '' },
      { text: 'Privacy & Policy', href: '' },
    ],
  },
  {
    title: 'Support',
    items: [
      { text: 'Refund Policy', href: '' },
      { text: 'Unlock Rewards', href: '' },
      { text: 'Live Chatting', href: '' },
    ],
  },
  {
    title: 'Connect',
    items: [
      { text: 'hi@store.gg', href: 'mailto: hi@store.gg' },
      { text: 'team@store.gg', href: 'mailto: team@store.gg' },
      {
        text: 'Pasific 12, Jakarta Selatan',
        href: 'http://maps.google.com/?q=Pasific 12,Jakarta Selatan',
      },
      { text: '021 - 1122 - 9090', href: 'tel: 02111229090' },
    ],
  },
]
