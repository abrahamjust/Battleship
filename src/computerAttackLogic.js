export { attackLogic, computerPlaceShip };

function computerPlaceShip(computer) {
    let x = 0, y = 0;
    let orient = 0;
    let mssg = '';
    let i = 0;

    let ships = [
        'destroyer',
        'carrier',
        'battleship',
        'cruiser',
        'submarine'
    ];
    while (i < 5) {
        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            orient = Math.floor(Math.random() * 2) == 0 ? 'horizontal' : 'vertical';
            mssg = computer.board.placeShip(ships[i], orient, x, y);
        } while (mssg == 'invalid placement');
        i++;
    }
}

function attackLogic(player) { // attack player 
    let result = document.getElementById('textResult');
    result.innerText = "COMPUTER IS ATTACKING";

    let mssg = '';
    let x = 0, y = 0;
    do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        mssg = player.board.receiveAttack(x, y);
    } while (mssg == "already tried");

    let enemy = document.querySelector(`.player1[id="${x},${y}"]`);
    if (mssg == "hit") {
        enemy.classList.add("Hit");
    } else {
        enemy.classList.add("Miss");
    }
}