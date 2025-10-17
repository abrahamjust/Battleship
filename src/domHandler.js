export { getChoice };

let dialog = document.getElementById("ChoiceDialog");
let playerChoiceButton = document.getElementById("playerChoice");
let computerChoiceButton = document.getElementById("computerChoice");
let choice = 0; // 0 for computer, 1 for player v player

function getChoice() {
    dialog.showModal();

    playerChoiceButton.addEventListener('click', () => {
        choice = 1;
        dialog.close();
    });

    computerChoiceButton.addEventListener('click', () => {
        choice = 0;
        dialog.close();
    });
}
