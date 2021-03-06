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
document.body.addEventListener("click", fillsquare);

let rowIndex = 0;
let colIndex = 0;

function addRow() {
  let gridRow = document.createElement("div");
  gridRow.classList.add("row");
  gridRow.id = "row" + rowIndex;
  grid.appendChild(gridRow);

  if (colIndex === 0) {
    colIndex++;
  }

  for (let i = 0; i < colIndex; i++) {
    addSquare(gridRow.id);
  }

  rowIndex++;
}

function addCol() {
  if (rowIndex === 0) {
    addRow();
  } else {
    let getRows = document.querySelectorAll(".row");
    getRows.forEach(function (row) {
      addSquare(row.id);
    });
    colIndex++;
  }
}

function addSquare(rowId) {
  let gridRow = document.querySelector(`#${rowId}`);
  let gridSquare = document.createElement("div");
  gridSquare.classList.add("grid-square");
  gridRow.appendChild(gridSquare);
  gridSquare.style.backgroundColor = "transparent";
}

function removeRow() {
  if (rowIndex > 0 && colIndex > 0) {
    grid.lastChild.remove();
    rowIndex--;

    if (rowIndex === 0) {
      removeAllGridChildren();
    }
  }
}

function removeCol() {
  if (colIndex > 0 && rowIndex > 0) {
    let getRows = document.querySelectorAll(".row");
    getRows.forEach(function (row) {
      row.lastChild.remove();
    });
    colIndex--;

    if (colIndex === 0) {
      removeAllGridChildren();
    }
  }
}

function removeAllGridChildren() {
  grid.replaceChildren();
  colIndex = 0;
  rowIndex = 0;
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
  let getColor = document.getElementById("color-picker").value;
  let gridsquare = document.querySelectorAll(".grid-square");
  for(let i=0; i<gridsquare.length; i++){
    if(gridsquare[i].style.backgroundColor === "transparent"){
      gridsquare[i].style.backgroundColor = getColor;
    }
  }
}

function fillsquare(){
  let getColor = document.getElementById("color-picker").value;
  let gridsquare = document.querySelectorAll(".grid-square");
  for(let i=0; i<gridsquare.length; i++){
    gridsquare[i].addEventListener("click", function (){
      if(gridsquare[i].style.backgroundColor != getColor){
        gridsquare[i].style.backgroundColor = getColor;
      }
    });
  }
}

function clearGrid()
{
    document.querySelectorAll(".grid-square").forEach(function(square){
        square.style.backgroundColor = "transparent";
    });
}
