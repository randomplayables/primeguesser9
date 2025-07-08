import React, { useState } from 'react'

interface GuessInputProps {
  onGuess: (guess: boolean) => void
}

const GuessInput: React.FC<GuessInputProps> = ({ onGuess }) => {
  const [userGuess, setUserGuess] = useState<boolean>(true)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserGuess(event.target.value === 'prime')
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onGuess(userGuess)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="radio"
            name="guess"
            value="prime"
            checked={userGuess === true}
            onChange={handleChange}
          />
          Prime
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="guess"
            value="not-prime"
            checked={userGuess === false}
            onChange={handleChange}
          />
          Not Prime
        </label>
      </div>
      <button type="submit">Submit Guess</button>
    </form>
  )
}

export default GuessInput