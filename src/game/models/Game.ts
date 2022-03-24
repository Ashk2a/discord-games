import {GameState} from "@game/enums/GameState";
import {Dealer, Deck, Member, Player} from "@game/models";

export class Game {
    private _state: GameState = GameState.Pending;
    private _members: Array<Member> = [];
    private _deck: Deck;

    constructor() {
        this._members.push(new Dealer(this));
        this._deck = new Deck();
    }

    public get state(): GameState {
        return this._state;
    }

    public get dealer(): Dealer {
        return this._members.find((member: Member) => member instanceof Dealer) as Dealer;
    }

    public get players(): Array<Player> {
        return this._members.filter((member: Member) => member instanceof Player);
    }
}