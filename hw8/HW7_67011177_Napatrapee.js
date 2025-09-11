function loadtranscript(data){
    for ( i in data) {
        if (i == "credit") {
            continue
        }
        document.getElementById(i).value = data[i];
    }
    const tbody = document.getElementById("content_body");
    tbody.innerHTML = "";
    let gpa = 0;
    let total_credits = 0;
    let total_points = 0;
    for (year in data["credit"]) {
        const yeardata = data["credit"][year];
        for (semester in yeardata) {
            const semRow = document.createElement("tr");
            const sem = document.createElement("td");
            const filler1 = document.createElement("td");
            const filler2 = document.createElement("td");
            sem.style = "text-decoration: underline;";
            sem.textContent = semester + ", " + year;
            semRow.appendChild(sem);
            semRow.appendChild(filler1);
            semRow.appendChild(filler2);
            tbody.appendChild(semRow);
            const semesterData = data["credit"][year][semester];
            let semesterCredits = 0;
            let semesterPoints = 0;
            for (subject in semesterData) {
                const course_row = document.createElement("tr");
                const course_name = document.createElement("td");
                const course_credit = document.createElement("td");
                const course_grade = document.createElement("td");
                const subjectData = semesterData[subject];
                course_name.textContent = subjectData.subject_id + " "+subjectData.name
                course_name.style = "text-align: left;"
                course_credit.textContent = subjectData.credit
                course_grade.textContent = subjectData.grade
                course_row.appendChild(course_name);
                course_row.appendChild(course_credit);
                course_row.appendChild(course_grade);
                tbody.appendChild(course_row);
                const credit = parseFloat(subjectData.credit);
                const grade = subjectData.grade.toUpperCase();
                let point = 0;
                switch (grade) {
                    case "A": point = 4.0; break;
                    case "B+": point = 3.5; break;
                    case "B": point = 3.0; break;
                    case "C+": point = 2.5; break;
                    case "C": point = 2.0; break;
                    case "D+": point = 1.5; break;
                    case "D": point = 1.0; break;
                    default: point = 0;
                }
                if (grade == "S" || grade == "X") {
                    continue;
                }
                semesterCredits += credit;
                semesterPoints += credit * point; 
                total_credits += credit;
                total_points += credit * point;
            }
            const gpsRow = document.createElement("tr");
            const gps_gpa = document.createElement("td");
            gps_gpa.textContent = "GPS " +  (semesterPoints / semesterCredits).toFixed(2) + "   GPA " + (total_points/total_credits).toFixed(2);
            gpsRow.appendChild(gps_gpa);
            const filler3 = document.createElement("td");
            const filler4 = document.createElement("td");
            gpsRow.appendChild(filler3);
            gpsRow.appendChild(filler4);
            tbody.appendChild(gpsRow);
        }
    }


}

const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
  const data = JSON.parse(e.target.result);
  loadtranscript(data);
  };
reader.readAsText(file);
});
