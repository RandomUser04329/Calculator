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
let index = 0;
function createEquation(int) {
    let numbers = 0;
    let equation = []; 

    numField.value += int;
    numbers = numField.value;

    //let index = 0;

    for (let i = 0; i < numField.value.length; i++) {

        if (int === "+" || int === "-" || int === "*" || int === "/" || int === "=") {
            equation[index] = numbers.slice(0, -1);
            index++; 
            equation[index] = int;
            numField.value = "";
            //return createEquationPT2(equation); 
            //return storeEquation(equation)
        } 
    }

    console.log(equation);

    function storeEquation(equationArr) { 
        
        let equationStr = "" + equationArr;

        if (equationStr.length !== 0) { 
            wholeEquation[wholeIndex] = equationStr; 
            wholeIndex++;
        }

       // console.log(wholeEquation);
    }
} 


/*
//SOLVES THE EQUATION
let finalEquation = [];
let index = 0; 


function createEquationPT2(arr) { 

    //Turns the given array into a string then is processed back into one array
    //in the loop below
    let str = "" + arr;
    let answer = 0;

    //The final Answer from all the combined steps 
    let finalAnswer = 0; 

    if (str.length !== 0) { 
        finalEquation[index] = str; 
        index++; 
    }
  
    let equalSign;
    let finalEquationArr;

    for (let i = 0; i < finalEquation.length; i++) { 
        finalEquation[i] = finalEquation[i].replace(",", "");
        finalEquationArr = finalEquation[i];
        equalSign = finalEquationArr.indexOf("=");

        
        if (finalEquationArr.includes("/")) {
            division(finalEquation);
        } else if (finalEquationArr.includes("*")) { 
            multiplication(finalEquation);
        } else if (finalEquationArr.includes("-")) { 
            subtraction(finalEquation);
        } else if (finalEquationArr.includes("+")) { 
            addition(finalEquation);
        }
        
    }

    console.log(finalEquation);

    
   
   
    function division(equation) {   
        //declares two values to mess with        
        let val1 = 0;
        let val2 = 0;
        answer = 0; 

        // The count of how many times "/" pops up in the equation array
        let divisorCount = 0; 

        for (let i = 0; i < equation.length; i++) {
            let equationArr = equation[i];
            let divisor = equationArr.indexOf("/");
            let equalSign = equationArr.indexOf("=");
            
            if (equationArr.includes("/")) { 
                divisorCount++; 
            }

            if (divisor != -1) { 
                val1 = equationArr.substring(0, divisor);
                
            }

            if (equalSign != -1) { 
                val2 = equationArr.substring(0, equalSign);
            }

            answer = val1 / val2;

            if (answer % 1 !== 0) {
                answer = answer.toFixed(2); 
            }
            
        }

        return answer;

    }

    
    function multiplication(equation) { 
        let val1 = 0; 
        let val2 = 0; 
        answer = 0;

        // The count of how many times "*" pops up in the equation array
        let multplyCount = 0;

        for (let i = 0; i < equation.length; i++) {
            equation[i] = equation[i].replace(",", "");
            let equationArr= equation[i];
            let multiplier = equationArr.indexOf("*");
            let equalSign = equationArr.indexOf("=");
            
            if (equationArr.includes("*"))  { 
                multplyCount++;
            }

            if (multiplier != -1) {
                val1 = equationArr.substring(0, multiplier);
            }

            if (equalSign != -1) { 
                val2 = equationArr.substring(0, equalSign);
            }

            answer = val1 * val2;

            if (answer % 1 !== 0) {
                answer = answer.toFixed(2); 
            }
        }

        console.log(equation);
        console.log(val1);
        console.log(val2);

        
        return answer;
    }

    function subtraction(equation) { 
        let val1 = 0;
        let val2 = 0;
        answer = 0;

        let subtractCount = 0; 

        for (let i = 0; i < equation.length; i++) {
            equation[i] = equation[i].replace(",", ""); 
            let equationArr = equation[i]; 
            let subtractor = equationArr.indexOf("-");
            let equalSign = equationArr.indexOf("=");

            if (equationArr.includes("-")) {
                subtractCount++;
            }

            if (subtractor != -1) { 
                val1 = equationArr.substring(0, subtractor);
            }

            if (equalSign != -1) {
                val2 = equationArr.substring(0, equalSign);
            }

            answer = val1 - val2;

            if (answer % 1 !== 0) {
                answer = answer.toFixed(2);
            }

        }

        console.log(equation);
        console.log(val1);
        console.log(val2);
        console.log(answer);

        return answer;
       
    }   

    function addition(equation) { 
        let val1 = 0;
        let val2 = 0;
        answer = 0; 

        let addCount = 0;

        for (let i = 0; i < equation.length; i++) {
            equation[i] = equation[i].replace(",", "");
            let equationArr = equation[i];
            let adding = equationArr.indexOf("+");
            let equalSign = equationArr.indexOf("=");

            if (equationArr.includes("+")) { 
                addCount++;
            }

            if (adding != -1) {
                val1 = equationArr.substring(0, adding);
            }

            if (equalSign != -1) {
                val2 = equationArr.substring(0, equalSign);
            }

            answer = val1 + val2;

            if (answer % 1 !== 0) { 
                answer = answer.toFixed(2);
            }

        }
        
        console.log(equation);
        console.log(val1);
        console.log(val2);
        console.log(answer);  

        return answer; 
    }
    

    console.log(answer);
    
}
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