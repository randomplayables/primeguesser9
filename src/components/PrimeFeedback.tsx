import React from 'react'

interface PrimeFeedbackProps {
  feedback: string
}

const PrimeFeedback: React.FC<PrimeFeedbackProps> = ({ feedback }) => {
  if (!feedback) {
    return null
  }

  return (
    <div>
      <h2>Feedback</h2>
      <p>{feedback}</p>
    </div>
  )
}

export default PrimeFeedback