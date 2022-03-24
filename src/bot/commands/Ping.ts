import type {ShewenyClient} from "sheweny";
import {Command} from "sheweny";
import type {CommandInteraction} from "discord.js";

export class PingCommand extends Command {
    constructor(client: ShewenyClient) {
        super(client, {
            name: "ping",
            description: "Ping Pong",
            type: "SLASH_COMMAND",
            category: "Misc",
            cooldown: 3,
        });
    }

    async execute(interaction: CommandInteraction) {
        await interaction.reply({content: "Pong"});
    }
}
