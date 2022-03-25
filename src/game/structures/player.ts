import {Member} from "@game/structures/member";
import {Game} from "@game/structures/game";
import {GameState} from "@game/enums/game-state";

export class Player extends Member {
    protected _moneyBet: number = 0;
    protected _money: number = 100;

    constructor(game: Game, name: string) {
        super(game, name);
    }

    public get money(): number {
        return this._money;
    }

    public get moneyBet(): number {
        return this._moneyBet;
    }

    public bet(amount: number): void {
        this._moneyBet = amount;
        this._money -= amount;
    }

    public canBet(amount: number): boolean {
        return this._money >= amount && this._game.state === GameState.PENDING;
    }
}