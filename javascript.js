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

let wholeEquation = []; 

//CREATES THE EQUATION
function createEquation(int) {

    let decimalCount = 0;
    let inputValue = numField.value; 
    let numbers = 0;
    let fixedString = "";

    for (let i = 0; i < numField.value.length; i++) {
        //ESTABLISHES A LENGTH FOR THE NUMBERS AND IS REFERENCED FROM THE NUMBER FIELD 
        numbers.length = 0; 
        numbers = inputValue;

        //CHECKS OPERATORS AND SPLITS THE NUMBERS FROM EACHOTHER WITH THE OPERATORS IN AN ARRAY, WHICH THEN GETS MADE INTO A STRING
        if (int === "+" || int === "-" || int === "*" || int === "/"|| int === "=") {
            wholeEquation.push(numbers);
            numField.value = "";
            for (let i = 0; i < wholeEquation.length; i++) {
                fixedString += wholeEquation[i];
                if (fixedString.includes("=")) {
                    return solveEquation(fixedString);
                }
            }
        } 


        //GETS DECIMAL COUNT
        if (int === ".") {
            decimalCount++; 
        }
    }

    //ALERTS THE USER THAT THEY CANT HAVE NO MORE THAN 1 DECIMAL AND DELETES THE DECIMAL THEY JUST ENTERED
    if (decimalCount >= 2) {
        alert("Error, Can't have no more than 1 Decimal");
    }  

    console.log(fixedString);
} 

//SOLVES THE EQUATION 
function solveEquation(str) { 
    let answer = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.includes("/")) {

        } else if (str.includes("*")) {

        } else if (str.includes("-")) {

        } else if(str.includes("+")) {

        }  

    }


    function divide() {

    }

    function multiply() {
        
    }

    function subtract() {
        
    }

    function add() {
        
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
    numField.value += 9;
    backSpace.textContent = "C";
    createEquation(9);
});

eight.addEventListener("click", function() {
    numField.value += 8;
    backSpace.textContent = "C";
    createEquation(8);
});

seven.addEventListener("click", function() {
    numField.value += 7;
    backSpace.textContent = "C";
    createEquation(7);
});

six.addEventListener("click", function() {
    numField.value += 6;
    backSpace.textContent = "C";
    createEquation(6);
});

five.addEventListener("click", function() {
    numField.value += 5;
    backSpace.textContent = "C";
    createEquation(5);
});

four.addEventListener("click", function() {
    numField.value += 4;
    backSpace.textContent = "C";
    createEquation(4);
});

three.addEventListener("click", function() {
    numField.value += 3;
    backSpace.textContent = "C";
    createEquation(3);
});

two.addEventListener("click", function() {
    numField.value += 2;
    backSpace.textContent = "C";
    createEquation(2);
});

one.addEventListener("click", function() {
    numField.value += 1;
    backSpace.textContent = "C";
    createEquation(1);
});

zero.addEventListener("click", function() {
    numField.value += 0;
    backSpace.textContent = "C";
    createEquation(0);
});


//Decimal button
decimal.addEventListener("click", function() {
    numField.value += ".";
    backSpace.textContent = "C";
    createEquation(".");
});


//Operator buttons
divide.addEventListener("click", function() {
    numField.value += "/";
    createEquation("/");
});

multiply.addEventListener("click", function() {
    numField.value += "*";
    createEquation("*");
});

subtract.addEventListener("click", function() {
    numField.value += "-";
    createEquation("-");
});

add.addEventListener("click", function() {
    numField.value += "+";
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
    numField.value += "=";
    createEquation("=");
});