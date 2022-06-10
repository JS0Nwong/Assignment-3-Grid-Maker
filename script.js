let addRowBtn = document.getElementById("add-row");
let addColBtn = document.getElementById("add-column");
let removeRowBtn = document.getElementById("remove-row");
let removeColBtn = document.getElementById("remove-column");
let grid = document.getElementById("grid-container");

addRowBtn.addEventListener("click", addRow);
addColBtn.addEventListener("click", addCol);
removeRowBtn.addEventListener("click", removeRow);
removeColBtn.addEventListener("click", removeCol);

let rowCount = 0;

function addRow()
{
    if(document.querySelectorAll(".row").length === 0)
    {
        let gridRow = document.createElement("div");
        gridRow.classList.add("row");
    }
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
