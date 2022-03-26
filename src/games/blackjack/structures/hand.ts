import {Card} from "@games/blackjack/structures/card";

export class Hand {
    protected _cards: Card[] = [];

    constructor() {
    }

    public get cards(): Card[] {
        return this._cards;
    }

    public get score(): number {
        const cardsOnlyAces: Card[] = [];
        const cardsExceptAces: Card[] = [];

        // Fill both declared cards collections
        this._cards.forEach((card: Card) => {
            card.isAce() ? cardsOnlyAces.push(card) : cardsExceptAces.push(card);
        });

        // Evaluate score without aces cards
        const scoreWithoutAces: number = cardsExceptAces.reduce((accumulator: number, cardValue: Card) => {
            return accumulator + cardValue.value
        }, 0);

        // Count of aces cards
        const acesCount = cardsOnlyAces.length;

        // Case there is no aces, just return the previous evaluated score
        if (acesCount === 0) {
            return scoreWithoutAces;
        }

        // Both potential scores under or equal 21
        const scores: number[] = [
            acesCount + scoreWithoutAces,
            acesCount + 10 + scoreWithoutAces
        ].filter((score: number) => score <= 21)

        // No valid scores found, just return the nearest above 21
        if (scores.length === 0) {
            return acesCount + scoreWithoutAces
        }

        // Max scores between both
        return Math.max(...scores);
    }

    public isBlackjack(): boolean {
        return this._cards.length === 2 && this.score === 21;
    }
}