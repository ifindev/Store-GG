import Link from 'next/link'
import { signUpFormItems as formItems } from '../../../constants/constants'

const SignUpForm = () => {
  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p className="text-lg color-palette-1 m-0">
        Daftar dan bergabung dengan kami
      </p>
      {formItems.map((item, index) => {
        return (
          <div className={index === 0 ? "pt-50": "pt-30"}>
            <label
              htmlFor={item.label.htmlFor}
              className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
              {item.label.text}
            </label>
            <input
              type={item.input.type}
              className="form-control rounded-pill text-lg"
              id={item.input.id}
              name={item.input.name}
              aria-describedby={item.input.ariaDescribedBy}
              placeholder={item.input.placeholder}
            />
          </div>
        )
      })}
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
