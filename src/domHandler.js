export { getChoice, displayBoard, addDivEventListeners };

let dialog = document.getElementById("ChoiceDialog");
let playerChoiceButton = document.getElementById("playerChoice");
let computerChoiceButton = document.getElementById("computerChoice");

function getChoice() {
    dialog.showModal();

    return new Promise((resolve) => {
        playerChoiceButton.addEventListener('click', () => {
            dialog.close();
            resolve(1);
        });

        computerChoiceButton.addEventListener('click', () => {
            dialog.close();
            resolve(0);
        });
    });
}

function displayBoard(name, myBoardArray) {

    // filling myBoard
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

    // filling enemyBoard
    let enemyBoard = document.querySelector('#enemyBoard');
    let enemyGrid = enemyBoard.querySelector('.gridBoard');
    for (let i = 0; i < 10; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.className = 'rowDiv';
        for (let j = 0; j < 10; j++) {
            let colDiv = document.createElement('div');
            colDiv.className = 'colDiv';
            colDiv.classList.add('enemy');
            colDiv.id = `${i},${j}`;
            rowDiv.appendChild(colDiv);
        }
        enemyGrid.appendChild(rowDiv);
    }
}

function addDivEventListeners(object) {
    let divs = document.querySelectorAll('.enemy');
    let x = 0, y = 0;
    divs.forEach(div => {
        div.addEventListener('click', () => {
            [x, y] = div.id.split(",").map(Number);
            console.log(x);
            let mssg = object.board.receiveAttack(x, y);
            if (mssg == 'hit') {
                div.classList.add('Hit');
            } else if (mssg == 'miss') {
                div.classList.add('Miss');
            }
        });
    });
}