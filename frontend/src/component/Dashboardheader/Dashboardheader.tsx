import './Dashboardheader.css'

interface DashboardheaderProp {
  hasSearchBar?: boolean
}
const Dashboardheader: React.FC<DashboardheaderProp> = ({ hasSearchBar }) => {
  return (
    <div className="dashboard-info-header">
      <div className="d-flex row justify-content-between">
        <div className="welcome-text col-lg-3">
          <h3 className="mb-2">
            Welcome Back <span>Cecila Jonah</span>
          </h3>
          <p>Track: Product Design</p>
        </div>
        <div
          className={`search-bar-panel col-lg-6 ${
            hasSearchBar ? '' : 'd-none'
          }   `}
        >
          <div className="search-bar-con">
            <input type="text" placeholder="Search" />
            <img src="/images/Search.svg" alt="" />
          </div>
        </div>
        <div className="profile-img-initial col-lg-3">
          <div className="d-flex gap-3 align-items-center">
            <div className="notification-icon">
              <img src="/images/notify.svg" alt="" />
            </div>
            <div className="user-initial-img">
              <img src="/images/avatar.jpg" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboardheader
