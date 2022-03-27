import {GameState} from "@modules/blackjack/enums/game-state";
import {GameMember} from "@core/game/member";
import {Hand} from "@modules/blackjack/structures/hand";
import {Game} from "@modules/blackjack/structures/game";

export class Player extends GameMember {
    protected _hands: Hand[] = [];
    protected _moneyBet: number = 0;
    protected _money: number = 100;

    constructor(protected _gameInstance: Game, protected _discordUserId?: string) {
        super(_gameInstance, _discordUserId);
    }

    public get hands(): Hand[] {
        return this._hands;
    }

    public get moneyBet(): number {
        return this._moneyBet;
    }

    public get money(): number {
        return this._money;
    }

    public bet(amount: number): void {
        this._moneyBet = amount;
        this._money -= amount;
    }

    public canBet(amount: number): boolean {
        return this._money >= amount && this._gameInstance.state === GameState.PENDING;
    }
}