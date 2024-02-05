import Button from '../../../component/Button/Button'
import './SectionA.css'
import { motion } from 'framer-motion'

const SectionA = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  return (
    <div className="section-a-con" style={{ marginTop: '10rem' }}>
      <div className="row justify-content-between">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            duration: 0.5,
            stiffness: 100,
            damping: 80,
          }}
          className="col-lg-5 "
        >
          <h2 className="welcome-text">
            <span className="dark-text">Welcome to </span>{' '}
            <span className="casa-text">Casa UX </span> Boot Camp – Where tech
            Dreams Take Flight!
          </h2>
        </motion.div>
        <motion.div
          className="col-lg-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="login-box" variants={item}>
            <h3>Login</h3>
            <form>
              <div className="input-con my-3">
                <span>
                  <img src="/icons/User.svg" alt="" />
                </span>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-con my-3">
                <span>
                  <img src="/icons/Lock.png" alt="" />
                </span>
                <input type="password" placeholder="Password" />
              </div>
              <div className="d-flex justify-content-between mt-2 flex-wrap">
                <Button
                  btnSize="xl"
                  btnType="prim"
                  isLink={true}
                  text="Login"
                  hasIcon={true}
                  icon="/icons/chevron-right.svg"
                  hasLeftIcon={false}
                />
                <a href="" className="link_text">
                  Forgot password?
                </a>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionA
