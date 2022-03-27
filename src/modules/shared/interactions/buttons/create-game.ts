import {Button} from "sheweny";
import type {ButtonInteraction} from "discord.js";
import {TextChannel} from "discord.js";
import {BotClient} from "@core/client";

export class CreateGame extends Button {
    constructor(public client: BotClient) {
        super(client, [new RegExp('create-game-(.*)')]);
    }

    async execute(button: ButtonInteraction) {
        const gameModuleId = button.customId.substring('create-game-'.length);
        const gameModule = this.client.getGameModule(gameModuleId);

        if (!gameModule) {
            return;
        }

        (<TextChannel>button.channel).threads.create({name: `${gameModuleId} - ${button.message.author.username}`})
            .then(async thread => {
                const lastChannelMessage = (await (<TextChannel>button.channel).messages.fetch({limit: 1})).last();

                if (lastChannelMessage?.type === 'THREAD_CREATED') {
                    await lastChannelMessage.delete()
                }

                gameModule
                    .createGameInstance(thread.id)
                    .addMember(button.user.id);

                await thread.members.add(button.user);
                await thread.send(`${button.user.username} has created a new game of ${gameModuleId}!`);
            });

        await button.update({});
    }
}
