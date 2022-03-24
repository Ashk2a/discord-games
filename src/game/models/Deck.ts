import {Card} from "@game/models/Card";
import {CardSuit, CardSuits, CardType, CardTypes} from "@game/constants/cards";

export class Deck {
    private _cards: Array<Card> = [];

    constructor() {
        const numberDecks = 6;

        Array.from({length: numberDecks}).forEach(() => {
            CardTypes.forEach((cardType: CardType) => {
                CardSuits.forEach((cardSuit: CardSuit) => {
                    this._cards.push(new Card(cardSuit, cardType))
                });
            })
        })

        this.shuffle();
    }

    public shuffle(): void {
        for (let index: number = this._cards.length - 1; index > 0; index--) {
            const newIndex = Math.floor(Math.random() * (index + 1));

            [this._cards[index], this._cards[newIndex]] = [this._cards[newIndex], this._cards[index]];
        }
    }

    public draw(): Card
    {
        return this._cards.pop()!;
    }
}