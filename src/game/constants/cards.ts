export interface CardSuit {
    name: string
    sign: string
}

export interface CardType {
    name: string,
    value: number
}

export const CardSuits: CardSuit[] = [
    {name: "Spade", sign: "♠️"},
    {name: "Club", sign: "♣️"},
    {name: "Heart", sign: "♥️"},
    {name: "Diamond", sign: "♦️"}
];

export const CardTypes: CardType[] = [
    {name: "A", value: 1},
    {name: "2", value: 2},
    {name: "3", value: 3},
    {name: "4", value: 4},
    {name: "5", value: 5},
    {name: "6", value: 6},
    {name: "7", value: 7},
    {name: "8", value: 8},
    {name: "9", value: 9},
    {name: "10", value: 10},
    {name: "J", value: 10},
    {name: "Q", value: 10},
    {name: "K", value: 10}
];