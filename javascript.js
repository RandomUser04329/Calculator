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

let equationArr = [];
let currentNum = "";
const operators = ["/", "*", "-", "+"];

function equation(input) { 

   if (operators.includes(input)) { 
        if (currentNum !== "") { 
            equationArr.push(currentNum);
            currentNum = "";
        }

    equationArr.push(input);

        if (!equationArr.includes("=")) { //THIS IS RIGHT !!
            let val1;
            let val2;
            let sum; 
            for (let i = 0; i < 3; i++) {
                val1 = equationArr[0];  
                val2 = equationArr[2];
                if (equationArr[1] === "/") { 
                    sum = val1 / val2
                    equationArr[0] = sum;
                } else if (equationArr[1] === "*") { 
                    sum = val1 * val2;
                }
            }

        
            console.log(sum);
            //console.log(val1);
            //console.log(val2);
        }
        
   } else { 
        currentNum += input;
   }
   numField.value = currentNum;
   
   console.log(equationArr);

}


    /*
    FOR LATER: get the input into the first index of the array, then if an operator is detected, 
    it stores that operator in a second index, then goes to the third index and starts on the next value
    Once the user enters another operator or the equal sign, it solves the current array values and if the user
    had chose an operator, it stores the answer into the first index and does the same thing over again. If the 
    user hit the equals sign, it shows the answer to the numField field and clears the array for the next operation. 
    */



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
    backSpace.textContent = "C";
    equation("9");
});

eight.addEventListener("click", function() {
    backSpace.textContent = "C";
    equation("8");
});

seven.addEventListener("click", function() {
    backSpace.textContent = "C";
    equation("7");
});

six.addEventListener("click", function() {
    backSpace.textContent = "C";
    equation("6");
});

five.addEventListener("click", function() {
    backSpace.textContent = "C";
    equation("5");
});

four.addEventListener("click", function() {
    backSpace.textContent = "C";
    equation("4");
});

three.addEventListener("click", function() {
    backSpace.textContent = "C";
    equation("3");
});

two.addEventListener("click", function() {
    backSpace.textContent = "C";
    equation("2");
});

one.addEventListener("click", function() {
    backSpace.textContent = "C";
    equation("1");
});

zero.addEventListener("click", function() {
    backSpace.textContent = "C";
    equation("0");
});


//Decimal button
decimal.addEventListener("click", function() {
    backSpace.textContent = "C";
    equation(".");
});

//Operator buttons
divide.addEventListener("click", function() {
    equation("/");
});

multiply.addEventListener("click", function() {
    equation("*");
});

subtract.addEventListener("click", function() {
    equation("-");
});

add.addEventListener("click", function() {
    equation("+");
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
    equation("=");
});