import Image from 'next/image'

interface TransactionsTableRowProps {
	image: string
	title: string
	category: string
	item: string
	price: number
	status: 'Pending' | 'Success' | 'Failed'
}

export const TransactionsTableRow = ({
	image,
	title,
	category,
	item,
	price,
	status
}: TransactionsTableRowProps) => {
	return (
		<tr className="align-middle text-center">
			<th scope="row">
				<div className="float-start me-3 mb-lg-0 mb-3">
					<Image src={image} width={80} height={60} alt="Latest transaction item"/>
				</div>
				<div className="game-title-header">
					<p className="game-title fw-medium text-start color-palette-1 m-0">
						{title}
					</p>
					<p
						className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
				</div>
			</th>
			<td>
				<p className="fw-medium color-palette-1 m-0">
					{item}
				</p>
			</td>
			<td>
				<p className="fw-medium text-start color-palette-1 m-0">
					{price}
				</p>
			</td>
			<td>
				<div>
					<span className={`float-start icon-status ${status.toLowerCase()}`}/>
					<p className="fw-medium text-start color-palette-1 m-0 position-relative">
						{status}
					</p>
				</div>
			</td>
		</tr>
	)
}
