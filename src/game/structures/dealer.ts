import {Member} from "@game/structures/member";
import {Game} from "@game/structures/game";

export class Dealer extends Member {
    constructor(game: Game) {
        super(game,'Dealer');
    }
}