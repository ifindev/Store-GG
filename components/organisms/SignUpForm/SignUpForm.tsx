import Link from 'next/link'
import { signUpFormItems as formItems } from '../../../constants/constants'
import { FormItems } from '../../molecules/FormItems/FormItems'

const SignUpForm = () => {
	return (
		<>
			<h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
			<p className="text-lg color-palette-1 m-0">
				Daftar dan bergabung dengan kami
			</p>
			{formItems.map((item, index) => (
				<div className={index === 0 ? 'pt-50' : 'pt-30'}>
					<FormItems label={item.label} input={item.input}/>
				</div>
			))}
			<div className="button-group d-flex flex-column mx-auto pt-50">
				<Link href="/sign-up-photo">
					<a
						className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
						role="button"
					>
						Continue
					</a>
				</Link>
				<Link href="/sign-in">
					<a
						className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
						role="button"
					>
						Sign In
					</a>
				</Link>
			</div>
		</>
	)
}

export default SignUpForm
