document.addEventListener("DOMContentLoaded", () => {
    let sideWidth = 16;
    const body = document.querySelector("body");

    function createGrid() {
        const divGridContainer = document.createElement("div");
        divGridContainer.classList.add("gridContainer");
        body.appendChild(divGridContainer);
        for(let i = 0; i < (sideWidth * sideWidth) ; i++) {
            let currCell = document.createElement("div");
            currCell.classList.add("gridCell");
            currCell.addEventListener("mouseover", colorCell);
            currCell.style.flexGrow = "1";
            currCell.style.flexShrink = "1";
            currCell.style.flexBasis = `${1000/(sideWidth + 1)}px`;
            //flex: 1 1 calc((1000px)/ 17);

            divGridContainer.appendChild(currCell);
        }
    }

    function colorCell(e) {
        e.target.classList.add("coloredGridCell");
    }

    function resetGrid(e) {
        const inputSideWidthNumber = document.querySelector("#sideWidth");
        let newSideWidth = parseFloat(inputSideWidthNumber.value);
        if(newSideWidth < 1 || newSideWidth > 100) {
            //Illegal values!
            inputSideWidthNumber.value = sideWidth;
            alert("Please enter a valid side width (1-100)!");
            return;
        } 
        sideWidth = newSideWidth;
        //Delete the current container.
        const divGridContainer = document.querySelector("div.gridContainer");
        divGridContainer.remove();
        createGrid();
    }

    function main() {
        createGrid();
        const submitButton = document.querySelector("#submitSideWidth");
        submitButton.addEventListener("click", resetGrid);
    }

    main();
})