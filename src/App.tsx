import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import DashboardSideBar from './component/DashboradSideBar/DashboardSideBar'

function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isLogin = location.pathname === '/login'
  const isDashboard = location.pathname.includes('/dashboard')

  return (
    <div>
      <Navbar isDarklogo={isLogin || isHome} isShowned={isDashboard} />

      {isDashboard ? (
        <main>
          <div className=" container-fluid my-4 ">
            <div className="row justify-content-around">
              <div className="col-lg-2 new-col-2">
                <DashboardSideBar isShown={isDashboard} />
              </div>
              <Outlet />
            </div>
          </div>
        </main>
      ) : (
        <main>
          <div className="">
            <Outlet />
          </div>
        </main>
      )}
      {/* {isHome && <Footer />} */}
      <Footer isNotShown={isLogin || isHome} />
    </div>
  )
}

export default App
