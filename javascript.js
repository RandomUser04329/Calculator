
const numField = document.querySelector("#numField");

//Add, Subtract, Multiply, Divide, Decimal buttons
const divide = document.querySelector("#divide");
const multiply = document.querySelector("multiply");
const subtract = document.querySelector("#subtract");
const add = document.querySelector("#add");
const decimal = document.querySelector("#decimal");

//Clear button
const clear = document.querySelector("#clear");

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


function inputField(num) {

    let btnValue;

    if (num === "+" || num === "-" || num === "x" || num === "/") {
        btnValue != num;
        return secondInput(num, numField.value);
    } else if (num === ".") {
        btnValue = num; 
    } else { 
        btnValue = parseInt(num);
    }

     numField.value += btnValue;

     console.log(numField.value);

    clear.addEventListener("click", function () {
        numField.value = "";
        return;
    })
}

function secondInput(symbol, firstNumToSolve) {

    if (firstNumToSolve.includes(".")) {
        firstNumToSolve = parseInt(firstNumToSolve.value);
    }

    
}


// NUMBER BUTTONS
nine.addEventListener("click", function() {
    inputField(9);
});

eight.addEventListener("click", function() {
    inputField(8);
});

seven.addEventListener("click", function() {
    inputField(7);
});

six.addEventListener("click", function() {
    inputField(6);
});

five.addEventListener("click", function() {
    inputField(5);
});

four.addEventListener("click", function() {
    inputField(4);
});

three.addEventListener("click", function() {
    inputField(3);
});

two.addEventListener("click", function() {
    inputField(2);
});

one.addEventListener("click", function() {
    inputField(1);
});

zero.addEventListener("click", function() {
    inputField(0);
});

decimal.addEventListener("click", function() {
    inputField(".");
});

//ARITHMETRIC BUTTONS
add.addEventListener("click", function() {

});

subtract.addEventListener("click", function() {

});

multiply.addEventListener("click", function() {

});

divide.addEventListener("click", function() {

});


