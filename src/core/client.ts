import {ClientOptions} from "discord.js";
import {ShewenyClientOptions} from "sheweny/typings/typescript/interfaces";
import {ShewenyClient} from "sheweny";
import {ModuleConfigs} from "../module-configs";
import {Module} from "@core/module";
import {join, resolve} from "path";


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

            this._modules.push(new moduleStructure(this, moduleConfig));
        }
    }
}