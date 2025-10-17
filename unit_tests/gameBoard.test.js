import { experiments } from "webpack";
import { Gameboard } from "../src/GameBoard";

test("placing a destroyer", () => {
    let obj = new Gameboard();
    obj.placeShip('destroyer', 'horizontal', 1, 1);
    expect(obj.placed.destroyer).toBe(true);
});

test("placing a destroyer out of bounds", () => {
    let obj = new Gameboard();
    obj.placeShip('destroyer', 'horizontal', 9, 9);
    expect(obj.placed.destroyer).toBe(false);
});

test("placing a battleship", () => {
    let obj = new Gameboard();
    obj.placeShip('battleship', 'vertical', 1, 1);
    expect(obj.placed.battleship).toBe(true);
});

test("placing a battleship out of bounds", () => {
    let obj = new Gameboard();
    obj.placeShip('destroyer', 'horizontal', 10, 1);
    expect(obj.placed.battleship).toBe(false);
});

test("placing a cruiser", () => {
    let obj = new Gameboard();
    obj.placeShip('cruiser', 'horizontal', 1, 1);
    expect(obj.placed.cruiser).toBe(true);
});

test("placing a cruiser out of bounds", () => {
    let obj = new Gameboard();
    obj.placeShip('cruiser', 'horizontal', 10, 1);
    expect(obj.placed.cruiser).toBe(false);
});

test("placing a carrier", () => {
    let obj = new Gameboard();
    obj.placeShip('carrier', 'horizontal', 1, 1);
    expect(obj.placed.carrier).toBe(true);
});

test("placing a carrier out of bounds", () => {
    let obj = new Gameboard();
    obj.placeShip('carrier', 'horizontal', 10, 1);
    expect(obj.placed.carrier).toBe(false);
});

test("placing a submarine", () => {
    let obj = new Gameboard();
    obj.placeShip('submarine', 'horizontal', 1, 1);
    expect(obj.placed.submarine).toBe(true);
});

test("placing a submarine out of bounds", () => {
    let obj = new Gameboard();
    obj.placeShip('submarine', 'vertical', 9, 9);
    expect(obj.placed.submarine).toBe(false);
});

test("missing an attack", () => {
    let obj = new Gameboard();
    obj.receiveAttack(1, 1);
    expect(obj.board[1][1]).toBe('x');
});

test("hit", () => {
    let obj = new Gameboard();
    obj.placeShip('destroyer', 'horizontal', 1, 1);
    obj.receiveAttack(1, 1);
    expect(obj.board[1][1]).toBe('h');
});

test("sunk", () => {
    let obj = new Gameboard();
    obj.placeShip('destroyer', 'horizontal', 1, 1);
    obj.receiveAttack(1, 1);
    obj.receiveAttack(1, 2);
    expect(obj.ships.destroyer.sunk).toBe(true);
});