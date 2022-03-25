import {Game} from "@game/structures";
import EventEmitter from "events";
import {GameEvent} from "@game/enums/game-event";

export class Manager extends EventEmitter {
    protected _games: Array<Game> = [];

    public get games(): Array<Game> {
        return this._games;
    }

    public createGame(): Game {
        const game = new Game(this);
        this._games.push(game);

        this.emit(GameEvent.CREATED, game);

        return game;
    }
}