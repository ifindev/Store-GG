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
			{
				text: 'About Us',
				href: ''
			},
			{
				text: 'Press Release',
				href: ''
			},
			{
				text: 'Terms of Use',
				href: ''
			},
			{
				text: 'Privacy & Policy',
				href: ''
			},
		],
	},
	{
		title: 'Support',
		items: [
			{
				text: 'Refund Policy',
				href: ''
			},
			{
				text: 'Unlock Rewards',
				href: ''
			},
			{
				text: 'Live Chatting',
				href: ''
			},
		],
	},
	{
		title: 'Connect',
		items: [
			{
				text: 'hi@store.gg',
				href: 'mailto: hi@store.gg'
			},
			{
				text: 'team@store.gg',
				href: 'mailto: team@store.gg'
			},
			{
				text: 'Pasific 12, Jakarta Selatan',
				href: 'http://maps.google.com/?q=Pasific 12,Jakarta Selatan',
			},
			{
				text: '021 - 1122 - 9090',
				href: 'tel: 02111229090'
			},
		],
	},
]

export type FormItemsType = {
	label: {
		htmlFor: string
		text: string
	},

	input: {
		type: string
		id: string
		name: string
		ariaDescribedBy: string
		placeholder: string
	}
}

export const signUpFormItems: FormItemsType[] = [
	{
		label: {
			htmlFor: 'name',
			text: 'Full Name'
		},
		input: {
			type: 'text',
			id: 'name',
			name: 'name',
			ariaDescribedBy: 'name',
			placeholder: 'Enter your name'
		}
	},
	{
		label: {
			htmlFor: 'email',
			text: 'Email Address'
		},
		input: {
			type: 'email',
			id: 'email',
			name: 'email',
			ariaDescribedBy: 'email',
			placeholder: 'Enter your email address'
		}
	},
	{
		label: {
			htmlFor: 'password',
			text: 'Password'
		},
		input: {
			type: 'password',
			id: 'password',
			name: 'password',
			ariaDescribedBy: 'password',
			placeholder: 'Your password'
		}
	},
]

export const updateProfileFormItems: FormItemsType[] = [
	{
		label: {
			htmlFor: 'name',
			text: 'Full Name'
		},
		input: {
			type: 'text',
			id: 'name',
			name: 'name',
			ariaDescribedBy: 'name',
			placeholder: 'Enter your name'
		}
	},
	{
		label: {
			htmlFor: 'email',
			text: 'Email Address'
		},
		input: {
			type: 'email',
			id: 'email',
			name: 'email',
			ariaDescribedBy: 'email',
			placeholder: 'Enter your email address'
		}
	},
	{
		label: {
			htmlFor: 'phone',
			text: 'Phone'
		},
		input: {
			type: 'tel',
			id: 'phone',
			name: 'phone',
			ariaDescribedBy: 'phone',
			placeholder: 'Enter your phone number'
		}
	},
]

export const sidebarMemberMenuItems = [
	{
		icon: '/icon/menu-overview.svg',
		title: 'Overview',
		href: '/member',
	},
	{
		icon: '/icon/menu-transactions.svg',
		title: 'Transactions',
		href: '/member/transactions'
	},
	{
		icon: '/icon/menu-messages.svg',
		title: 'Messages',
		href: '/member/messages'
	},
	{
		icon: '/icon/menu-card.svg',
		title: 'Card',
		href: '/member/card'
	},
	{
		icon: '/icon/menu-rewards.svg',
		title: 'Rewards',
		href: '/member/rewards'
	},
	{
		icon: '/icon/menu-settings.svg',
		title: 'Settings',
		href: '/member/edit-profile'
	},
	{
		icon: '/icon/menu-logout.svg',
		title: 'Log Out',
		href: '/'
	}
]

export const MemberTransactionsHistoryColumn = ['Game', 'Item', 'Price', 'Status']
export const LatestTransactionsData: {
	image: string
	title: string
	category: string
	item: string
	price: number
	status: 'Pending' | 'Success' | 'Failed'
}[] = [
	{
		image: '/img/overview-1.png',
		title: 'Mobile Legends: The New Battle 2021',
		category: 'Desktop',
		item: '200 Gold',
		price: 290000,
		status: 'Pending'
	},
	{
		image: '/img/overview-2.png',
		title: 'Call of Duty: Modern Warfare III',
		category: 'Desktop',
		item: '550 Gold',
		price: 740000,
		status: 'Success'
	},
	{
		image: '/img/overview-3.png',
		title: 'Clash of Clans',
		category: 'Mobile',
		item: '100 Gold',
		price: 120000,
		status: 'Failed'
	},
	{
		image: '/img/overview-4.png',
		title: 'The Royal Game',
		category: 'Mobile',
		item: '225 Gold',
		price: 200000,
		status: 'Pending'
	},
]
