import EventEmitter from "events";
import {GameInstance} from "@core/game/instance";
import {GameModule} from "@core/game/module";

export abstract class GameMember extends EventEmitter {
    protected constructor(protected _gameInstance: GameInstance, protected _discordUserId?: string) {
        super();

        this.gameInstance.gameMembers.push(this);
    }

    get gameInstance(): GameInstance {
        return this._gameInstance;
    }

    get gameManager(): GameModule {
        return this._gameInstance.gameModule;
    }

    get discordUserId(): string|undefined {
        return this._discordUserId;
    }

    get isBot(): boolean {
        return this._discordUserId === undefined;
    }
}