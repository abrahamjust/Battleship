export { attackLogic };

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