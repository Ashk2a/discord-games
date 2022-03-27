import {Event, ShewenyWarning} from "sheweny";
import {BotClient} from "@core/client";
import {MessageActionRow, MessageButton, MessageOptions, TextChannel} from "discord.js";
import {GameModule, GameModuleConfig} from "@core/game/module";

export class ReadyEvent extends Event {
    constructor(public client: BotClient) {
        super(client, "ready", {
            description: "Client is logged in",
            once: true,
            emitter: client,
        });
    }

    async execute() {
        console.log("Module shared ready ");
        const gameModules = this.client.getGameModules();

        for (const gameModule of gameModules) {
            await this.setupGameChannel(gameModule);
        }
    }

    private async setupGameChannel(gameModule: GameModule){
        const channel = await this.client.channels.fetch(gameModule.channelId).catch(() => {
            new ShewenyWarning(this.client, `Failed to fetch channel for game module ${gameModule.config.id}`);
        });

        if (!channel) {
            return;
        }

        const message = (await (<TextChannel>channel).messages.fetch({limit: 1})).last();

        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId(`create-game-${gameModule.config.id}`)
                .setLabel(`Lancer une partie !`)
                .setStyle('PRIMARY')
        );

        const options: MessageOptions = {
            content: (<GameModuleConfig>gameModule.config).description,
            components: [row]
        };

        (message)
            ? await message.edit(options)
            : await (<TextChannel>channel).send(options);

        await this.clearGameThreads(<TextChannel>channel);
    }

    private async clearGameThreads(channel: TextChannel){
        const threads = (await channel.threads.fetchActive()).threads;

        threads.forEach((thread) => {
            thread.delete();
        });
    }
}
