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
import {AvailableModuleManager, ModuleConfig} from "@core/module";


export class BotClient extends ShewenyClient {
    constructor(options: ShewenyClientOptions, clientOptions?: ClientOptions) {
        super(options, clientOptions);
    }

    public async loadManagers() {
        for (const module of Modules) {
            if (!module.enabled) {
                new ShewenyInformation(this, `${module.id} module not enabled. Skipped.`);
                continue;
            }

            new ShewenyInformation(this, `${module.id} module loaded.`);

            for (const manager of module.managers) {
                switch (manager) {
                    case AvailableModuleManager.COMMANDS:
                        await this.loadCommands(module);
                        break;
                    case AvailableModuleManager.EVENTS:
                        await this.loadEvents(module);
                        break;
                    case AvailableModuleManager.INHIBITORS:
                        await this.loadInhibitors(module);
                        break;
                    case AvailableModuleManager.BUTTONS:
                        await this.loadButtons(module);
                        break;
                    case AvailableModuleManager.SELECT_MENUS:
                        await this.loadSelectMenus(module);
                        break;
                }
            }
        }
    }

    private async loadEvents(module: ModuleConfig) {
        await new EventsManager(
            this,
            {
                directory: join(module.path, module.id, 'events')
            }
        ).loadAndRegisterAll();
    }

    private async loadCommands(module: ModuleConfig) {
        await new CommandsManager(
            this,
            {
                directory: join(module.path, module.id, 'events'),
            }
        ).loadAndRegisterAll();
    }

    private async loadInhibitors(module: ModuleConfig) {
        await new InhibitorsManager(
            this,
            {
                directory: join(module.path, module.id, 'inhibitors')
            }
        ).loadAll()
    }

    private async loadButtons(module: ModuleConfig) {
        await new ButtonsManager(
            this,
            {
                directory: join(module.path, module.id, 'interactions/buttons')
            }
        ).loadAll()
    }

    private async loadSelectMenus(module: ModuleConfig) {
        await new SelectMenusManager(
            this,
            {
                directory: join(module.path, module.id, 'interactions/select-menus')
            }
        ).loadAll()
    }
}