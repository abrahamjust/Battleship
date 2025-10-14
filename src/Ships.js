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
                break;
            case "battleship":
                this.battleship.hits += 1;
                break;
            case "carrier":
                this.carrier.hits += 1;
                break;
            case "submarine":
                this.submarine.hits += 1;
                break;
            case "cruiser":
                this.cruiser.hits += 1;
                break;
            default:
                break;
        }
    }

    isSunk(ship) {
        ship = ship.toLowerCase();
        switch (ship) {
            case "destroyer":
                this.destroyer.hits == this.destroyer.length;
                this.destroyer.sunk = true;
                break;
            case "battleship":
                this.battleship.hits == this.battleship.length;
                this.battleship.sunk = true;
                break;
            case "carrier":
                this.carrier.hits == this.carrier.length;
                this.carrier.sunk = true;
                break;
            case "submarine":
                this.submarine.hits == this.submarine.length;
                this.submarine.sunk = true;
                break;
            case "cruiser":
                this.cruiser.hits == this.cruiser.length;
                this.cruiser.sunk = true;
                break;
            default:
                break;
        }
    }
}

