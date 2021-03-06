/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image'
import Link from 'next/link'
import { SignUpForm } from '../components'

const SignUp = () => {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <form action="">
          <div className="pb-50">
            <Link href="/">
              <a className="navbar-brand">
                <Image src="/icon/logo.svg" width={60} height={60} />
              </a>
            </Link>
          </div>
          <SignUpForm />
        </form>
      </div>
    </section>
  )
}

export default SignUp
