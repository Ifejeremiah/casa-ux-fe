import Bootcamptag from '../component/Bootcamptag/Bootcamptag'
import './Footer.css'

interface FooterType {
  isNotShown: boolean
}
const Footer: React.FC<FooterType> = ({ isNotShown }) => {
  return (
    <footer className=" pad-con " style={{ display: isNotShown ? '' : 'none' }}>
      <div className="container-fluid footer-con">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <a className="navbar-brand" href="#">
              <img src="/images/casa-ux.png" alt="" />
              <Bootcamptag />
            </a>
          </div>
          <div className="col-lg-7">
            <div className="row footer-list justify-content-between py-3">
              <ul className="col-4">
                <li>
                  <a href="">Facebook</a>{' '}
                </li>
                <li>
                  <a href="">Instagram</a>
                </li>
                <li>
                  <a href="">X</a>
                </li>
                <li>
                  <a href="">Youtube</a>
                </li>
              </ul>
              <ul className="col-4">
                <li>
                  <a href="">About US</a>{' '}
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Boot Camp</a>
                </li>
                <li>
                  <a href="">Instructors</a>
                </li>
              </ul>
              <ul className="col-4">
                <li>
                  <a href="">Privacy policy</a>{' '}
                </li>
                <li>
                  <a href="">Term & Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
