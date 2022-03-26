import {GameModule} from "@core/game/module";
import {GameInstance} from "@core/game/instance";
import {Game} from "@modules/blackjack/structures/game";

export class BlackjackModule extends GameModule {
    createGameInstance(threadId: string): GameInstance {
        return new Game(this, threadId);
    }
}