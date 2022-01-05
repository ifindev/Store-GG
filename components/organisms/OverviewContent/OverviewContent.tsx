import React from 'react'
import { Category } from './Category'
import { TransactionsTable } from './TransactionsTable'

const OverviewContent = () => {
	return (
		<main className="main-wrapper">
			<div className="ps-lg-0">
				<h2
					className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
				<div className="top-up-categories mb-30">
					<p className="text-lg fw-medium color-palette-1 mb-14">Top
						Up
						Categories</p>
					<div className="main-content">
						<div className="row">
							<Category nominal={18000500} icon="category-desktop">
								Game<br/> Desktop
							</Category>
							<Category nominal={8455000} icon="category-mobile">
								Game<br/> Mobile
							</Category>
							<Category nominal={5000000} icon="category-others">
								Other<br/> Categories
							</Category>
						</div>
					</div>
				</div>
				<div className="latest-transaction">
					<p
						className="text-lg fw-medium color-palette-1 mb-14">Latest
						Transactions</p>
					<TransactionsTable/>
				</div>
			</div>
		</main>
	)
}

export default OverviewContent
