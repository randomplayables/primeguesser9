import { useState, useEffect } from 'react'
import { initGameSession, saveGameData } from '../services/apiService'
import { GuessHistoryItem } from '../types'
import { MIN_NUMBER, MAX_NUMBER } from '../constants'

function generateRandomNumber(): number {
  return Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER
}

function isPrime(n: number): boolean {
  if (n < 2) return false
  const limit = Math.sqrt(n)
  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

export default function usePrimeGame() {
  const [currentNumber, setCurrentNumber] = useState<number>(generateRandomNumber())
  const [guessHistory, setGuessHistory] = useState<GuessHistoryItem[]>([])
  const [feedback, setFeedback] = useState<string>('')
  const [roundNumber, setRoundNumber] = useState<number>(1)

  useEffect(() => {
    async function setupSession() {
      const sessionData = await initGameSession()
      localStorage.setItem('gameSession', JSON.stringify(sessionData))
    }
    setupSession()
  }, [])

  const handleGuess = async (guess: boolean) => {
    const correctAnswer = isPrime(currentNumber)
    const isCorrect = guess === correctAnswer
    setFeedback(isCorrect ? 'Correct!' : 'Incorrect!')
    const roundData = { number: currentNumber, guess, isCorrect }
    setGuessHistory(prev => [...prev, roundData])
    await saveGameData(roundNumber, roundData)
    setRoundNumber(prev => prev + 1)
    setCurrentNumber(generateRandomNumber())
  }

  return { currentNumber, guessHistory, feedback, roundNumber, handleGuess }
}