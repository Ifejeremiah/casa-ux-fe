import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isLogin = location.pathname === '/login'
  const isDashboard = location.pathname.includes('/dashboard')

  return (
    <div>
      <Navbar isDarklogo={isLogin || isHome} isShowned={isDashboard} />

      <main>
        <Outlet />
      </main>
      {/* {isHome && <Footer />} */}
      <Footer isNotShown={isLogin || isHome} />
    </div>
  )
}

export default App
