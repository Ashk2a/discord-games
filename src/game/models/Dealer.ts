import {Member} from "@game/models/Member";
import {Game} from "@game/models/Game";

export class Dealer extends Member {
    constructor(game: Game) {
        super(game,'Dealer');
    }
}