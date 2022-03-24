import {CardSuit, CardType} from "@game/constants/cards";

export class Card {
    constructor(private _suit: CardSuit, private _type: CardType) {
    }

    public get suit(): CardSuit {
        return this._suit;
    }

    public get type(): CardType {
        return this._type;
    }

    public get value(): number
    {
        return this.type.value;
    }

    public isAce(): boolean
    {
        return this.type.name === 'A';
    }

    public toString(): string
    {
        return `${this.suit.name}${this.type.name}`
    }
}