import {Game, Hand} from "@game/structures";

export abstract class Member {
    protected _hands: Hand[] = [];

    protected constructor(protected _game: Game, protected _name: string) {
    }

    public get game(): Game {
        return this._game;
    }

    public get name(): string {
        return this._name;
    }

    public get hands(): Hand[] {
        return this._hands;
    }
}