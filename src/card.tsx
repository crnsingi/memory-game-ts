import React from "react";
import { GameCard } from "./types";

type CardProps = { 
    card: GameCard;
    isFlipped: boolean;
    isDisabled: boolean;
    onFlip: (gameCard: GameCard) => void;
};