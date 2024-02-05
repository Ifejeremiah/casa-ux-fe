import '../SignUp.css'

import { motion } from 'framer-motion'
import Button from '../../../component/Button/Button'

const SectionB = () => {
  const container = {
    hidden: { opacity: 1, x: 200 },
    visible: {
      opacity: 1,

      x: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { x: 150, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  }
  return (
    <section className="signup-section">
      <div className="d-flex  align-items-center h-100 w-100  p-3 p-lg-0 glass-form-con">
        <div className="glass-form col-lg-10 flex-column">
          <h3 className="header_text">User Information</h3>
          <motion.form
            className="row gap-2"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="col-lg-5 my-3" variants={item}>
              <div className="input-glass-con input-con ">
                <span>
                  <img src="/icons/briefcase.svg" alt="" />
                </span>
                <input type="text" placeholder="Occupation" />
              </div>
            </motion.div>
            <motion.div className="col-lg-5 my-3 " variants={item}>
              <div className="input-glass-con input-con">
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Gender
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Male
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Female
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-5 my-3 " variants={item}>
              <div className="input-glass-con input-con">
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Education status
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        SSCE
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        OND
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        HND
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Bachelor's Degree
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Master's Degree
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        PHD
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-5 my-3 " variants={item}>
              <div className="input-glass-con input-con">
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Empolyment status
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Empolyed
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Unemployed
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Self-Employed
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-5 my-3 " variants={item}>
              <div className="input-glass-con input-con">
                <span>
                  <img src="/icons/User.svg" alt="" />
                </span>
                <input type="text" placeholder="LinkedIn Profile (optional)" />
              </div>
            </motion.div>
            <motion.div className="col-lg-5 my-3 " variants={item}>
              <div className="input-glass-con input-con">
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    How did you hear about the bootcamp?
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sent a link
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Others
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-10 d-flex justify-content-between">
              <Button
                btnSize="xl"
                hasIcon={false}
                icon="/icons/chevron-left-dark.svg"
                isLink={true}
                btnType="darkbtn"
                text="Prev"
                to="/signup"
                hasLeftIcon={true}
              />
              <Button
                btnSize="xl"
                hasIcon={true}
                hasLeftIcon={false}
                icon="/icons/chevron-right.svg"
                isLink={true}
                btnType="prim"
                text="Submit"
                to="/welcome-dashboard"
              />
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default SectionB
