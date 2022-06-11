let addRowBtn = document.getElementById("add-row");
let addColBtn = document.getElementById("add-column");
let removeRowBtn = document.getElementById("remove-row");
let removeColBtn = document.getElementById("remove-column");
let grid = document.getElementById("grid-container");

addRowBtn.addEventListener("click", addRow);
addColBtn.addEventListener("click", addCol);
removeRowBtn.addEventListener("click", removeRow);
removeColBtn.addEventListener("click", removeCol);

let rowIndex = 0;
let colIndex = 0;

function addRow() {
  let gridRow = document.createElement("div");
  gridRow.classList.add("row");
  gridRow.id = "row" + rowIndex;
  grid.appendChild(gridRow);
  for (let i = 0; i <= colIndex; i++) {
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
}

function removeRow() {
  if (rowIndex > 0) {
    grid.lastChild.remove();
    rowIndex--;
  }
}

function removeCol() {
  if (colIndex > 0) {
    let getRows = document.querySelectorAll(".row");
    getRows.forEach(function (row) {
      row.lastChild.remove();
    });
    colIndex--;
  }
}
