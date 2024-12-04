import React from 'react';
import { GameCard } from './types';

function shuffleArray<T>(array: Array<T>): Array<T> {
  for(let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1 ));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

function createGameCards(uniqueCards: number): GameCard[] {
  const gameCards = [] as GameCard[];
  for (let value = 0; value <= uniqueCards; value++){
    gameCards.push({
      value,
      isMatched: false,
      id: `${value}-1`
    })
    gameCards.push({
      value,
      isMatched: false,
      id: `${value}-2`
    })
  }
  return shuffleArray(gameCards)
}

type Level = { 
  cardCount: number
  maxScore: number
}

const levels: Level [] = [
  { cardCount: 3, maxScore: 8 },
  { cardCount: 4, maxScore: 10 },
  { cardCount: 5, maxScore: 12 },
  { cardCount: 6, maxScore: 14 },
  { cardCount: 7, maxScore: 16 },
]

function App() {
  const [level, setLevel] = React.useState(0);
  const [gameCards, setGameCards] = React.useState(() => createGameCards(levels[0].cardCount))
  const [flippedCards, setFlippedCards] = React.useState([] as GameCard[])
  const [score, setScore] = React.useState(0)

const isDone = gameCards.every(gameCard = gameCard.isMatched)

React.useEffect(() => {
  const levelConfig = levels[level]
  if(!levelConfig) {
    setGameCards([])
  } else {
    setGameCards(createGameCards(levelConfig.cardCount))
  }
  setScore(0)
}, [level])

const handleCardFlip = React.useCallback((gameCard: GameCard) => {
  if (!flippedCards.length) {
    setFlippedCards([gameCard])
    return
  }
  if (flippedCards.length !== 1) {
    return
  }
  setScore((prev) => prev + 1);
  if (flippedCards[0].value === gameCard.value) {
    setGameCards((prevGameCards) =>
      prevGameCards.map(prevGameCards) =>
      [gameCard.id, flippedCards[0].id].includes(prevGameCard.id)
        ? {
          ...prevGameCard,
          isMatched: true,
        }
        : prevGameCard,
    ),
  );
  setFlippedCards([])
  } else {
    setFlippedCards(prev => prev.concat(gameCard))
    setTimeout(() => {
      setFlippedCards([])
    }, 1000)
  }
}, [flippedCards]);

  const handleRestart = React.useCallback(() => {
    setGameCards(createGameCards(levels[level].cardCount))

  })

  return  <div> Memory Game</div>;
}

export default App
