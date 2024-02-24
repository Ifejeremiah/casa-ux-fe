import { useState } from 'react'
import Button from '../Button/Button'
import './TwoCard.css'

interface TwoCardProps {
  img: string
  text: string
  name: string
  grayText: string
  btnText: string
  isLink: boolean
}
const TwoCard: React.FC<TwoCardProps> = ({
  grayText,
  name,
  text,
  img,
  btnText,
  isLink,
}) => {
  const [hoverCard, setHoverCard] = useState(false)

  return (
    <div className="two-card-con">
      <div className={`card-one ${hoverCard ? 'tilt' : ''}`}></div>
      <div
        className="card-two"
        onMouseOver={() => setHoverCard(true)}
        onMouseOut={() => setHoverCard(false)}
      >
        <div className="courses-img">
          <img src={`images/${img}`} alt="" />
        </div>
        <div className="about-courses my-3">
          <div className="d-flex align-items-center about-courses-con ">
            <div className="text">
              <h4>{text}</h4>
              <p className="instructor">{grayText}</p>
              <h5>{name}</h5>
            </div>
            <div>
              <Button
                text={btnText}
                btnType="purp"
                btnSize="sm"
                isLink={isLink}
                hasIcon={false}
                hasLeftIcon={false}
                to="/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwoCard
