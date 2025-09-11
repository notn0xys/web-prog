const result = document.getElementById("result");
var mem = 0;
function calculate(keyPressed) {
    if (keyPressed == "✓x") {
        result.textContent = Math.sqrt(result.textContent);
    }
    if (keyPressed == "x²") {
         result.textContent = Math.pow(result.textContent, 2);
    }
    if (keyPressed == "1/x") {
        console.log(result.textContent);
         result.textContent = 1 / Number(result.textContent);    
         return;
    }
    if (keyPressed == "x!") {
        result.textContent = fact(result.textContent);
    }
    if (keyPressed == "sin") {
        result.textContent = Math.sin(Number(result.textContent) * Math.PI / 180);
    }

    if (keyPressed == "cos") {
        result.textContent = Math.cos(Number(result.textContent) * Math.PI / 180);
    }

    if (keyPressed == "tan") {
        result.textContent = Math.tan(Number(result.textContent) * Math.PI / 180);
    }
    if (keyPressed == "mc") {
        mem = 0;
    }
    if (keyPressed == "m+") {
        mem += Number(result.textContent);
    }
    if (keyPressed == "m-") {
        mem -= Number(result.textContent);
    }
    if (keyPressed == "mr") {
        result.textContent = mem;
    }
    if  (keyPressed >= '0' && keyPressed <= '9') {
        let textstring = result.textContent;
        let meow = textstring += keyPressed;
        console.log(meow);
        result.textContent = meow;
    }
    if (keyPressed.toUpperCase() == 'C') {
        result.textContent = "";
    }
    if (keyPressed == '<') {
        result.textContent = result.textContent.slice(0,-1);
    }
    if (keyPressed == '=') {
        try {
            result.textContent = eval(result.textContent);
        } catch (e) {
            result.textContent = "Error";
        }
    }
    if (keyPressed == '+' || keyPressed == '-' || keyPressed == '*' || keyPressed == '/') {
        let textstring = result.textContent;
        let meow = textstring += keyPressed;
        result.textContent = meow;
    }
    if (keyPressed == "π") {
if (keyPressed == "π") {
    let expr = result.textContent;
    const operators = ["+", "-", "*", "/"];
    let i = expr.length - 1;

    while (i >= 0 && !operators.includes(expr[i])) {
        i--;
    }

    if (i < 0) {
        result.textContent = Math.PI;
    } else {
        let before = expr.slice(0, i+1);
        result.textContent = before + Math.PI;
    }
}

    }

}

document.addEventListener('keydown', (event) => {
    const pressedKey = event.key;
    calculate(pressedKey);
  });
const tds = document.querySelectorAll("td");

tds.forEach(td => {
  td.addEventListener("click", () => {
    const keyPressed = td.textContent.trim(); 
    if (keyPressed != "Scientific" && td.id != "content") {
            calculate(keyPressed);
    }

  });
});
function fact(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}