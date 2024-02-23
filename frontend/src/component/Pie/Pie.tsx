import React from 'react'
import './Pie.css'

const cleanPercentage = (percentage: number): number => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0
  const tooHigh = percentage > 100
  return tooLow ? 0 : tooHigh ? 100 : +percentage
}

interface CircleProps {
  colour: string
  pct: number
}

const Circle: React.FC<CircleProps> = ({ colour, pct }) => {
  const r = 70
  const circ = 2 * Math.PI * r
  const strokePct = ((100 - pct) * circ) / 100
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ''}
      strokeWidth={'12%'} // Use percentage for responsive stroke width
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  )
}

interface TextProps {
  percentage: number
}

const Text: React.FC<TextProps> = ({ percentage }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={'1.5rem'} // Use percentage for responsive font size
      fontWeight={'700'}
      fill="#5F0D6C"
    >
      {percentage.toFixed(0)}%
    </text>
  )
}

interface PieProps {
  percentage: number
  colour: string
}

const Pie: React.FC<PieProps> = ({ percentage, colour }) => {
  const pct = cleanPercentage(percentage)
  return (
    <svg viewBox="0 0 200 200" width="65%" height="auto">
      {' '}
      // Use viewBox and percentage for responsiveness
      <g transform={`rotate(-90 ${'100 100'})`}>
        <Circle colour="#E2D9E3" pct={100} />
        <Circle colour={colour} pct={pct} />
      </g>
      <Text percentage={pct} />
    </svg>
  )
}

export default Pie
