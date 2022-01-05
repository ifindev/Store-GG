import {
	MemberTransactionsHistoryColumn as columns,
	LatestTransactionsData as transactions
} from '../../../constants/constants'

import { TransactionsTableRow as TableRow } from './TransactionsTableRow'

export const TransactionsTable = () => {
	return (
		<div
			className="main-content main-content-table overflow-auto">
			<table className="table table-borderless">
				<thead>
				<tr className="color-palette-1">
					{columns.map((column, idx) => (
						<th className={idx === 0 ? 'text-start' : ''} scope="col">
							{column}
						</th>
					))}
				</tr>
				</thead>
				<tbody>
				{transactions.map((transaction) => (
					<TableRow
						image={transaction.image}
						title={transaction.title}
						category={transaction.category}
						item={transaction.item}
						price={transaction.price}
						status={transaction.status}
					/>
				))}
				</tbody>
			</table>
		</div>
	)
}
