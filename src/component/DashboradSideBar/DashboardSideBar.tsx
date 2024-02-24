import React from 'react'
import Bootcamptag from '../Bootcamptag/Bootcamptag'
import './DashboardSide.css'
import { Link } from 'react-router-dom'

interface Dashboardprops {
  isShown: boolean
}
const DashboardSideBar: React.FC<Dashboardprops> = ({ isShown }) => {
  return (
    <div
      className="dashboardSidebar-con"
      style={{ display: isShown ? 'block' : 'none' }}
    >
      <div
        className="d-flex flex-lg-column flex-row justify-content-between "
        style={{ gap: '2.5rem' }}
      >
        <div className="logo ">
          <div>
            <a className="navbar-brand" href="#">
              <img src="/images/casa-ux.png" alt="" />

              <Bootcamptag backgroundColor="#5F0D6C" color="#F6F6F2" />
            </a>
          </div>
        </div>
        <div className="dashboard-links ">
          <div className="purple-box">
            <ul>
              <li className="activeL">
                <Link to={'/dashboard/SectionB'}>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.92955 5.14147C7.65833 4.99939 6.34242 4.99939 5.0712 5.14147C4.76231 5.17599 4.51872 5.42058 4.48397 5.71764C4.33217 7.01558 4.33217 8.32679 4.48397 9.62473C4.51872 9.92179 4.76231 10.1664 5.0712 10.2009C6.34242 10.343 7.65833 10.343 8.92955 10.2009C9.23844 10.1664 9.48203 9.92179 9.51678 9.62473C9.66858 8.32679 9.66858 7.01558 9.51678 5.71764C9.48203 5.42058 9.23844 5.17599 8.92955 5.14147ZM4.90459 3.65075C6.28654 3.4963 7.71421 3.4963 9.09616 3.65075C10.087 3.76149 10.8894 4.54148 11.0066 5.54339C11.172 6.9571 11.172 8.38527 11.0066 9.79898C10.8894 10.8009 10.087 11.5809 9.09616 11.6916C7.71421 11.8461 6.28654 11.8461 4.90459 11.6916C3.91375 11.5809 3.11131 10.8009 2.99413 9.79898C2.82878 8.38527 2.82878 6.9571 2.99413 5.54339C3.11131 4.54148 3.91375 3.76149 4.90459 3.65075Z"
                      fill="#F6F6F2"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.92955 15.1415C7.65833 14.9994 6.34242 14.9994 5.0712 15.1415C4.76231 15.176 4.51872 15.4206 4.48397 15.7176C4.33217 17.0156 4.33217 18.3268 4.48397 19.6247C4.51872 19.9218 4.76231 20.1664 5.0712 20.2009C6.34242 20.343 7.65833 20.343 8.92955 20.2009C9.23844 20.1664 9.48203 19.9218 9.51678 19.6247C9.66858 18.3268 9.66858 17.0156 9.51678 15.7176C9.48203 15.4206 9.23844 15.176 8.92955 15.1415ZM4.90459 13.6508C6.28654 13.4963 7.71421 13.4963 9.09616 13.6508C10.087 13.7615 10.8894 14.5415 11.0066 15.5434C11.172 16.9571 11.172 18.3853 11.0066 19.799C10.8894 20.8009 10.087 21.5809 9.09616 21.6916C7.71421 21.8461 6.28654 21.8461 4.90459 21.6916C3.91375 21.5809 3.11131 20.8009 2.99413 19.799C2.82878 18.3853 2.82878 16.9571 2.99413 15.5434C3.11131 14.5415 3.91375 13.7615 4.90459 13.6508Z"
                      fill="#F6F6F2"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.9295 5.14147C17.6583 4.99939 16.3424 4.99939 15.0712 5.14147C14.7623 5.17599 14.5187 5.42058 14.484 5.71764C14.3322 7.01558 14.3322 8.32679 14.484 9.62473C14.5187 9.92179 14.7623 10.1664 15.0712 10.2009C16.3424 10.343 17.6583 10.343 18.9295 10.2009C19.2384 10.1664 19.482 9.92179 19.5168 9.62473C19.6686 8.32679 19.6686 7.01558 19.5168 5.71764C19.482 5.42058 19.2384 5.17599 18.9295 5.14147ZM14.9046 3.65075C16.2865 3.4963 17.7142 3.4963 19.0962 3.65075C20.087 3.76149 20.8894 4.54148 21.0066 5.54339C21.172 6.9571 21.172 8.38527 21.0066 9.79898C20.8894 10.8009 20.087 11.5809 19.0962 11.6916C17.7142 11.8461 16.2865 11.8461 14.9046 11.6916C13.9138 11.5809 13.1113 10.8009 12.9941 9.79898C12.8288 8.38527 12.8288 6.9571 12.9941 5.54339C13.1113 4.54148 13.9138 3.76149 14.9046 3.65075Z"
                      fill="#F6F6F2"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.9295 15.1415C17.6583 14.9994 16.3424 14.9994 15.0712 15.1415C14.7623 15.176 14.5187 15.4206 14.484 15.7176C14.3322 17.0156 14.3322 18.3268 14.484 19.6247C14.5187 19.9218 14.7623 20.1664 15.0712 20.2009C16.3424 20.343 17.6583 20.343 18.9295 20.2009C19.2384 20.1664 19.482 19.9218 19.5168 19.6247C19.6686 18.3268 19.6686 17.0156 19.5168 15.7176C19.482 15.4206 19.2384 15.176 18.9295 15.1415ZM14.9046 13.6508C16.2865 13.4963 17.7142 13.4963 19.0962 13.6508C20.087 13.7615 20.8894 14.5415 21.0066 15.5434C21.172 16.9571 21.172 18.3853 21.0066 19.799C20.8894 20.8009 20.087 21.5809 19.0962 21.6916C17.7142 21.8461 16.2865 21.8461 14.9046 21.6916C13.9138 21.5809 13.1113 20.8009 12.9941 19.799C12.8288 18.3853 12.8288 16.9571 12.9941 15.5434C13.1113 14.5415 13.9138 13.7615 14.9046 13.6508Z"
                      fill="#F6F6F2"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <a href="">
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.75 5.17114C3.75 2.82393 5.65279 0.921143 8 0.921143C10.3472 0.921143 12.25 2.82393 12.25 5.17114C12.25 7.51835 10.3472 9.42114 8 9.42114C5.65279 9.42114 3.75 7.51835 3.75 5.17114ZM8 2.42114C6.48122 2.42114 5.25 3.65236 5.25 5.17114C5.25 6.68993 6.48122 7.92114 8 7.92114C9.51878 7.92114 10.75 6.68993 10.75 5.17114C10.75 3.65236 9.51878 2.42114 8 2.42114Z"
                      fill="#5F0D6C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 12.4211C2.75736 12.4211 1.75 13.4285 1.75 14.6711V15.8594C1.75 15.8775 1.76311 15.8929 1.78097 15.8959C5.89972 16.5683 10.1003 16.5683 14.219 15.8959C14.2369 15.8929 14.25 15.8775 14.25 15.8594V14.6711C14.25 13.4285 13.2426 12.4211 12 12.4211H11.6591C11.6328 12.4211 11.6066 12.4253 11.5815 12.4335L10.716 12.7161C8.95119 13.2924 7.04881 13.2924 5.28398 12.7161L4.41847 12.4335C4.39342 12.4253 4.36722 12.4211 4.34087 12.4211H4ZM0.25 14.6711C0.25 12.6001 1.92893 10.9211 4 10.9211H4.34087C4.52536 10.9211 4.70869 10.9503 4.88407 11.0076L5.74959 11.2902C7.21187 11.7677 8.78813 11.7677 10.2504 11.2902L11.1159 11.0076C11.2913 10.9503 11.4746 10.9211 11.6591 10.9211H12C14.0711 10.9211 15.75 12.6001 15.75 14.6711V15.8594C15.75 16.6127 15.2041 17.2549 14.4607 17.3763C10.1819 18.0748 5.8181 18.0748 1.53927 17.3763C0.795884 17.2549 0.25 16.6127 0.25 15.8594V14.6711Z"
                      fill="#5F0D6C"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 4.92114C7.20508 4.92114 5.75 6.37622 5.75 8.17114C5.75 9.96607 7.20508 11.4211 9 11.4211C10.7949 11.4211 12.25 9.96607 12.25 8.17114C12.25 6.37622 10.7949 4.92114 9 4.92114ZM7.25 8.17114C7.25 7.20464 8.03351 6.42114 9 6.42114C9.9665 6.42114 10.75 7.20464 10.75 8.17114C10.75 9.13764 9.9665 9.92114 9 9.92114C8.03351 9.92114 7.25 9.13764 7.25 8.17114Z"
                      fill="#5F0D6C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 0.921143C4.99594 0.921143 1.75 4.16708 1.75 8.17114C1.75 9.63927 2.18639 11.0055 2.93652 12.1471L0.350482 16.6263C0.203417 16.881 0.218821 17.1982 0.389877 17.4374C0.560933 17.6767 0.856064 17.7939 1.14467 17.7372L3.75854 17.2233L4.62047 19.7439C4.71564 20.0223 4.96471 20.2192 5.25745 20.2477C5.5502 20.2762 5.83258 20.131 5.97965 19.8763L8.55942 15.408C8.70516 15.4167 8.85207 15.4211 9 15.4211C9.14794 15.4211 9.29485 15.4167 9.44059 15.408L12.0204 19.8763C12.1676 20.1313 12.4504 20.2765 12.7434 20.2477C13.0364 20.2188 13.2854 20.0212 13.3801 19.7424L14.2376 17.2167L16.8537 17.7369C17.1425 17.7943 17.4382 17.6774 17.6097 17.4381C17.7812 17.1988 17.7967 16.8813 17.6495 16.6263L15.0635 12.1471C15.8136 11.0055 16.25 9.63927 16.25 8.17114C16.25 4.16708 13.0041 0.921143 9 0.921143ZM3.25 8.17114C3.25 4.99551 5.82437 2.42114 9 2.42114C12.1756 2.42114 14.75 4.99551 14.75 8.17114C14.75 11.3468 12.1756 13.9211 9 13.9211C5.82437 13.9211 3.25 11.3468 3.25 8.17114ZM6.98376 15.1371C5.83078 14.804 4.79597 14.1923 3.95691 13.3798L2.4747 15.947L4.11167 15.6252C4.47972 15.5529 4.84463 15.7635 4.96599 16.1185L5.50579 17.697L6.98376 15.1371ZM12.4918 17.6929L11.0163 15.1371C12.1692 14.804 13.204 14.1923 14.0431 13.3798L15.5229 15.9429L13.8851 15.6172C13.516 15.5438 13.1497 15.7554 13.0287 16.1117L12.4918 17.6929Z"
                      fill="#5F0D6C"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <Link to={'/dashboard/resoures'}>
                  <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.75 11.6711C11.75 11.2569 11.4142 10.9211 11 10.9211H5C4.58579 10.9211 4.25 11.2569 4.25 11.6711C4.25 12.0854 4.58579 12.4211 5 12.4211H11C11.4142 12.4211 11.75 12.0854 11.75 11.6711Z"
                      fill="#5F0D6C"
                    />
                    <path
                      d="M11.75 15.6711C11.75 15.2569 11.4142 14.9211 11 14.9211H5C4.58579 14.9211 4.25 15.2569 4.25 15.6711C4.25 16.0854 4.58579 16.4211 5 16.4211H11C11.4142 16.4211 11.75 16.0854 11.75 15.6711Z"
                      fill="#5F0D6C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 0.921143C1.48122 0.921143 0.25 2.15236 0.25 3.67114V17.6711C0.25 19.1899 1.48122 20.4211 3 20.4211H13C14.5188 20.4211 15.75 19.1899 15.75 17.6711V6.6388C15.75 6.25803 15.6258 5.88765 15.3963 5.58384L12.3985 1.61618C12.0677 1.17844 11.5509 0.921143 11.0022 0.921143H3ZM1.75 3.67114C1.75 2.98079 2.30964 2.42114 3 2.42114H10.25V6.81819C10.25 7.2324 10.5858 7.56819 11 7.56819H14.25V17.6711C14.25 18.3615 13.6904 18.9211 13 18.9211H3C2.30964 18.9211 1.75 18.3615 1.75 17.6711V3.67114Z"
                      fill="#5F0D6C"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="log-out">
          <div className="log-out-icon">
            <a href="">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 14.9211C8.58579 14.9211 8.25 15.2569 8.25 15.6711C8.25 16.0854 8.58579 16.4211 9 16.4211H15C15.9665 16.4211 16.75 15.6376 16.75 14.6711V2.67114C16.75 1.70464 15.9665 0.921143 15 0.921143H9C8.58579 0.921143 8.25 1.25693 8.25 1.67114C8.25 2.08536 8.58579 2.42114 9 2.42114L15 2.42114C15.1381 2.42114 15.25 2.53307 15.25 2.67114L15.25 14.6711C15.25 14.8092 15.1381 14.9211 15 14.9211H9Z"
                  fill="#F6F6F2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.5031 11.0364C12.1934 11.0364 12.7531 10.4767 12.7531 9.78636V7.54585C12.7531 6.85549 12.1934 6.29585 11.5031 6.29585L6.89048 6.29585C6.88396 6.22242 6.87713 6.14901 6.87 6.07563L6.81597 5.51974C6.73354 4.67164 5.83294 4.16372 5.06451 4.53198C3.43029 5.31518 1.95085 6.38693 0.697355 7.69568L0.598156 7.79925C0.133948 8.28393 0.133948 9.04827 0.598155 9.53294L0.697355 9.63651C1.95085 10.9453 3.43029 12.017 5.06451 12.8002C5.83293 13.1685 6.73354 12.6606 6.81597 11.8125L6.87 11.2566C6.87713 11.1832 6.88396 11.1098 6.89048 11.0364H11.5031ZM6.19511 9.53636C5.92874 9.53636 5.69326 9.67565 5.56008 9.88712C5.49523 9.9901 5.45464 10.1102 5.44656 10.2397C5.42842 10.5306 5.40524 10.8212 5.37703 11.1115L5.36135 11.2728C4.3253 10.7389 3.36316 10.074 2.49838 9.29505C2.27402 9.09298 2.05622 8.88322 1.84538 8.6661C2.86892 7.61204 4.05651 6.73183 5.36135 6.05939L5.37703 6.22073C5.40524 6.51101 5.42842 6.80165 5.44656 7.09253C5.47122 7.48785 5.79902 7.79585 6.19511 7.79585H11.2531V9.53636H6.19511Z"
                  fill="#F6F6F2"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardSideBar