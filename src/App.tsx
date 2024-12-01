import React from 'react';
import { GameCard } from './types';

function createGameCards(uniqueCards: number): GameCard[] {
  const gameCards = [] as GameCard[];
  for (let value = 0; value <= uniqueCards; value++){
    gameCards.push({
      value,
      isMatched: false,
      id: `${value}-1`
    })
  }
}

function App() {
  return  <div> Memory Game</div>;
  
}

export default App
