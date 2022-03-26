import {Member} from "@games/blackjack/structures/member";
import {Game} from "@games/blackjack/structures/game";

export class Dealer extends Member {
    constructor(game: Game) {
        super(game,'Dealer');
    }
}