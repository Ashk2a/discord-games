import {Game} from "@games/blackjack/structures/game";
import {Hand} from "@games/blackjack/structures/hand";

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


}