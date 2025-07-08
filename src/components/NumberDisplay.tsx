import React from 'react'

interface NumberDisplayProps {
  number: number
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ number }) => (
  <div>
    <h2>Current Number</h2>
    <p>{number}</p>
  </div>
)

export default NumberDisplay