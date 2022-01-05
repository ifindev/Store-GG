import Image from 'next/image'
import Link from 'next/link'

interface MenuItemProps {
	title: string
	icon: string
	href: string
	active?: boolean
}

export const MenuItem = ({
	title,
	icon,
	href,
	active = false
}: MenuItemProps) => {
	return (
		<div className={`item ${active && 'active'} mb-20`}>
			<div className="mt-2 me-3">
				<Image src={icon} width={25} height={25}/>
			</div>
			<p className="item-title m-0">
				<Link href={href}>
					<a className="text-lg text-decoration-none">{title}</a>
				</Link>
			</p>
		</div>
	)
}
