const time1 = {
    time: 900,
    word: "Wake up"
};
const time2 = {
    time: 1105,
    word: "meow"
}
const time3 = {
    time: 1530,
word: "meow2"
}
const time_p = document.getElementById("time");
var min = 0;
var hr = 0;
var alert_time = [time1,time2,time3];
const data_cont = document.getElementById("body-cont");
setInterval(update_time, 10);
function update_time() { // add 1 sec
    min += 1;
    if (min == 60) {
        min = 0;
        hr += 1;
    }
    if (hr == 24) {
        hr = 0 ;
    }
    console.log("one time");

    time_p.textContent = "Current time (1000x) Faster " + hr  + " : " + min;
    for (let i = 0; i < alert_time.length ; i++) {
        if (alert_time[i].time == (hr * 100) + min) {
            alert(alert_time[i].word);
        }
    }
}
function pop_table() {
    const edit = document.createElement("button");
    edit.onclick = edit_mode;
    edit.textContent = "Edit";
    const container = document.getElementById("meow-con");
    const newTable = document.createElement("table");
    newTable.id = "display";
    newTable.innerHTML = "<thead><th>Time</th><th>Alert Word</th></thead>";
    for (let i = 0; i < alert_time.length; i++) {
        const newRow = document.createElement("tr");
        const newTime = document.createElement("td");
        const newAlert = document.createElement("td");
        newTime.textContent = alert_time[i].time;
        newAlert.textContent = alert_time[i].word;
        newRow.appendChild(newTime);
        newRow.appendChild(newAlert);
        newTable.appendChild(newRow);
    }
    container.appendChild(edit);
    container.appendChild(newTable);
}

function add_edit_tabel() {
    const container = document.getElementById("meow-con");
    const done = document.createElement("button");
    done.onclick = donebtn;
    done.textContent = "Done";
    const addRow = document.createElement("button");
    addRow.onclick = addRowfunc;
    addRow.textContent = "Add row";
    const newTable = document.createElement("table");
    newTable.id = "edit";
    for (let i = 0; i < alert_time.length; i++) {
        const newRow = document.createElement("tr");
        const newTime = document.createElement("td");
        const newAlert = document.createElement("td");
        const removeRow = document.createElement("td");
        const input = document.createElement("input");
        input.type = "time";
        input.value = (Math.floor(alert_time[i].time / 100)).toString().padStart(2,'0') + ":" + (alert_time[i].time % 100).toString().padStart(2,'0');
        console.log((Math.floor(alert_time[i].time / 100)).toString().padStart(2,'0') + ":" + (alert_time[i].time % 100).toString().padStart(2,'0'));
        const alert = document.createElement("input");
        alert.type = "text";
        alert.value = alert_time[i].word;
        newTime.appendChild(input);
        newAlert.appendChild(alert);
        const remove = document.createElement("button");
        remove.id = i;
        remove.onclick = () => remove_row(remove.id);
        remove.textContent = "Remove";
        removeRow.appendChild(remove);
        newRow.appendChild(newTime);
        newRow.appendChild(newAlert);
        newRow.appendChild(removeRow);
        newTable.appendChild(newRow);
    }
    container.appendChild(done);
    container.appendChild(newTable);
    container.appendChild(addRow);
}
function addRowfunc() {
    const table = document.getElementById("edit");
    const newRow = document.createElement("tr");
    const newTime = document.createElement("td");
    const newAlert = document.createElement("td");
    const removeRow = document.createElement("td");
    const remove = document.createElement("button");
    const input = document.createElement("input");
    input.type = "time";
    const alert = document.createElement("input");
    alert.type = "text";
    newTime.appendChild(input);
    newAlert.appendChild(alert);
    const lenght = table.rows.length;
    remove.id = lenght;
    remove.onclick = () => remove_row(remove.id);
    remove.textContent = "Remove";
    removeRow.appendChild(remove);
    newRow.appendChild(newTime);
    newRow.appendChild(newAlert);
    newRow.appendChild(removeRow);
    table.appendChild(newRow);
}
function remove_row(id) {
    const table = document.getElementById("edit");
    table.deleteRow(id);
}
function edit_mode() {
    const container = document.getElementById("meow-con");
    container.innerHTML = "";
    add_edit_tabel();

} 

function donebtn() {
    const table = document.getElementById("edit");
    alert_time = [];
    for (let i = 0; i < table.rows.length ; i++) {
        const row = table.rows[i];
        var time1 = 0;
        var word1 = "default";
        for (let j = 0; j < row.cells.length - 1; j++) {
            const cell = row.cells[j];
            const input = cell.querySelector("input");
            let newString = input.value.replace(/:/g, "");
            console.log(newString);
            if (j == 0) {
                time1 = parseInt(newString);
            }
            if (j == 1) {
                word1 = newString;
            }
        }
        const timeObj = {
            time: time1,
            word: word1
        }
        console.log(timeObj);
        alert_time.push(timeObj)
        
    }
    const container = document.getElementById("meow-con");
    container.innerHTML = "";
    pop_table();
}
pop_table();