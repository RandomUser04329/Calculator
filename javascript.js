//Input Field 
let numField = document.querySelector("#numField");

//Add, Subtract, Multiply, Divide, Decimal buttons
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const subtract = document.querySelector("#subtract");
const add = document.querySelector("#add");
const decimal = document.querySelector("#decimal");

//Clear button
const backSpace = document.querySelector("#clear");

// The Number buttons
const nine = document.querySelector("#nine");
const eight = document.querySelector("#eight");
const seven = document.querySelector("#seven");
const six = document.querySelector("#six");
const five = document.querySelector("#five");
const four = document.querySelector("#four");
const three = document.querySelector("#three");
const two = document.querySelector("#two");
const one = document.querySelector("#one");
const zero = document.querySelector("#zero");

//Equal sign button 
const equal = document.querySelector("#equals");

//CREATES THE EQUATION
let wholeEquation = [];
let wholeIndex = 0;
function createEquation(int) {
    let numbers = 0;
    let equation = []; 

    numField.value += int;
    numbers = numField.value;

    let index = 0;

    for (let i = 0; i < numField.value.length; i++) {

        if (int === "+" || int === "-" || int === "*" || int === "/" || int === "=") {
            equation[index] = numbers.slice(0, -1);
            index++; 
            equation[index] = int;
            numField.value = "";
            return storeEquation(equation)
        } 
    }

    function storeEquation(equationArr) { 
        
        let equationStr = "" + equationArr;

        if (equationStr.length !== 0) { 
            wholeEquation[wholeIndex] = equationStr; 
            wholeIndex++;
        }

        let wholeEquationStr = "";

        for (let i = 0; i < wholeEquation.length; i++) { 
            wholeEquation[i] = wholeEquation[i].replace(",", "");
            wholeEquationStr += wholeEquation[i];

            if (wholeEquationStr.includes("=")) { 
                return solveEquation(wholeEquationStr)
            }
        }
    }
} 



function solveEquation(equationStr) { 

    let divisor;
    let multiplier;
    let subtractor; 
    let adding;

    for (let i = 0; i < equationStr.length; i++) { 
        let a;
        let b; 

        divisor = equationStr.split("/");
        multiplier = equationStr.split("*");
        subtractor = equationStr.indexOf("-");
        adding = equationStr.indexOf("+");


        console.log(divisor)
        
    
    }

}



//BACKSPACE OR CLEARALL
function backSpaceHandler() {
    let curValue = numField.value; 

    if (curValue.length > 0) { 
        numField.value = curValue.substring(0, curValue.length - 1);
    }

    if (numField.value.trim() === "") {
        backSpace.textContent = "AC"
    }
}

//Number buttons
nine.addEventListener("click", function() {
    //numField.value += 9;
    backSpace.textContent = "C";
    createEquation(9);
});

eight.addEventListener("click", function() {
    //numField.value += 8;
    backSpace.textContent = "C";
    createEquation(8);
});

seven.addEventListener("click", function() {
    //numField.value += 7;
    backSpace.textContent = "C";
    createEquation(7);
});

six.addEventListener("click", function() {
    //numField.value += 6;
    backSpace.textContent = "C";
    createEquation(6);
});

five.addEventListener("click", function() {
    //numField.value += 5;
    backSpace.textContent = "C";
    createEquation(5);
});

four.addEventListener("click", function() {
    //numField.value += 4;
    backSpace.textContent = "C";
    createEquation(4);
});

three.addEventListener("click", function() {
    //numField.value += 3;
    backSpace.textContent = "C";
    createEquation(3);
});

two.addEventListener("click", function() {
    //numField.value += 2;
    backSpace.textContent = "C";
    createEquation(2);
});

one.addEventListener("click", function() {
    //numField.value += 1;
    backSpace.textContent = "C";
    createEquation(1);
});

zero.addEventListener("click", function() {
    //numField.value += 0;
    backSpace.textContent = "C";
    createEquation(0);
});


//Decimal button
decimal.addEventListener("click", function() {
    //numField.value += ".";
    backSpace.textContent = "C";
    createEquation(".");
});

//Operator buttons
divide.addEventListener("click", function() {
    //numField.value += "/";
    createEquation("/");
});

multiply.addEventListener("click", function() {
    //numField.value += "*";
    createEquation("*");
});

subtract.addEventListener("click", function() {
    //numField.value += "-";
    createEquation("-");
});

add.addEventListener("click", function() {
    //numField.value += "+";
    createEquation("+");
});

//Backspace button
backSpace.addEventListener("click", function() {
    if (backSpace.textContent === "AC") {
        backSpace.addEventListener("click", function() {
            wholeEquation = []; 
        });
    }
    backSpaceHandler();
});

//Equals sign button
equal.addEventListener("click", function() {
    //numField.value += "=";
    createEquation("=");
});