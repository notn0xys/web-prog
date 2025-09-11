


function calculate() {
    var bmis = ["Below 18.5", "18.5 - 24.9", "25.0 - 29.9", "30.0 or Greater"];
    var Interpretations = ["Underweight", "Normal" , "Overweight", "Obese"];
    const table = document.getElementById("table");
    const result = document.getElementById("result");
    const name = document.getElementById("name").value;
    const male = document.getElementById("male").checked;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    var bmi = (weight / (height * height)).toFixed(1);
    console.log(male); 

    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const trh = document.createElement("tr");
    const tdh = document.createElement("td");
    const tdh2 = document.createElement("td");
    table.innerHTML = '';
    table.appendChild(thead);
    table.appendChild(tbody);
    tdh.textContent = "BMI";
    tdh2.textContent = "Interpretation";
    trh.appendChild(tdh);
    trh.appendChild(tdh2);
    thead.appendChild(trh);
    var yellow = 0;
    var message = "";
    if (bmi < 18.5) {
        yellow = 0;
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        yellow = 1;
    }
    else if (bmi > 24.9 && bmi < 29.9) {
        yellow = 2;
    }
    else {
        yellow = 3;
    }
    for (let i = 0; i < 4; i++) {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        td1.textContent = bmis[i];
        td2.textContent = Interpretations[i];
        if (yellow == i) {
            tr.className = "your-bmi";
            message = Interpretations[i]
            
        }
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    }
    result.textContent = "BMI of " + name + " is " + bmi + " and you are " + message;
}