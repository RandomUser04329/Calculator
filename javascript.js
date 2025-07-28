//Input Field 
const numField = document.querySelector("#numField");

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

let storedEquation = [];

function createEquation(int) {
    let operator; 

    if (int === "+" || int === "-" || int === "*" || int === "/") {
        operator = int;
    } else { 
        numField.value += int;
    }

    let values = numField.value;
    let equation = []; 
    let index = 0;

    if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
        index++; 
        storedEquation[index] = [equation];
        values = "";
    }

    equation[index] = [values];
    storedEquation[index] = [equation];


    for (let i = 0; i < numField.value.length; i++) {
        console.log(equation); 
        console.log(storedEquation);
    }


}


//Number buttons
nine.addEventListener("click", function() {
    createEquation(9);
});

eight.addEventListener("click", function() {
    createEquation(8);
});

seven.addEventListener("click", function() {
    createEquation(7);
});

six.addEventListener("click", function() {
    createEquation(6);
});

five.addEventListener("click", function() {
    createEquation(5);
});

four.addEventListener("click", function() {
    createEquation(4);
});

three.addEventListener("click", function() {
    createEquation(3);
});

two.addEventListener("click", function() {
    createEquation(2);
});

one.addEventListener("click", function() {
    createEquation(1);
});

zero.addEventListener("click", function() {
    createEquation(0);
});


//Decimal button
decimal.addEventListener("click", function() {
    createEquation(".");
});


//Operator buttons
divide.addEventListener("click", function() {
    createEquation("/");
});

multiply.addEventListener("click", function() {
    createEquation("*");
});

subtract.addEventListener("click", function() {
    createEquation("-");
});

add.addEventListener("click", function() {
    createEquation("+");
});

//Backspace button
backSpace.addEventListener("click", function() {

});

//Equals sign button
equal.addEventListener("click", function() {

});