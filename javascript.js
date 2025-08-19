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
            console.log(equationArr);
        }

    equationArr.push(input);

        /*If the user doesnt put a equals sign yet, it sums up the first 
        three elements in the array so that it shows the current answer to the user 
        but will allow them to continue their equation*/

        if (!input.includes("=")) { 
            let val1;
            let val2;
            let sum; 
           for (let i = 0; i < equationArr.length; i++) {
                val1 = equationArr[0];  
                val2 = equationArr[2];

                //ERROR Check
                if (operators.includes(val1)) {
                    alert("Entered an operator with no value previously, Restarting.")
                    equationArr = [];
                    numField.value = "";
                    return;
                }
                if (operators.includes(val2)) {
                    alert("Entered an operator with no value previously, Restarting.")
                    equationArr = [];
                    numField.value = "";
                    return;
                }

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
                    
                    if (sum % 1 !== 0) { 
                        sum = sum.toFixed(2);
                    }

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

            if (finalSum % 1 !== 0) { 
                finalSum = finalSum.toFixed(2);
            }

            equationArr = [];
            currentNum = "";
        }
        numField.value = finalSum;
        return equationArr.push(finalSum);

    } else { 
        // takes the values and concates them into a string
        currentNum += input;
    }
    // which is then concated to the input field value
   numField.value = currentNum;

    //Checks for decimal count in within the text field
   let decimalCount = 0;
   for (let i = 0; i < numField.value.length; i++) { 
        if (numField.value.charAt(i) === ".") { 
            decimalCount++;
        }
        
        if (decimalCount > 1) { 
            alert("No more than one decimal in a number.");
            currentNum = currentNum.substring(0, currentNum.length - 1);
            numField.value = numField.value.substring(0, numField.value.length - 1);
        }
   }
    
   //Changes the clear button text content
   
    if (numField.value.length > 0) { 
        backSpace.textContent = "C";
    } 

    if (numField.value.length <= 0 || numField.value === "") {
        backSpace.textContent = "AC";
    }
        
    
   console.log(equationArr);
   console.log(currentNum);
   console.log(numField.value);

}


//BACKSPACE OR CLEARALL

function backSpaceHandler() {

    //If the clear button is just the clear text, it only takes one character out from the field
    if (backSpace.textContent === "C") { 
        currentNum = currentNum.substring(0, currentNum.length - 1)
        numField.value = numField.value.substring(0, numField.value.length - 1)
    //if the button text is AC, then it clears the array, numField and currentNum 
    } else if (backSpace.textContent === "AC") { 
        currentNum = "";
        equationArr = []; 
        numField.value = "";
    }


    //Checks if the length of the input field is either empty or not, then changes the clear buttons text content
    if (numField.value.length === 0) { 
        backSpace.textContent = "AC";
    } else { 
        backSpace.textContent = "C";
    }
}


//Number buttons
nine.addEventListener("click", function() {
    equation("9");
});

eight.addEventListener("click", function() {
    equation("8");
});

seven.addEventListener("click", function() {
    equation("7");
});

six.addEventListener("click", function() {
    equation("6");
});

five.addEventListener("click", function() {
    equation("5");
});

four.addEventListener("click", function() {
    equation("4");
});

three.addEventListener("click", function() {
    equation("3");
});

two.addEventListener("click", function() {
    equation("2");
});

one.addEventListener("click", function() {
    equation("1");
});

zero.addEventListener("click", function() {
    equation("0");
});


//Decimal button
decimal.addEventListener("click", function() {
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
backSpace.addEventListener("click", backSpaceHandler); 


//Equals sign button
equal.addEventListener("click", function() {
    equation("=");
});