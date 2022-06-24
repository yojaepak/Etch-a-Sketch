// create a 16x16 grid, changing each square when hovered.
let gridSize = 16;

const container = document.querySelector('#container');

for (let i = 0; i < gridSize; i++) {
    let grid = document.createElement('div');
    container.appendChild(grid);
}
