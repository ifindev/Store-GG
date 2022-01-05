import NavMenu from './NavMenu'
import NavAuth from './NavAuth'
import NavToggleMenu from './NavToggleMenu'
import NavIcon from './NavIcon'

const Navbar = () => {
  const navClassname = 'navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50'
  return (
    <section>
      <nav className={navClassname}>
        <div className="container-fluid">
          <NavIcon />
          <NavToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <NavMenu title="Home" active />
              <NavMenu title="Games" />
              <NavMenu title="Rewards" />
              <NavMenu title="Discover" />
              <NavMenu title="Global Rank" />
              <NavAuth />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar
