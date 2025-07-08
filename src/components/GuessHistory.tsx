import React from 'react'
import { GuessHistoryItem } from '../types'

interface GuessHistoryProps {
  history: GuessHistoryItem[]
}

const GuessHistory: React.FC<GuessHistoryProps> = ({ history }) => (
  <div>
    <h2>Guess History</h2>
    <ul>
      {history.map((item, index) => (
        <li key={index}>
          Round {index + 1}: Number {item.number} - Your Guess: {item.guess ? 'Prime' : 'Not Prime'} - {item.isCorrect ? 'Correct' : 'Incorrect'}
        </li>
      ))}
    </ul>
  </div>
)

export default GuessHistory