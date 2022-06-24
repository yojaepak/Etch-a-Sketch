// create a 16x16 grid, changing each square when hovered.
let gridSize = 16;

const container = document.querySelector('#container');

function setGrid(gridSize) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    for (let i = 0; i < (gridSize * gridSize); i++) {
        let grid = document.createElement('div');
        grid.id = "box";
        grid.style.border = "solid";
        grid.style.borderColor = "blue";
        

        container.appendChild(grid);
    }
    container.style.gridTemplateColumns = `repeat(${gridSize}, 25px)`;

    const boxes = document.querySelectorAll('#box');

    boxes.forEach((grid) =>  {
        grid.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = "red";
        });
    });
}




const button = document.querySelector('button');

button.addEventListener('click', function(event) {
    let newSize = prompt("Please enter a new grid size between 0 and 100.");
    while (newSize < 0 || newSize > 100) {
        newSize = prompt("Number is out of bounds, please enter a number between 0 and 100.");
    }
    setGrid(newSize);
});