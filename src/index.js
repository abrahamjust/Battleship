import "./styles.css";
import { getChoice, displayBoard, addDivEventListeners } from "./domHandler.js";
import { Player } from "./Player.js";
import { attackLogic } from "./computerAttackLogic.js";

let player1, computer, player2;

async function initialize() { // use promises to wait till choice is made
    let choice = await getChoice();

    if (choice == 0) {
        player1 = new Player("player1", "human");
        computer = new Player("computer", "computer");

        player1.board.placeShip('destroyer', 'vertical', 0, 0);
        player1.board.placeShip('carrier', 'horizontal', 0, 2);
        player1.board.placeShip('battleship', 'vertical', 1, 1);
        player1.board.placeShip('submarine', 'horizontal', 8, 0);
        player1.board.placeShip('cruiser', 'vertical', 6, 5);

        displayBoard(player1.name, player1.board.board);

        computer.board.placeShip('destroyer', 'vertical', 0, 0);
        computer.board.placeShip('carrier', 'horizontal', 0, 2);
        computer.board.placeShip('battleship', 'vertical', 1, 1);
        computer.board.placeShip('submarine', 'horizontal', 8, 0);
        computer.board.placeShip('cruiser', 'vertical', 6, 5);

        let resultsDiv = document.getElementById('results');
        let setUpButton = document.createElement('button');
        setUpButton.id = 'setup';
        setUpButton.innerText = "FINISH SETUP";
        resultsDiv.appendChild(setUpButton);

        setUpButton.addEventListener('click', () => {
            startGame('computer');
            let result = document.getElementById('textResult');
            result.innerText = "START";
            setUpButton.remove();
        });
    }
};

function startGame(mode) {
    let completed = 0;
    if (mode == 'computer') {
        while (completed != 1) {
            // player1 turn
            let result = document.getElementById('textResult');
            result.innerText = "YOUR TURN";
            addDivEventListeners(computer);// attacking player1

            //check if game over
            if (computer.board.ships.destroyer && computer.board.ships.battleship && computer.board.ships.carrier && computer.board.ships.submarine && computer.board.ships.cruiser) {
                result.innerText = "GAME OVER, YOU WIN";
                completed = 1;
            } else {
                attackLogic(player1);
                if (player1.board.ships.destroyer && player1.board.ships.battleship && player1.board.ships.cruiser && player1.board.ships.carrier && player1.board.ships.submarine) {
                    result.innerText = "COMPUTER HAS WON";
                    completed = 1;
                }
            }
        }
        let resultsDiv = document.getElementById('results');
        let setUpButton = document.createElement('button');
        setUpButton.id = 'setup';
        setUpButton.innerText = "NEW GAME";
        resultsDiv.appendChild(setUpButton);
        setUpButton.addEventListener('click', () => {
            initialize();
        });
    }
}

initialize();