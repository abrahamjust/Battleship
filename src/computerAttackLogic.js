export { attackLogic };

function attackLogic(player) { // attack player 
    let result = document.getElementById('textResult');
    result.innerText = "COMPUTER IS ATTACKING";

    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);

    let mssg = player.board.receiveAttack(x, y);
    while (mssg != "already tried") {
        mssg = player.board.receiveAttack();
    }

    let enemy = document.querySelector('#x,y.player1');
    if(mssg == "hit") {
        enemy.classList.add = "Hit";
    } else {
        enemy.classList.add = "Miss";
    }
}