import './Button.css'

import { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
interface ButtonProps {
  text?: string
  btnSize: string
  btnType: string
  icon?: string
  to?: string
  isLink: boolean
  hasIcon: boolean
  hasLeftIcon: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  onMouseOver?: (event: MouseEvent<HTMLButtonElement>) => void
}
const Button: React.FC<ButtonProps> = ({
  btnType,
  btnSize,
  text,
  icon,
  isLink,
  hasIcon,
  hasLeftIcon,
  to,
  onClick,
}) => {
  return isLink ? (
    <Link to={`${to}`} className={`default-button ${btnType} ${btnSize}`}>
      {hasLeftIcon ? <img src={`${icon}`} alt="" /> : ''}

      {text}
      {hasIcon ? <img src={`${icon}`} alt="" /> : ''}
    </Link>
  ) : (
    <button
      type="button"
      className={`default-button ${btnType} ${btnSize}`}
      onClick={onClick}
    >
      {hasLeftIcon ? <img src={`${icon}`} alt="" /> : ''}
      {text} {hasIcon ? <img src={`${icon}`} alt="" /> : ''}
    </button>
  )
}

Button.defaultProps = {
  onClick: () => {},
}
export default Button
