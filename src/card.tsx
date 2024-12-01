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
}