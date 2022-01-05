import { FormItemsType } from '../../../constants/constants'

export const FormItems = ({
	label,
	input
}: FormItemsType) => {
	return (
		<>
			<label
				htmlFor={label.htmlFor}
				className="form-label text-lg fw-medium color-palette-1 mb-10"
			>
				{label.text}
			</label>
			<input
				type={input.type}
				className="form-control rounded-pill text-lg"
				id={input.id}
				name={input.name}
				aria-describedby={input.ariaDescribedBy}
				placeholder={input.placeholder}
			/>
		</>
	)
}
