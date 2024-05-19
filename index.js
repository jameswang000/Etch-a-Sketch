document.addEventListener("DOMContentLoaded", () => {
    const GRID_WIDTH = 16;
    const GRID_HEIGHT = 16;
    const body = document.querySelector("body");

    function createGrid() {
        const divGridContainer = document.createElement("div");
        divGridContainer.classList.add("gridContainer");
        body.appendChild(divGridContainer);
        for(let i = 0; i < (GRID_WIDTH * GRID_HEIGHT) ; i++) {
            let currCell = document.createElement("div");
            currCell.classList.add("gridCell");
            divGridContainer.appendChild(currCell);
        }
    }

    function main() {
        createGrid();
    }

    main();
})