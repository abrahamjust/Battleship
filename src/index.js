import "./styles.css";
import { getChoice, displayBoard, addDivEventListeners, removeListeners } from "./domHandler.js";
import { makeShipsDraggableAndCellsDroppable, toggleOrientation } from "./dragShipsLogic.js";
import { Player } from "./Player.js";
import { attackLogic, computerPlaceShip } from "./computerAttackLogic.js";

let player1, computer, player2;

async function initialize() { // use promises to wait till choice is made
    let choice = await getChoice();

    if (choice == 0) {
        player1 = new Player("player1", "human");
        computer = new Player("computer", "computer");
        player2 = 0; // no player 2

        displayBoard(player1); // plan is to display grid to place ships, then display completed board after pressing setup button
        makeShipsDraggableAndCellsDroppable(player1);
        // to add ship placing stuff here

        let setUpButton = document.getElementById('setup');
        let orientation = document.getElementById('orientation');
        orientation.addEventListener('click', () => {
            toggleOrientation();
        });

        setUpButton.addEventListener('click', () => {
            if (!player1.board.checkShipPlaced()) {
                alert("Place all ships first!");
                return;
            }
            let result = document.getElementById('textResult');
            result.innerText = "START";
            startGameComputer();
        });
    }
};

function startGameComputer() {
    let setUpButton = document.getElementById('setup');
    setUpButton.remove();
    computerPlaceShip(computer);
    console.log(player1.board.board);
    console.log(computer.board.board);
    playerAttack(computer);
}

function playerAttack(object) { // object is getting attacked (can also be another player so pass the object which is getting attacked)
    let result = document.getElementById('textResult');
    result.innerText = "YOUR TURN";
    // attack computer
    addDivEventListeners(object, () => {
        // delay computer's turn by 1 second
        removeListeners();
        setTimeout(() => {
            computerAttack();
        }, 1000); // 1000 ms = 1 second
    });

    // check if computer ships sunk, if yes put "YOU WON" and end game
    // else pass it to computer
}

function computerAttack() { // player is getting attacked, it will always be player1 so no need to pass as parameter
    let result = document.getElementById('textResult');
    result.innerText = "COMPUTER'S TURN";
    // attack player
    attackLogic(player1);
    if (player1.board.checkShipStatus()) {
        result.innerText = "COMPUTER HAS WON";
        removeListeners();
    } else {
        setTimeout(() => {
            playerAttack(computer);
        }, 1000);
    }
    // check if player ships sunk, if yes put "COMPUTER WON" and end game
}

initialize();