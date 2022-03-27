import 'dotenv/config'
import 'module-alias/register';
import {BotClient} from "@core/client";
import {Intents} from "discord.js";

const client = new BotClient({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_INTEGRATIONS
    ],
    partials: ["GUILD_MEMBER"],
    mode: process.env.APP_ENV === 'production' ? 'production' : 'development',
    joinThreadsOnCreate: true
});

client.loadModules();

client.login(process.env.DISCORD_TOKEN).then(() => {
    console.log('Logged in successfully.')
});