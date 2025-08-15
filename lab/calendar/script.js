function genCalendar() {
    const container = document.getElementById("table-con");
    let id = 1;
    for (let i = 0; i < 7 ; i++ ){ // each row
        const row = document.createElement("div");
        row.className = "table-element";
        if (i == 0) {
            const p = document.createElement("p");
            p.textContent = "August 2025";
            row.appendChild(p);
        }
        else if (i == 1) {
            const days = ["Mo", "Tu" , "We" , "Th" , "Fr", "Sa", "Su"];
            for (let i = 0; i < 7; i++) {
                const p = document.createElement("p");
                p.textContent = days[i];
                row.appendChild(p);
            } 
        }
        else if (i == 2) {
            for (let i = 0; i < 7; i++) {
                const p = document.createElement("p");
                if (i > 3) {
                    p.textContent = id;
                    id += 1;
                }
                row.appendChild(p);
            } 
        }
        else {
            for (let i = 0; i < 7; i++) {
                const p = document.createElement("p");
                p.textContent = id;
                id += 1;
                row.appendChild(p);
            } 
        }
        container.appendChild(row);
    }

};

genCalendar();