import {Member} from "@modules/blackjack/structures/member";
import {Game} from "@modules/blackjack/structures/game";

export class Dealer extends Member {
    constructor(game: Game) {
        super(game,'Dealer');
    }
}