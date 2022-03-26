import EventEmitter from "events";
import {GameMember} from "@core/game/member";
import {GameModule} from "@core/game/module";


export abstract class GameInstance extends EventEmitter {
    protected _gameMembers: Map<string, GameMember> = new Map();

    protected constructor(protected _gameModule: GameModule, protected _threadId: string) {
        super();
    }

    public get gameModule(): GameModule {
        return this._gameModule;
    }

    public get threadId(): string {
        return this._threadId;
    }
}