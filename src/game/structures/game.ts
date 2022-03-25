import {GameState} from "@game/enums/game-state";
import {Dealer, Deck, Member, Player} from "@game/structures";
import {Manager} from "@game/manager";

export class Game {
    protected _state: GameState = GameState.PENDING;
    protected _members: Array<Member> = [];
    protected _deck: Deck;

    constructor(protected _manager: Manager) {
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
        return this._members.filter((member: Member) => member instanceof Player) as Array<Player>;
    }
}