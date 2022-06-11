let addRowBtn = document.getElementById("add-row");
let addColBtn = document.getElementById("add-column");
let removeRowBtn = document.getElementById("remove-row");
let removeColBtn = document.getElementById("remove-column");
let grid = document.getElementById("grid-container");
let fill = document.getElementById("fill-grid");
let fillUncolored = document.getElementById("fill-uncolored");
let clear = document.getElementById("clear-grid");

addRowBtn.addEventListener("click", addRow);
addColBtn.addEventListener("click", addCol);
removeRowBtn.addEventListener("click", removeRow);
removeColBtn.addEventListener("click", removeCol);
fill.addEventListener("click", fillGrid);
fillUncolored.addEventListener("click", fillUncoloredGrid);
clear.addEventListener("click", clearGrid);

let rowCount = 0;

function addRow()
{
    let gridRow = document.createElement("div");
    gridRow.classList.add("row");
    gridRow.id = "row" + rowCount;
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridRow.appendChild(gridSquare);
    grid.appendChild(gridRow);
    rowCount++;
}

function addCol()
{
    if(rowCount === 0)
    {
        addRow();
    }
    else
    {
        let getRows = document.querySelectorAll(".row");
        getRows.forEach(function(row){
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            row.appendChild(gridSquare);
        })
    }
}

//gets the last row in the div and removes it
function removeRow()
{
    grid.lastChild.remove();
}

//loops through all the rows and removes the last child
function removeCol()
{
    let getRows = document.querySelectorAll(".row");
    getRows.forEach(function(row){
        row.lastChild.remove();
    })
}

function fillGrid()
{
    let getColor = document.getElementById("color-picker").value;
    document.querySelectorAll(".grid-square").forEach(function(square){
        square.style.backgroundColor = getColor;
    });
}

function fillUncoloredGrid()
{

}

function clearGrid()
{
    document.querySelectorAll(".grid-square").forEach(function(square){
        square.style.backgroundColor = "transparent";
    });
}