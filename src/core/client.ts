import {ClientOptions} from "discord.js";
import {ShewenyClientOptions} from "sheweny/typings/typescript/interfaces";
import {ShewenyClient, ShewenyInformation} from "sheweny";
import {ModuleConfigs} from "../module-configs";
import {Module} from "@core/module";
import {join, resolve} from "path";
import {GameModule} from "@core/game/module";


export class BotClient extends ShewenyClient {
    protected _modules: Module[] = [];

    constructor(options: ShewenyClientOptions, clientOptions?: ClientOptions) {
        super(options, clientOptions);
    }

    async loadModules(): Promise<void> {
        const moduleDirectory = resolve(require.main!.path, 'modules');

        for (const moduleConfig of ModuleConfigs) {
            const moduleFilePath = join(moduleDirectory, moduleConfig.id, 'module.ts');

            const moduleFile: any = await import(moduleFilePath);
            const moduleStructure = moduleFile[Object.keys(moduleFile)[0]];
            const module: Module = new moduleStructure(this, moduleConfig);

            // Module is disabled, don't load managers
            if (!module.config.enabled) {
                continue;
            }

            new ShewenyInformation(this, `${module.config.id} module loaded.`);
            await module.loadManagers();

            this._modules.push(module);
        }
    }

    getModule<T extends Module>(moduleId: string): T {
        return this._modules.find(module => {
            return module.config.id === moduleId;
        }) as T;
    }

    getGameModule<T extends GameModule>(moduleId: string): T {
        return this._modules.find(module => {
            return module.config.id === moduleId && module instanceof GameModule;
        }) as T;
    }

    getGameModules(): GameModule[] {
        return this._modules.filter(module => {
            return module instanceof GameModule;
        }) as GameModule[];
    }
}