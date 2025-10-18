export { Gameboard };
import { Ship } from "./Ships.js";

class Gameboard {
    constructor() {
        this.ships = new Ship();

        this.board = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];

        this.enemyBoard = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];

        this.placed = {
            destroyer: false,
            battleship: false,
            cruiser: false,
            submarine: false,
            carrier: false
        };
    }

    placeShip(ship, mode, x, y) {
        ship = ship.toLowerCase();
        if (mode == 'vertical') {
            switch (ship) {
                case "destroyer":
                    if (y <= 9 && x + 1 <= 9 && this.board[x][y] == 0 && this.board[x + 1][y] == 0) {
                        this.board[x][y] = 'd';
                        this.board[x + 1][y] = 'd';
                        this.placed.destroyer = true;
                    } else {
                        return "invalid placement";
                    }
                    break;
                case "battleship":
                    if (y <= 9 && x + 3 <= 9 && this.board[x][y] == 0 && this.board[x + 1][y] == 0 && this.board[x + 2][y] == 0 && this.board[x + 3][y] == 0) {
                        this.board[x][y] = 'b';
                        this.board[x + 1][y] = 'b';
                        this.board[x + 2][y] = 'b';
                        this.board[x + 3][y] = 'b';
                        this.placed.battleship = true;
                    } else {
                        return "invalid placement";
                    }
                    break;
                case "carrier":
                    if (y <= 9 && x + 4 <= 9 && this.board[x][y] == 0 && this.board[x + 1][y] == 0 && this.board[x + 2][y] == 0 && this.board[x + 3][y] == 0 && this.board[x + 4][y] == 0) {
                        this.board[x][y] = 'ca';
                        this.board[x + 1][y] = 'ca';
                        this.board[x + 2][y] = 'ca';
                        this.board[x + 3][y] = 'ca';
                        this.board[x + 4][y] = 'ca'
                        this.placed.carrier = true;
                    } else {
                        return "invalid placement";
                    }
                    break;
                case "submarine":
                    if (y <= 9 && x + 2 <= 9 && this.board[x][y] == 0 && this.board[x + 1][y] == 0 && this.board[x + 2][y] == 0) {
                        this.board[x][y] = 's';
                        this.board[x + 1][y] = 's';
                        this.board[x + 2][y] = 's';
                        this.placed.submarine = true;
                    } else {
                        return "invalid placement";
                    }
                    break;
                case "cruiser":
                    if (y <= 9 && x + 2 <= 9 && this.board[x][y] == 0 && this.board[x + 1][y] == 0 && this.board[x + 2][y] == 0) {
                        this.board[x][y] = 'cr';
                        this.board[x + 1][y] = 'cr';
                        this.board[x + 2][y] = 'cr';
                        this.placed.cruiser = true;
                    } else {
                        return "invalid placement";
                    }
                    break;
                default:
                    break;
            }
        } else {
            switch (ship) {
                case "destroyer":
                    if (x <= 9 && y + 1 <= 9 && this.board[x][y] == 0 && this.board[x][y + 1] == 0) {
                        this.board[x][y] = 'd';
                        this.board[x][y + 1] = 'd';
                        this.placed.destroyer = true;
                    } else {
                        return "invalid placement";
                    }
                    break;
                case "battleship":
                    if (x <= 9 && y + 3 <= 9 && this.board[x][y] == 0 && this.board[x][y + 1] == 0 && this.board[x][y + 2] == 0 && this.board[x][y + 3] == 0) {
                        this.board[x][y] = 'b';
                        this.board[x][y + 1] = 'b';
                        this.board[x][y + 2] = 'b';
                        this.board[x][y + 3] = 'b';
                        this.placed.battleship = true;
                    } else {
                        return "invalid placement";
                    }
                    break;
                case "carrier":
                    if (x <= 9 && y + 4 <= 9 && this.board[x][y] == 0 && this.board[x][y + 1] == 0 && this.board[x][y + 2] == 0 && this.board[x][y + 3] == 0 && this.board[x][y + 4] == 0) {
                        this.board[x][y] = 'ca';
                        this.board[x][y + 1] = 'ca';
                        this.board[x][y + 2] = 'ca';
                        this.board[x][y + 3] = 'ca';
                        this.board[x][y + 4] = 'ca'
                        this.placed.carrier = true;
                    } else {
                        return "invalid placement";
                    }
                    break;
                case "submarine":
                    if (x <= 9 && y + 2 <= 9 && this.board[x][y] == 0 && this.board[x][y + 1] == 0 && this.board[x][y + 2] == 0) {
                        this.board[x][y] = 's';
                        this.board[x][y + 1] = 's';
                        this.board[x][y + 2] = 's';
                        this.placed.submarine = true;
                    } else {
                        return "invalid placement";
                    }
                    break;
                case "cruiser":
                    if (x <= 9 && y + 2 <= 9 && this.board[x][y] == 0 && this.board[x][y + 1] == 0 && this.board[x][y + 2] == 0) {
                        this.board[x][y] = 'cr';
                        this.board[x][y + 1] = 'cr';
                        this.board[x][y + 2] = 'cr';
                        this.placed.cruiser = true;
                    } else {
                        return "invalid placement";
                    }
                    break;
                default:
                    break;
            }
        }
    }

    receiveAttack(x, y) {
        if (this.board[x][y] == 'h' || this.board[x][y] == 'x') {
            return "already tried";
        } else if (this.board[x][y] == 0) {
            this.board[x][y] = 'x';
            return "miss";
        } else {
            switch (this.board[x][y]) {
                case 'd':
                    this.ships.hit("destroyer");
                    break;
                case 'b':
                    this.ships.hit("battleship");
                    break;
                case 'ca':
                    this.ships.hit("carrier");
                    break;
                case 's':
                    this.ships.hit("submarine");
                    break;
                case 'cr':
                    this.ships.hit("cruiser");
                    break;
            }
            this.board[x][y] = 'h';
            return "hit";
        }
    }
}