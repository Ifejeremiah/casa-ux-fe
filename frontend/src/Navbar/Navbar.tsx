import './Navbar.css'
import Bootcamptag from '../component/Bootcamptag/Bootcamptag'
import Button from '../component/Button/Button'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'

interface NavbarType {
  isDarklogo: boolean
  isShowned: boolean
}

const Navbar: React.FC<NavbarType> = ({ isDarklogo, isShowned }) => {
  const [activeNavItem, setActiveNavItem] = useState('Home')
  const navbar = useRef<HTMLDivElement>(null)
  const fadeNavbar = () => {
    if (window.pageYOffset > 100) {
      navbar.current?.classList.add('fade')
    } else {
      navbar.current?.classList.remove('fade')
    }
  }
  window.addEventListener('scroll', fadeNavbar)
  const handleNavItemClick = (navItem: string) => {
    setActiveNavItem(navItem)
  }

  return (
    <nav
      className="navbar navbar-expand-lg pad-con "
      ref={navbar}
      style={{ display: isShowned ? 'none' : 'block' }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {isDarklogo ? (
            <img src="/images/casa-ux.png" alt="" />
          ) : (
            <img src="/images/casa-ux2.png" alt="" />
          )}

          <Bootcamptag />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeNavItem === 'Home' ? 'active' : ''
                }`}
                to={'/'}
                onClick={() => handleNavItemClick('Home')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeNavItem === 'SignUp' ? 'active' : ''
                }`}
                to="/signup"
                onClick={() => handleNavItemClick('SignUp')}
              >
                Sign Up
              </Link>
            </li>
            <li></li>
            <li className="nav-item">
              <Button
                btnSize="xl"
                btnType="prim"
                isLink={true}
                to="/login"
                text="Login"
                hasIcon={false}
                hasLeftIcon={false}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
