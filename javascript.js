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
    //If one of the buttons contains an operator string, it clears the field but inserts in an array
   if (operators.includes(input)) { 

        if (currentNum !== "") { 
            equationArr.push(currentNum);
            currentNum = "";
        }

    equationArr.push(input);

        /*If the user doesnt put a equals sign yet, it sums up the first 
        three elements in the array so that it shows the current answer to the user 
        but will allow them to continue their equation*/

        if (!input.includes("=")) { //FINALLLYLYYYYYY GOT ITTT
            let val1;
            let val2;
            let sum; 
           for (let i = 0; i < equationArr.length; i++) {
                val1 = equationArr[0];  
                val2 = equationArr[2];
                if (equationArr.length > 3) { 
                    if (equationArr[1] === "/") { 
                        sum = Number(val1) / Number(val2);
                    } 
                    if (equationArr[1] === "*") { 
                        sum = Number(val1) * Number(val2);
                    } 
                    if (equationArr[1] === "-") { 
                        sum = Number(val1) - Number(val2);
                    } 
                    if (equationArr[1] === "+") { 
                        sum = Number(val1) + Number(val2);
                    }

                    sum = sum.toFixed(2);

                    equationArr.splice(0, 3, sum); 

                    return numField.value = sum;
                }
           }
        } 
        //If "=", it sums up the array and clears it but stores it into a variable and shows the user the final sum
   } else if (input.includes("=")) { 
        if (currentNum !== "") { 
            equationArr.push(currentNum);
        }

        let val1;
        let val2;
        let finalSum;
        for (let i = 0; i < equationArr.length; i++) { 
            val1 = equationArr[0];
            val2 = equationArr[2];

            if (equationArr[1] === "/") { 
                finalSum = Number(val1) / Number(val2);      
            } else if (equationArr[1] === "*") { 
                finalSum = Number(val1) * Number(val2);      
            } else if (equationArr[1] === "-") { 
                finalSum = Number(val1) - Number(val2);      
            } else if (equationArr[1] === "+") { 
                finalSum = Number(val1) + Number(val2);      
            }

            finalSum = finalSum.toFixed(2);

            equationArr = [];
            currentNum = "";
        }

        return numField.value = finalSum;

    } else { 

        // takes the values and concates them into a string
        currentNum += input;
    }
    // which is then concated to the input field value
   numField.value = currentNum;
   
   //console.log(equationArr);

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