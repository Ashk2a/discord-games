import {ClientOptions} from "discord.js";
import {ShewenyClientOptions} from "sheweny/typings/typescript/interfaces";
import {
    ButtonsManager,
    CommandsManager,
    EventsManager,
    InhibitorsManager,
    SelectMenusManager,
    ShewenyClient,
    ShewenyInformation
} from "sheweny";
import {Modules} from "../modules";
import {join} from "path";
import {ModuleConfig} from "@core/module";
import * as fs from "fs";


export class BotClient extends ShewenyClient {
    constructor(options: ShewenyClientOptions, clientOptions?: ClientOptions) {
        super(options, clientOptions);
    }

    async loadModules(): Promise<void> {
        for (const module of Modules) {
            if (!module.enabled) {
                new ShewenyInformation(this, `${module.id} module not enabled. Skipped.`);
                continue;
            }

            new ShewenyInformation(this, `${module.id} module loaded.`);

            await this.loadModuleCommands(module);
            await this.loadModuleEvents(module);
            await this.loadModuleInhibitors(module);
            await this.loadModuleButtons(module);
            await this.loadModuleSelectMenus(module);
        }
    }

    private async loadModuleEvents(module: ModuleConfig): Promise<void> {
        const path = join(module.path, module.id, 'events');

        if (fs.existsSync(join('./src', path))) {
            await new EventsManager(
                this,
                {
                    directory: path
                }
            ).loadAndRegisterAll();
        }
    }

    private async loadModuleCommands(module: ModuleConfig): Promise<void> {
        const path = join(module.path, module.id, 'events');

        if (fs.existsSync(join('./src', path))) {
            await new CommandsManager(
                this,
                {
                    directory: path,
                }
            ).loadAndRegisterAll();
        }
    }

    private async loadModuleInhibitors(module: ModuleConfig): Promise<void> {
        const path = join(module.path, module.id, 'inhibitors');

        if (fs.existsSync(join('./src', path))) {
            await new InhibitorsManager(
                this,
                {
                    directory: path
                }
            ).loadAll();
        }
    }

    private async loadModuleButtons(module: ModuleConfig): Promise<void> {
        const path = join(module.path, module.id, 'interactions/buttons');

        if (fs.existsSync(join('./src', path))) {
            await new ButtonsManager(
                this,
                {
                    directory: path
                }
            ).loadAll();
        }
    }

    private async loadModuleSelectMenus(module: ModuleConfig): Promise<void> {
        const path = join(module.path, module.id, 'interactions/select-menus');

        if (fs.existsSync(join('./src', path))) {
            await new SelectMenusManager(
                this,
                {
                    directory: path
                }
            ).loadAll();
        }
    }
}