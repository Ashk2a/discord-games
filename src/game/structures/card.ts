import {CardSuit, CardType} from "@game/constants/card";

export class Card {
    constructor(protected _suit: CardSuit, protected _type: CardType) {
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
        return `${this._suit.name}${this._type.name}`
    }
}