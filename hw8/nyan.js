const result = document.getElementById("result");
function calculate(keyPressed) {
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
        operators = ['+' , '-', '*', '/'];
        for (let i in operators) {
            let string_arr = result.textContent.split(operators[i]);
            console.log(string_arr);
            console.log(operators[i]);
            if (string_arr.length == 2) {
                result.textContent = eval(string_arr[0] + operators[i] + string_arr[1]);
            }
        }
    }
    if (keyPressed == '+' || keyPressed == '-' || keyPressed == '*' || keyPressed == '/') {
        let textstring = result.textContent;
        let meow = textstring += keyPressed;
        result.textContent = meow;
    }
}

document.addEventListener('keydown', (event) => {
    const pressedKey = event.key;
    calculate(pressedKey);
  });

