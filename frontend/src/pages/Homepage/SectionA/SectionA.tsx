import Bootcamptag from '../../../component/Bootcamptag/Bootcamptag'
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
    <div className="section-a-con w-100" style={{ marginTop: '10rem' }}>
      <div
        className="row justify-content-bewteen w-100 p-0 "
        style={{ marginLeft: '0' }}
      >
        <motion.div
          initial={{ x: -900 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="col-lg-5 col-md-12 event-name-con"
        >
          <div className="event-name">
            <h2>
              Casa Ux <br className="d-lg-block d-none" /> Boot-{' '}
              <span style={{ color: '#5F0D6C' }}>Camp</span>
            </h2>
            <p>
              It is never to late to start <br className="d-lg-block d-none" />{' '}
              you tech career
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="col-lg-7 p-0 gray-box-con "
        >
          <div className="gray-box row align-items-center flex-wrap">
            <div className="col-lg-9">
              <div className="event-logo d-flex gap-2 align-items-center">
                <img src="/images/casa-ux.png" alt="" />
                <div className="d-lg-block d-none">
                  <Bootcamptag />
                </div>
              </div>

              <motion.div
                className="align-items-end d-flex gap-1 "
                variants={container}
                initial="hidden"
                whileInView="visible"
              >
                <motion.div variants={item} className="elevate-img">
                  <img src="/images/E.svg" alt="" />
                </motion.div>

                <motion.div variants={item} className="elevate-img">
                  <img src="/images/L.svg" alt="" />
                </motion.div>
                <motion.div variants={item} className="elevate-img">
                  <img src="/images/E2.svg" alt="" />
                </motion.div>
                <motion.div variants={item} className="elevate-img">
                  <img src="/images/v.svg" alt="" />
                </motion.div>
                <motion.div
                  style={{ marginLeft: '-2.5rem' }}
                  variants={item}
                  className="elevate-img"
                >
                  <img src="/images/A.svg" alt="" />
                </motion.div>
                <motion.div
                  style={{ marginLeft: '-1.5rem' }}
                  variants={item}
                  className="elevate-img"
                >
                  <img src="/images/T.svg" alt="" />
                </motion.div>
                <motion.div variants={item} className="elevate-img">
                  <img src="/images/E3.svg" alt="" />
                </motion.div>
              </motion.div>
              <h4 className="my-2">12 Weeks Intense Training</h4>
            </div>
            <div className="col-lg-3  ">
              <Button
                btnSize="lg"
                btnType="prim"
                hasIcon={false}
                hasLeftIcon={false}
                isLink={true}
                text="Sign Up For Free"
                to="/signup"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionA
