function calculateBMI() {
    const container = document.getElementById("result-space");
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const bmi = weight / ((height / 100) ** 2)
    const result = document.getElementById("moew");
    const weight_class = document.getElementById("nya");
    result.textContent = "With your weight of " +weight + " And your height of " + height + " Your BMI is " +bmi;
    if (bmi < 18.5) {
        weight_class.textContent = "You are Underweight";
    }
    else if (bmi < 24.9) {
        weight_class.textContent = "You are Normal Weight";
    }
    else if (bmi < 24.9) {
        weight_class.textContent = "You are OverWeight";
    }
    else {
        weight_class.textContent = "You are Obese";
    }
}