import EventEmitter from "events";
import {GameMember} from "@core/game/member";
import {GameManager} from "@core/game/manager";


export abstract class GameInstance extends EventEmitter {
    protected _gameMembers: Map<string, GameMember> = new Map();

    protected constructor(protected _gameManager: GameManager, protected _threadId: string) {
        super();
    }

    public get gameManager(): GameManager {
        return this._gameManager;
    }

    public get threadId(): string {
        return this._threadId;
    }
}