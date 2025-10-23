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
        player2 = 0; // no player 2

        displayBoard(player1); // plan is to display grid to place ships, then display completed board after pressing setup button

        // to add ship placing stuff here

        let setUpButton = document.getElementById('setup');
        setUpButton.addEventListener('click', () => { // will run once per game only
            let result = document.getElementById('textResult');
            result.innerText = "START";
            startGameComputer();
        }, {once: true}); 


    }
};

function startGameComputer() {
    
}

function playerAttack(object) { // object is getting attacked
    
}

initialize();