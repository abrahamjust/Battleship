export { makeShipsDraggableAndCellsDroppable, toggleOrientation };

function makeShipsDraggableAndCellsDroppable(object) {
    let ships = document.querySelectorAll('.ship');
    let draggedShip = null;

    ships.forEach(ship => {
    ship.setAttribute('draggable', true);

    ship.addEventListener('dragstart', (e) => {
        draggedShip = ship;
        draggedShip.dataset.orientation = currentOrientation; // set current orientation
        draggedShip.classList.add('dragging');
    });

    ship.addEventListener('dragend', (e) => {
        draggedShip = null;
        ship.classList.remove('dragging');
    });
});

    // make cells droppable
    const cells = document.querySelectorAll('.colDiv');

    cells.forEach(cell => {
        cell.addEventListener('dragover', (e) => {
            e.preventDefault(); // allows drop
        });

        cell.addEventListener('drop', (e) => {
            e.preventDefault();
            if (!draggedShip) return;

            const length = parseInt(draggedShip.dataset.length);
            const vertical = draggedShip.dataset.orientation === "vertical";

            // Get row and column from cell id
            const [row, col] = cell.id.split(',').map(Number);

            // Try to place the ship in the board array
            const result = object.board.placeShip(draggedShip.id, vertical ? 'vertical' : 'horizontal', row, col);

            if (result === "invalid placement") {
                alert("Invalid placement!");
                return;
            }

            // If valid, visually place ship
            showShipOnGrid(row, col, length, vertical);

            // Remove from ships container
            draggedShip.remove();
        });
    });
}

function showShipOnGrid(row, col, length, vertical) {
    for (let i = 0; i < length; i++) {
        let r = row + (vertical ? i : 0);
        let c = col + (vertical ? 0 : i);
        const cell = document.getElementById(`${r},${c}`);
        if (cell) {
            cell.classList.add('Ship'); // You already have .colDiv.Ship in CSS
        }
    }
}


let currentOrientation = "horizontal"; // default

// Call this function on button click or key press
function toggleOrientation() {
    let orientation = document.getElementById('orientation');
    if(currentOrientation == 'horizontal') {
        orientation.innerHTML = "VERTICAL MODE";
    } else {
        orientation.innerHTML = "HORIZONTAL MODE";
    }
    currentOrientation = currentOrientation === "horizontal" ? "vertical" : "horizontal";
    
    // Optional: visually rotate the ship in the container
    const shipPreview = document.querySelector('.ship.dragging');
    if (shipPreview) {
        shipPreview.style.transform = currentOrientation === "vertical" ? "rotate(90deg)" : "rotate(0deg)";
    }
}
