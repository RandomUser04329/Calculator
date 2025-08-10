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
function createEquation(int) {

    let decimalCount = 0;
    let numbers = 0;
    let wholeEquation = []; 

    numField.value += int;
    numbers = numField.value;

    let index = 0;

    if (int === ".") {
        decimalCount++; 
    }

    if (decimalCount > 1) {
        alert("Error, Can't have no more than 1 Decimal");
    }  

    for (let i = 0; i < numField.value.length; i++) {

        if (int === "+" || int === "-" || int === "*" || int === "/" || int === "=") {
            wholeEquation[index] = numbers.slice(0, -1);
            index++; 
            wholeEquation[index] = int;
            numField.value = "";
            return createEquationPT2(wholeEquation); 
        } 

    }
} 

//SOLVES THE EQUATION
let finalEquation = [];
let index = 0; 
function createEquationPT2(arr) { 

    //Turns the given array into a string then is processed back into one array
    //in the loop below
    let str = "" + arr;
    let answer = 0;

    if (str.length !== 0) { 
        finalEquation[index] = str; 
        index++; 
    }

    
     const operators = ["+", "-", "*", "/"];

    for (let i = 0; i < finalEquation.length; i++) { 

        if (finalEquation[i].includes("/")) {
            division(finalEquation);
        } else if (finalEquation[i].includes("*")) { 
            multiplication(finalEquation);
        } else if (finalEquation[i].includes("-")) { 
            subtraction(finalEquation);
        } else if (finalEquation[i].includes("+")) { 
            addition(finalEquation);
        }

    }

    /* Im getting this to be like an actual arithmetric process that starts with division then to multiplication then so on..
    Rather than just solving it all at once and getting the wrong calculation, it solves it a step by step process. 
    Now it also checks for a decimal and if there is a decimal within the equation, it turns it into a Float number. if not then its a regular integer.
    

    The way it solves the equations is first figuring out whats what in the array, so theres going to be a function that figures out the length of the number in the array then scans for 
    what operator is in front/back of it, then gets those two numbers and solves the math by which operator comes first in the arithmetric process. 
    */

    function division(equation) {   
        let val1; 
        let val2; 

        for (let i = 0; i < equation.length; i++) {
            equation[i] = equation[i].replace(",", "");

            if (equation[i] === operators[i]) { 
                val1 = equation[i].slice(0, equation[i].indexOf("/"));
            }

        }

        console.log(equation);
        console.log(val1);
    }
    
    function multiplication(equation) { 

        for (let i = 0; i < equation.length; i++) {
            equation[i] = equation[i].replace(",", "");

        }
        console.log(equation);
    }

    function subtraction(equation) { 

        for (let i = 0; i < equation.length; i++) {
            equation[i] = equation[i].replace(",", "");
        }
        console.log(equation);
    }   

    function addition(equation) { 

        for (let i = 0; i < equation.length; i++) {
            equation[i] = equation[i].replace(",", "");
        }
        console.log(equation);
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