import './checkbox.css'
interface CheckBoxProps {
  isChecked?: boolean
  id: string
  htmlfor: string
  width?: string
  height?: string
  color?: string
}

const checkbox: React.FC<CheckBoxProps> = ({
  isChecked,
  id,
  htmlfor,
  width,
  height,
  color,
}) => {
  return (
    <div className="checkbox-wrapper-23">
      <input type="checkbox" id={id} checked={isChecked} />
      <label
        htmlFor={htmlfor}
        style={{
          width: `${width}, `,
          height: `${height}`,
          borderColor: `${color}`,
        }}
      >
        <svg viewBox="0,0,50,50">
          <path d="M5 30 L 20 45 L 45 5" style={{ stroke: `${color}` }}></path>
        </svg>
      </label>
    </div>
  )
}

export default checkbox
