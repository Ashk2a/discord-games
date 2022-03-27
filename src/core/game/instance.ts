import EventEmitter from "events";
import {GameMember} from "@core/game/member";
import {GameModule} from "@core/game/module";

export enum GameState {
    INITIALIZED,
    READY,
    RUNNING,
    FINISHED
}

export abstract class GameInstance extends EventEmitter {
    protected _gameMembers: GameMember[] = [];

    protected constructor(protected _gameModule: GameModule, protected _threadId: string) {
        super();

        this.gameModule.gameInstances.push(this);
    }

    abstract addMember(discordUserId: string): GameMember;

    get gameMembers(): GameMember[] {
        return this._gameMembers;
    }

    get gameModule(): GameModule {
        return this._gameModule;
    }

    get threadId(): string {
        return this._threadId;
    }
}