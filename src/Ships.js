export { Ship };

class Ship {
    constructor() {
        this.destroyer = {
            length: 2,
            hits: 0,
            sunk: false
        };
        this.battleship = {
            length: 4,
            hits: 0,
            sunk: false
        };
        this.carrier = {
            length: 5,
            hits: 0,
            sunk: false
        };
        this.submarine = {
            length: 3,
            hits: 0,
            sunk: false
        };
        this.cruiser = {
            length: 3,
            hits: 0,
            sunk: false
        };
    }

    hit(ship) {
        ship = ship.toLowerCase();
        switch (ship) {
            case "destroyer":
                this.destroyer.hits += 1;
                this.isSunk("destroyer");
                break;
            case "battleship":
                this.battleship.hits += 1;
                this.isSunk("battleship");
                break;
            case "carrier":
                this.carrier.hits += 1;
                this.isSunk("carrier");
                break;
            case "submarine":
                this.submarine.hits += 1;
                this.isSunk("submarine");
                break;
            case "cruiser":
                this.cruiser.hits += 1;
                this.isSunk("cruiser");
                break;
            default:
                break;
        }
    }

    isSunk(ship) {
        ship = ship.toLowerCase();
        switch (ship) {
            case "destroyer":
                if(this.destroyer.hits == this.destroyer.length) {
                    this.destroyer.sunk = true;
                    return 'sunk';
                }
                return 'not sunk';
            case "battleship":
                if(this.battleship.hits == this.battleship.length) {
                    this.battleship.sunk = true;
                    return 'sunk';
                }
                return 'not sunk';
            case "carrier":
                if(this.carrier.hits == this.carrier.length) {
                    this.carrier.sunk = true;
                    return 'sunk';
                }
                return 'not sunk';
            case "submarine":
                if(this.submarine.hits == this.submarine.length) {
                    this.submarine.sunk = true;
                    return 'sunk';
                }
                return 'not sunk';
            case "cruiser":
                if(this.cruiser.hits == this.cruiser.length) {
                    this.cruiser.sunk = true;
                    return 'sunk';
                }
                return 'not sunk';
            default:
                break;
        }
    }
}

