import React from 'react';
import { GameCard } from './types';

function suffleArray<T>(array: Array<T>): Array<T> {
  for(let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1 ));
  }
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
  return suffleArray(gameCards)
}

function App() {
  return  <div> Memory Game</div>;
  
}

export default App
