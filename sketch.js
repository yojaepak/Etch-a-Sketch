// create a 16x16 grid, changing each square when hovered.
let gridSize = 16;

const container = document.querySelector('#container');

for (let i = 0; i < (gridSize * gridSize); i++) {
    let grid = document.createElement('div');
    grid.id = "box";
    grid.textContent = "box";
    container.appendChild(grid);
}

container.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;