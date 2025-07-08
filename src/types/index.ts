export interface GuessHistoryItem {
  number: number
  guess: boolean
  isCorrect: boolean
}

export interface GameSession {
  sessionId: string
}