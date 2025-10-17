import { Gameboard } from "./GameBoard.js";
export { Player };

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type; // human or computer
        this.board = new Gameboard();
    }
}