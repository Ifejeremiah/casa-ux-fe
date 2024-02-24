import './SectionC.css'
import TwoCard from '../../../component/TwoCard/TwoCard'
import Button from '../../../component/Button/Button'
import { motion } from 'framer-motion'
import { useRef } from 'react'
const SectionC = () => {
  const courses = [
    {
      name: 'Oluwafemi Carson',
      weeks: '4Weeks',
      tilte: 'Introduction to UI/UX Design Principles',
      img: 'uiux.png',
    },
    {
      name: ' Uzochukwu Emmanuel ',
      weeks: '3Weeks',
      tilte: 'Design Thinking and Problem Solving',
      img: 'draw.png',
    },
    {
      name: 'Jackson Benson',
      weeks: '4Weeks',
      tilte: 'Portfolio Development and Presentation',
      img: 'book.png',
    },
    {
      name: 'Uzochukwu Henry',
      weeks: '4Weeks',
      tilte: 'Introduction to UX and Ux foundamentals',
      img: 'future.png',
    },
    {
      name: 'Favour Uche',
      weeks: '5Weeks',
      tilte: 'User Research and Prototyping',
      img: 'human.png',
    },
    {
      name: 'Favour Uche',
      weeks: '4Weeks',
      tilte: 'CSS/HTML/JAVA SCRIPT tutorial ',
      img: 'code.png',
    },
  ]
  const scrollRef = useRef(null)

  const item = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  }
  return (
    <motion.div
      className=" py-5"
      style={{ background: '#D9D9D9' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ root: scrollRef }}
    >
      <div className="courses-con pad-con">
        <h2>Courses</h2>
        <div className="row">
          {courses.map((course, index) => (
            <motion.div key={index} className="col-lg-4 my-5" variants={item}>
              <TwoCard
                grayText="insturtor"
                img={course.img}
                name={course.name}
                text={course.tilte}
                btnText={course.weeks}
                isLink={false}
              />
            </motion.div>
          ))}
        </div>
        <div className="d-flex justify-content-center align-items-center my-4">
          <Button
            text="View More"
            btnSize="lg"
            btnType="prim"
            hasIcon={false}
            hasLeftIcon={false}
            isLink={true}
            to="/"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default SectionC
