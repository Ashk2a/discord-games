import EventEmitter from "events";
import {GameInstance} from "@core/game/instance";
import {GameModule} from "@core/game/module";

export abstract class GameMember extends EventEmitter {
    protected constructor(protected _gameInstance: GameInstance, protected _memberId?: string) {
        super();
    }

    get gameInstance(): GameInstance {
        return this._gameInstance;
    }

    get gameManager(): GameModule {
        return this._gameInstance.gameModule;
    }

    get memberId(): string|undefined {
        return this._memberId;
    }

    get isBot(): boolean {
        return this._memberId === undefined;
    }
}