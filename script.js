let addRowBtn = document.getElementById("add-row");
let addColBtn = document.getElementById("add-column");
let removeRowBtn = document.getElementById("remove-row");
let removeColBtn = document.getElementById("remove-column");
let table = document.getElementById("grid");

addRowBtn.addEventListener("click", addRow);

function addRow()
{
    let row = table.insertRow(table.rows.length);
    for (let i = 0; i < table.rows[0].cells.length; i++)
    {
        let cell = row.insertCell(i);
        cell.innerHTML = i;
    }
}