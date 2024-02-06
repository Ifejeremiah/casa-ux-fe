import './SectionB.css'
import { motion } from 'framer-motion'
const SectionB = () => {
  const activities = [
    {
      image: '/images/future.png',
      action: 'Games',
    },
    {
      image: '/images/connect.png',
      action: 'Connect',
    },
    {
      image: '/images/interact.png',
      action: 'Interaction',
    },
  ]
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
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  }
  return (
    <div className="activities-con py-5">
      <motion.div
        className="row"
        variants={container}
        initial="hidden"
        whileInView={'visible'}
      >
        {activities.map((action, index) => (
          <motion.div
            variants={item}
            id={index.toString()}
            key={index}
            className="col-md-4 my-lg-0 my-4 "
          >
            <div className="card activity-card bg-dark text-white">
              <img src={action.image} className="card-img" alt="..." />
              <div className="card-img-overlay activties-name text-center">
                <h5 className="card-title">{action.action}</h5>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default SectionB
