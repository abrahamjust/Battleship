import { experiments } from "webpack";
import { Ship } from "../src/Ships";

test("function \"hit()\" works for destroyers", () => {
    let obj = new Ship();
    obj.destroyer.hits = 0;
    obj.hit('destroyer');
    expect(obj.destroyer.hits).toBe(1);
});

test("function \"hit()\" works for battleships", () => {
    let obj = new Ship();
    obj.battleship.hits = 0;
    obj.hit('battleship');
    expect(obj.battleship.hits).toBe(1);
});

test("function \"hit()\" works for cruisers", () => {
    let obj = new Ship();
    obj.cruiser.hits = 0;
    obj.hit('cruiser');
    expect(obj.cruiser.hits).toBe(1);
});

test("function \"hit()\" works for submarines", () => {
    let obj = new Ship();
    obj.submarine.hits = 0;
    obj.hit('submarine');
    expect(obj.submarine.hits).toBe(1);
});

test("function \"hit()\" works for carriers", () => {
    let obj = new Ship();
    obj.carrier.hits = 0;
    obj.hit('carrier');
    expect(obj.carrier.hits).toBe(1);
});

test("destroyer is sunk", () => {
    let obj = new Ship();
    for (let i = 0; i < 2; i++) {
        obj.hit('destroyer');
    }
    obj.isSunk('destroyer');
    expect(obj.destroyer.sunk).toBe(true);
});

test("battleship is sunk", () => {
    let obj = new Ship();
    for (let i = 0; i < 4; i++) {
        obj.hit('battleship');
    }
    obj.isSunk('battleship');
    expect(obj.battleship.sunk).toBe(true);
});

test("carrier is sunk", () => {
    let obj = new Ship();
    for (let i = 0; i < 5; i++) {
        obj.hit('carrier');
    }
    obj.isSunk('carrier');
    expect(obj.carrier.sunk).toBe(true);
});

test("cruiser is sunk", () => {
    let obj = new Ship();
    for (let i = 0; i < 3; i++) {
        obj.hit('cruiser');
    }
    obj.isSunk('cruiser');
    expect(obj.cruiser.sunk).toBe(true);
});

test("submarine is sunk", () => {
    let obj = new Ship();
    for (let i = 0; i < 3; i++) {
        obj.hit('submarine');
    }
    obj.isSunk('submarine');
    expect(obj.submarine.sunk).toBe(true);
});