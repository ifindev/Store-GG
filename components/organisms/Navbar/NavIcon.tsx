import Image from 'next/image'
import Link from 'next/link'

const NavIcon = () => {
  return (
    <Link href="/">
      <a className="navbar-brand">
        <Image src="/icon/logo.svg" width={60} height={60} />
      </a>
    </Link>
  )
}

export default NavIcon
