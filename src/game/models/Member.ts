import {Game, Hand} from "@game/models";

export abstract class Member {
    private _hands: Array<Hand> = [];

    constructor(private _game: Game, private _name: string) {
    }

    public get game(): Game {
        return this._game;
    }

    public get name(): string {
        return this._name;
    }

    public get hands(): Array<Hand> {
        return this._hands;
    }
}