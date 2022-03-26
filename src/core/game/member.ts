import EventEmitter from "events";
import {GameInstance} from "@core/game/instance";
import {GameManager} from "@core/game/manager";

export abstract class GameMember extends EventEmitter {
    protected constructor(protected _gameInstance: GameInstance, protected _memberId?: string) {
        super();
    }

    get gameInstance(): GameInstance {
        return this._gameInstance;
    }

    get gameManager(): GameManager {
        return this._gameInstance.gameManager;
    }

    get memberId(): string|undefined {
        return this._memberId;
    }

    get isBot(): boolean {
        return this._memberId === undefined;
    }
}