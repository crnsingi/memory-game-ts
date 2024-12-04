import React from "react";
import { GameCard } from "./types";

type CardProps = { 
    card: GameCard;
    isFlipped: boolean;
    isDisabled: boolean;
    onFlip: (gameCard: GameCard) => void;
};

export function Card({ card, isFlipped, isDisabled, onFlip }: CardProps) {
    const handleClick = React.useCallback(() => {
        onFlip(card);
    }, [onFlip, card]);

    const isCardFlipped = card.isMatched || isFlipped;

    return ( 
        <button 
        className={`relative transition-transform duration-500 transform border-2 border-purple-950 p-10 m-2 w-1/5 ${isCardFlipped ? "flipped" 
            : "bg-red-200"}`}
            disabled={isCardFlipped || isDisabled}
            onClick={handleClick}
        >
            {isCardFlipped ? card.value : "?"}
        </button>
    );
}