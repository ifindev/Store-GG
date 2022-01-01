import Link from 'next/link'

interface FooterItemProps {
  title: string
  items: {
    text: string
    href: string
  }[]
  isLast?: boolean
}

const FooterItem = ({ title, items, isLast }: FooterItemProps) => {
  return (
    <div
      className={
        !isLast
          ? 'col-md-4 col-6 mb-lg-0 mb-25'
          : 'col-md-4 col-12 mt-lg-0 mt-md-0 mt-25'
      }
    >
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        {items.map((item) => {
          return (
            <li className="mb-6">
              <Link href={item.href}>
                <a
                  href=""
                  className="text-lg color-palette-1 text-decoration-none"
                >
                  {item.text}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

FooterItem.defaultProps = {
  isLast: false,
}

export default FooterItem
