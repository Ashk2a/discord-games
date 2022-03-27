import EventEmitter from "events";
import {BotClient} from "@core/client";
import {join} from "path";
import fs from "fs";
import {ButtonsManager, CommandsManager, EventsManager, InhibitorsManager, SelectMenusManager} from "sheweny";

export interface ModuleConfig {
    enabled: boolean,
    id: string
    directory?: string,
}

export abstract class Module extends EventEmitter {
    protected constructor(protected _client: BotClient, protected _config: ModuleConfig) {
        super();

        if (!this._config.directory) {
            this._config.directory = join('modules', this._config.id);
        }
    }

    public get client(): BotClient {
        return this._client;
    }

    public get config(): ModuleConfig {
        return this._config;
    }

    public async loadManagers(): Promise<void> {
        await this.loadEventsManager();
        await this.loadCommandsManager();
        await this.loadInhibitorsManager();
        await this.loadButtonsManager();
        await this.loadSelectMenusManager();
    }

    private async loadEventsManager(): Promise<void> {
        const path = join(this._config.directory!, 'events');

        if (fs.existsSync(join('./src', path))) {
            await new EventsManager(
                this._client,
                {
                    directory: path
                }
            ).loadAndRegisterAll();
        }
    }

    private async loadCommandsManager(): Promise<void> {
        const path = join(this._config.directory!, 'commands');

        if (fs.existsSync(join('./src', path))) {
            await new CommandsManager(
                this._client,
                {
                    directory: path,
                    guildId: process.env.GUILD_ID,
                    autoRegisterApplicationCommands: true,
                    loadAll: true,
                    prefix: "!",
                    default: {
                        cooldown: 10
                    }
                }
            );
        }
    }

    private async loadInhibitorsManager(): Promise<void> {
        const path = join(this._config.directory!, 'inhibitors');

        if (fs.existsSync(join('./src', path))) {
            await new InhibitorsManager(
                this._client,
                {
                    directory: path,
                    loadAll: true
                }
            );
        }
    }

    private async loadButtonsManager(): Promise<void> {
        const path = join(this._config.directory!, 'interactions/buttons');

        if (fs.existsSync(join('./src', path))) {
            await new ButtonsManager(
                this._client,
                {
                    directory: path,
                    loadAll: true
                }
            );
        }
    }

    private async loadSelectMenusManager(): Promise<void> {
        const path = join(this._config.directory!, 'interactions/select-menus');

        if (fs.existsSync(join('./src', path))) {
            await new SelectMenusManager(
                this._client,
                {
                    directory: path,
                    loadAll: true
                }
            );
        }
    }
}