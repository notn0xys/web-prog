const days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const offset = [2, 5, 5, 1, 3, 6, 1, 4, 0, 2, 5, 0]
var count = 1; 
const container = document.getElementById("content")
const month = document.getElementById("month")
function increment() {
   if (count != 12) {
        count += 1;
        delete_row();
        genrate_month();
   }

}
function decrement() {
    if (count != 1) {
            count -= 1;
            delete_row();
            genrate_month();
    }
}
function delete_row() {
    container.innerHTML = "";
}
function genrate_month () {
    month.textContent = count + "/2025";
    let day = 1;
    let row_needed = 5;
    if (count == 3 || count == 6) {
        row_needed = 6;
    }
    for (let i = 0;  i < row_needed ; i++ ) {
        const row = container.insertRow(-1);
        for (let j = 0; j < 7; j++) {
            const cell = row.insertCell(j);
            if (i == 0 && j < offset[count - 1]) {
                cell.textContent = "";
            }
            else if (day > days_in_month[count -1 ]) {
                cell.textContent = "";
            }
            else {
                cell.textContent = day;
                day += 1;
                if (j == 6) {
                    cell.classList.add("red")
                } 
            }
        }
    }
}

genrate_month();
