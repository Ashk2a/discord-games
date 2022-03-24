import { ShewenyClient } from "sheweny";
import IBotConfig from "@bot/IBotConfig";
import {Intents} from "discord.js";

declare module "sheweny" {
    interface ShewenyClient {
        config: IBotConfig;
    }
}

export default class Client extends ShewenyClient {
    readonly config: IBotConfig = {
        discord_token: process.env.DISCORD_TOKEN!,
        environment: process.env.APP_ENV!
    }

    constructor() {
        super({
            intents: [
                Intents.FLAGS.GUILDS,
                Intents.FLAGS.GUILD_MESSAGES
            ],
            managers: {
                commands: {
                    directory: "./bot/commands",
                    autoRegisterApplicationCommands: true,
                    prefix: "!",
                },
                events: {
                    directory: "./bot/events",
                },
                buttons: {
                    directory: "./bot/interactions/buttons",
                },
                selectMenus: {
                    directory: "./bot/interactions/select-menus",
                },
                inhibitors: {
                    directory: "./bot/inhibitors",
                },
            }
        });

        this.token = this.config.discord_token;
        this.mode = this.config.environment === 'production'
            ? 'production'
            : 'development'
    }
}