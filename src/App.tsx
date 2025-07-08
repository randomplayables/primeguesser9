import React from 'react'
import usePrimeGame from './hooks/usePrimeGame'
import NumberDisplay from './components/NumberDisplay'
import GuessInput from './components/GuessInput'
import PrimeFeedback from './components/PrimeFeedback'
import GuessHistory from './components/GuessHistory'

const App: React.FC = () => {
  const { currentNumber, guessHistory, feedback, roundNumber, handleGuess } = usePrimeGame()

  return (
    <div className="app-container">
      <h1>Prime Number Guessing Game</h1>
      <p>Round: {roundNumber}</p>
      <NumberDisplay number={currentNumber} />
      <GuessInput onGuess={handleGuess} />
      <PrimeFeedback feedback={feedback} />
      <GuessHistory history={guessHistory} />
    </div>
  )
}

export default App