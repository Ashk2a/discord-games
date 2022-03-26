import {GameInstance} from "@core/game/instance";
import {Module, ModuleConfig} from "@core/module";
import {BotClient} from "@core/client";

export interface GameModuleConfig extends ModuleConfig {
    channelId: string
    description: string
}

export abstract class GameModule extends Module {
    protected _gameInstances: Map<string, GameInstance> = new Map();

    protected constructor(protected _client: BotClient, protected _config: GameModuleConfig) {
        super(_client, _config);
    }

    abstract createGameInstance(threadId: string): GameInstance;

    get channelId(): string {
        return this._config.channelId;
    }
}