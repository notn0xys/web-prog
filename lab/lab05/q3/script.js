const json = {
    Header: [],
    Body: [],
    Footer: []
}
function convert_json() {
    const table = document.getElementById("originalTable");
    console.log(table); 

    const thead = table.querySelector("thead");
    const header = thead.rows[0];
    for (let i = 0 ; i < header.cells.length; i++) {
        const cell = header.cells[i];
        json.Header.push(cell.textContent.trim());
    }
    
    const tbody = table.querySelector("tbody");
    if (tbody) {
        json.Body = rowsToObjects(tbody.rows);
    }

    const tfoot = table.querySelector("tfoot");
    if (tfoot) {
        json.Footer = rowsToObjects(tfoot.rows);
    }
    console.log(json);
    const text_area = document.getElementById("displayTextarea");
    text_area.textContent = JSON.stringify(json);
    
}
function footerToObjects(rows) {

}
function rowsToObjects(rows) {
    const arr = [];
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const rowData = {};
        for (let j = 0; j < row.cells.length; j++) {
            const cell = row.cells[j];
            const key = "Column" + (j + 1);
            const input = cell.querySelector("input");
            rowData[key] = input ? input.value : cell.textContent.trim();
        }
        arr.push(rowData);
    }
    return arr;
}
convert_json()
