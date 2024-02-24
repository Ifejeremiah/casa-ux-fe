import React from 'react'
import './Bootcamptag.css'

interface bootcampTag {
  backgroundColor?: string
  color?: string
  text?: string
}

const Bootcamptag: React.FC<bootcampTag> = ({
  backgroundColor,
  color,
  text,
}) => {
  return (
    <div
      className="bootcamp-tag"
      style={{ background: backgroundColor, color: color }}
    >
      {text}
    </div>
  )
}

Bootcamptag.defaultProps = {
  text: ' Boot - Camp',
}
export default Bootcamptag
