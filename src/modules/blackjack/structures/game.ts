import {GameState} from "@modules/blackjack/enums/game-state";
import {Dealer} from "@modules/blackjack/structures/dealer";
import {Deck} from "@modules/blackjack/structures/deck";
import {GameInstance} from "@core/game/instance";
import {GameModule} from "@core/game/module";
import { GameMember } from "@core/game/member";
import {Player} from "@modules/blackjack/structures/player";

export class Game extends GameInstance {
    protected _state: GameState = GameState.PENDING;
    protected _dealer: Dealer;
    protected _deck: Deck;

    constructor(protected _gameModule: GameModule, protected _threadId: string) {
        super(_gameModule, _threadId);

        this._dealer = new Dealer(this);
        this._deck = new Deck();
    }

    addMember(discordUserId: string): GameMember {
        return new Player(this, discordUserId);
    }

    get state(): GameState {
        return this._state;
    }

    get dealer(): Dealer {
        return this._dealer;
    }
}