export { getChoice, displayBoard, addDivEventListeners };

let dialog = document.getElementById("ChoiceDialog");
let playerChoiceButton = document.getElementById("playerChoice");
let computerChoiceButton = document.getElementById("computerChoice");

function getChoice() {
    dialog.showModal();

    return new Promise((resolve) => {
        playerChoiceButton.addEventListener('click', () => {
            dialog.close();
            resolve(1); // one if player v player
        });

        computerChoiceButton.addEventListener('click', () => {
            dialog.close();
            resolve(0); // zero if player v computer
        });
    });
}

function displayBoard(object) {

    // filling myBoard
    let name = object.name;
    let myBoardArray = object.board.board;

    let myBoard = document.querySelector('#myBoard');
    let myGrid = myBoard.querySelector('.gridBoard');
    for (let i = 0; i < 10; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.className = 'rowDiv';
        for (let j = 0; j < 10; j++) {
            let colDiv = document.createElement('div');
            colDiv.className = 'colDiv';
            colDiv.classList.add(name);
            colDiv.id = `${i},${j}`;
            if (myBoardArray[i][j] != 0) {
                colDiv.classList.add('Ship');
            }
            rowDiv.appendChild(colDiv);
        }
        myGrid.appendChild(rowDiv);
    }

    // filling enemyBoard (board we click to attack)
    let enemyBoard = document.querySelector('#enemyBoard');
    let enemyGrid = enemyBoard.querySelector('.gridBoard');
    for (let i = 0; i < 10; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.className = 'rowDiv';
        for (let j = 0; j < 10; j++) {
            let colDiv = document.createElement('div');
            colDiv.className = 'colDiv';
            colDiv.classList.add('enemy');
            colDiv.classList.add(name);
            colDiv.id = `${i},${j}`;
            rowDiv.appendChild(colDiv);
        }
        enemyGrid.appendChild(rowDiv);
    }
}

function addDivEventListeners(object, callback) {
    let divs = document.querySelectorAll('.enemy');
    divs.forEach(div => {
        if (!div._listener) { // only add once
            div._listener = () => handleClick(div, object, callback);
            div.addEventListener('click', div._listener);
        }
    });
}


function handleClick(div, object, callback) {
    let [x, y] = div.id.split(",").map(Number);

    // ignore if already clicked
    if (div.classList.contains("Hit") || div.classList.contains("Miss")) return;

    let mssg = object.board.receiveAttack(x, y);
    if (mssg == 'hit') {
        div.classList.add('Hit');
    } else if (mssg == 'miss') {
        div.classList.add('Miss');
    }

    if (object.board.checkShipStatus()) { // if true enemy ships all sunk
        let result = document.getElementById('textResult');
        result.innerText = "YOU HAVE WON";
        removeListeners();
        return;
    } else {
        if (callback) callback();
    }
}


function removeListeners() {
    let divs = document.querySelectorAll('.enemy');
    divs.forEach(div => {
        div.replaceWith(div.cloneNode(true)); // removes all listeners
    });
}