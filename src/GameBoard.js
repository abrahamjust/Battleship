export { Gameboard };

class Gameboard {
    constructor() {
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
        if (mode == 'horizontal') {
            switch (ship) {
                case "destroyer":
                    if(y <= 9 && x+1 <= 9 && this.board[x][y] == 0 && this.board[x+1][y] == 0) {
                        this.board[x][y] = 'd';
                        this.board[x+1][y] = 'd';
                        this.placed.destroyer = true;
                    }
                    break;
                case "battleship":
                    if(y <= 9 && x+3 <= 9 && this.board[x][y] == 0 && this.board[x+1][y] == 0 && this.board[x+2][y] == 0 && this.board[x+3][y] == 0) {
                        this.board[x][y] = 'b';
                        this.board[x+1][y] = 'b';
                        this.board[x+2][y] = 'b';
                        this.board[x+3][y] = 'b';
                        this.placed.battleship = true;
                    }
                    break;
                case "carrier":
                    if(y <= 9 && x+4 <= 9 && this.board[x][y] == 0 && this.board[x+1][y] == 0 && this.board[x+2][y] == 0 && this.board[x+3][y] == 0 && this.board[x+4][y] == 0) {
                        this.board[x][y] = 'ca';
                        this.board[x+1][y] = 'ca';
                        this.board[x+2][y] = 'ca';
                        this.board[x+3][y] = 'ca';
                        this.board[x+4][y] = 'ca'
                        this.placed.carrier = true;
                    }
                    break;
                case "submarine":
                    if(y <= 9 && x+2 <= 9 && this.board[x][y] == 0 && this.board[x+1][y] == 0 && this.board[x+2][y] == 0) {
                        this.board[x][y] = 's';
                        this.board[x+1][y] = 's';
                        this.board[x+2][y] = 's';
                        this.placed.submarine = true;
                    }
                    break;
                case "cruiser":
                    if(y <= 9 && x+2 <= 9 && this.board[x][y] == 0 && this.board[x+1][y] == 0 && this.board[x+2][y] == 0) {
                        this.board[x][y] = 'cr';
                        this.board[x+1][y] = 'cr';
                        this.board[x+2][y] = 'cr';
                        this.placed.cruiser = true;
                    }
                    break;
                default:
                    break;
            }
        } else {
            switch (ship) {
                case "destroyer":
                    if(x <= 9 && y+1 <= 9 && this.board[x][y] == 0 && this.board[x][y+1] == 0) {
                        this.board[x][y] = 'd';
                        this.board[x][y+1] = 'd';
                        this.placed.destroyer = true;
                    }
                    break;
                case "battleship":
                    if(x <= 9 && y+3 <= 9 && this.board[x][y] == 0 && this.board[x][y+1] == 0 && this.board[x][y+2] == 0 && this.board[x][y+3] == 0) {
                        this.board[x][y] = 'b';
                        this.board[x][y+1] = 'b';
                        this.board[x][y+2] = 'b';
                        this.board[x][y+3] = 'b';
                        this.placed.battleship = true;
                    }
                    break;
                case "carrier":
                    if(x <= 9 && y+4 <= 9 && this.board[x][y] == 0 && this.board[x][y+1] == 0 && this.board[x][y+2] == 0 && this.board[x][y+3] == 0 && this.board[x][y+4] == 0) {
                        this.board[x][y] = 'ca';
                        this.board[x][y+1] = 'ca';
                        this.board[x][y+2] = 'ca';
                        this.board[x][y+3] = 'ca';
                        this.board[x][y+4] = 'ca'
                        this.placed.carrier = true;
                    }
                    break;
                case "submarine":
                    if(x <= 9 && y+2 <= 9 && this.board[x][y] == 0 && this.board[x][y+1] == 0 && this.board[x][y+2] == 0) {
                        this.board[x][y] = 's';
                        this.board[x][y+1] = 's';
                        this.board[x][y+2] = 's';
                        this.placed.submarine = true;
                    }
                    break;
                case "cruiser":
                    if(x <= 9 && y+2 <= 9 && this.board[x][y] == 0 && this.board[x][y+1] == 0 && this.board[x][y+2] == 0) {
                        this.board[x][y] = 'cr';
                        this.board[x][y+1] = 'cr';
                        this.board[x][y+2] = 'cr';
                        this.placed.cruiser = true;
                    }
                    break;
                default:
                    break;
            }
        }
    }

    receiveAttack() {

    }
}