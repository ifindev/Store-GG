import React from 'react'
import {
	Sidebar,
	OverviewContent
} from '../../components'

const Member = () => {
	return (
		<section className="overview overflow-auto">
			<Sidebar/>
			<OverviewContent/>
		</section>
	)
}

export default Member
