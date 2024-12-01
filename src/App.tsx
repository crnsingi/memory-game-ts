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
  { cardCount: 3, maxScore: 8 }, j
]

function App() {
  return  <div> Memory Game</div>;
  
}

export default App
