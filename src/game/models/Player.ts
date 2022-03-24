import {Member} from "@game/models/Member";
import {Game} from "@game/models/Game";
import {Ability} from "@game/enums/Ability";
import {GameState} from "@game/enums/GameState";

export class Player extends Member {
    private _bet: number = 0;
    private _money: number;

    constructor(game: Game, name: string) {
        super(game, name);

        this._money = 100;
    }

    public can(ability: Ability): boolean
    {
        switch (ability) {
            case Ability.Bet:
                return this.money > 0 && this.game.state === GameState.Pending;
            case Ability.Draw:


        }

        return false;
    }

    public get money(): number
    {
        return this._money;
    }
}