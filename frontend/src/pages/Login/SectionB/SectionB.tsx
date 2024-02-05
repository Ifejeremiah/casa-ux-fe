import { motion } from 'framer-motion'
import './SectionB.css'

type Card = {
  text: string
  image: string
  col: string
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1,
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
const SectionB: React.FC = () => {
  const cards: Card[] = [
    {
      text: ' You can be the guru you dream to be right from the comfort of your home',
      image: '/images/gamer.png',
      col: 'col-lg-8',
    },
    {
      text: ' Casa ux boot camp provides you with the finest of coach  and facilitatirs to help you eleveate your tech career ',
      image: '/images/ux-d.png',
      col: 'col-lg-11',
    },
  ]

  return (
    <div className="section-b-con ">
      <motion.div
        className="row"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {cards.map((card, index) => (
          <motion.div
            className="col-lg-6 my-lg-0 my-4"
            key={index}
            variants={item}
          >
            <div className="card ">
              <img src={card.image} className="card-img" alt="..." />
              <div className="card-img-overlay sectionb_card_overlay">
                <div className={card.col}>
                  <div className="d-flex gap-3 ">
                    <div className="yellow-box"></div>
                    <p className=" card_text ">{card.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default SectionB
