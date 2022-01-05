import { useRouter } from 'next/router'

import Profile from './Profile'
import { MenuItem } from './MenuItem'
import { SidebarFooter } from './SidebarFooter'

import { sidebarMemberMenuItems as menuItems } from '../../../constants/constants'

const Sidebar = () => {
	const router = useRouter()

	return (
		<section className="sidebar">
			<div className="content pt-50 pb-30 ps-30">
				<Profile/>
				<div className="menus">
					{menuItems.map((item) => (
						<MenuItem
							title={item.title}
							icon={item.icon}
							href={item.href}
							active={router.pathname === item.href}
						/>
					))}
				</div>
				{router.pathname === '/member' && <SidebarFooter/>}
			</div>
		</section>
	)
}
export default Sidebar
