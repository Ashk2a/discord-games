import {Event} from "sheweny";
import {BotClient} from "@core/client";

export class ReadyEvent extends Event {
    constructor(public client: BotClient) {
        super(client, "ready", {
            description: "Client is logged in",
            once: true,
            emitter: client,
        });
    }

    execute() {
        console.log("Module blackjack ready");
    }
}
