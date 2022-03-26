import {GameState} from "@games/blackjack/enums/game-state";
import {Dealer} from "@games/blackjack/structures/dealer";
import {Deck} from "@games/blackjack/structures/deck";
import {GameInstance} from "@core/game/instance";
import {GameManager} from "@core/game/manager";

export class Game extends GameInstance {
    protected _state: GameState = GameState.PENDING;
    protected _dealer: Dealer;
    protected _deck: Deck;

    constructor(protected _gameManager: GameManager, protected _threadId: string) {
        super(_gameManager, _threadId);

        this._dealer = new Dealer(this);
        this._deck = new Deck();
    }

    public get state(): GameState {
        return this._state;
    }

    public get dealer(): Dealer {
        return this._dealer;
    }
}