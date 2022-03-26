import EventEmitter from "events";
import {GameInstance} from "@core/game/instance";

export abstract class GameManager extends EventEmitter {
    protected _gameInstances: Map<string, GameInstance> = new Map();

    protected constructor(protected _channelId: string) {
        super();
    }

    abstract createGameInstance(threadId: string): GameInstance;

    get channelId(): string {
        return this._channelId;
    }

    get gameInstances(): Map<string, GameInstance> {
        return this._gameInstances;
    }
}