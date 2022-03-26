import {GameManager} from "@core/game/manager";
import {GameInstance} from "@core/game/instance";
import {Game} from "@games/blackjack/structures/game";

export class BlackjackManager extends GameManager {
    createGameInstance(threadId: string): GameInstance {
        return new Game(this, threadId);
    }

}