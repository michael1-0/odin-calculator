const entryField = [];
let beginCalculation = false;
let beginCalculationInput = false;

const resultField = document.querySelector(".result-field");
const inputField = document.querySelector(".input-field");
const zeroButton = document.querySelector(".zero-button")
const oneButton = document.querySelector(".one-button");
const twoButton = document.querySelector(".two-button");
const threeButton = document.querySelector(".three-button");
const fourButton = document.querySelector(".four-button");
const fiveButton = document.querySelector(".five-button");
const sixButton = document.querySelector(".six-button");
const sevenButton = document.querySelector(".seven-button");
const eightButton = document.querySelector(".eight-button");
const nineButton = document.querySelector(".nine-button");
const equalsButton = document.querySelector(".equals-button");
const divisionButton = document.querySelector(".division-button");
const multiplyButton = document.querySelector(".multiply-button");
const minusButton = document.querySelector(".minus-button");
const plusButton = document.querySelector(".plus-button");
const negateButton = document.querySelector(".convert-minus-plus-button");
const decimalButton = document.querySelector(".decimal-button");
const fractionButton = document.querySelector(".fraction-button");
const squaredButton = document.querySelector(".squared-button");
const sqrtButton = document.querySelector(".sqrt-button");
const deleteButton = document.querySelector(".del-button");
const clearButton = document.querySelector(".c-button");
const clearEntryButton = document.querySelector(".ce-button");
const percentButton = document.querySelector(".percent-button")

zeroButton.addEventListener("click", () => {
    if (beginCalculation) {
        if (beginCalculationInput === false) {
            inputField.textContent = "0";
            beginCalculationInput = true;
        } else if (inputField.textContent === "0") {
            inputField.textContent = "0";
        } else {
            inputField.textContent += "0";
        }
    } else if (!beginCalculation) {
        resultField.textContent = "";
        if (inputField.textContent === "0") {
            inputField.textContent = "0";
        } else {
            inputField.textContent += "0";
        }
    } else {
        (!(inputField.textContent === "0")) ? inputField.textContent += "0" : false;
    }
});
oneButton.addEventListener("click", () => inputChecker("1"));
twoButton.addEventListener("click", () => inputChecker("2"));
threeButton.addEventListener("click", () => inputChecker("3"));
fourButton.addEventListener("click", () => inputChecker("4"));
fiveButton.addEventListener("click", () => inputChecker("5"));
sixButton.addEventListener("click", () => inputChecker("6"));
sevenButton.addEventListener("click", () => inputChecker("7"));
eightButton.addEventListener("click", () => inputChecker("8"));
nineButton.addEventListener("click", () => inputChecker("9")); 
equalsButton.addEventListener("click", calculate); 
divisionButton.addEventListener("click", () => initializeCalculation("/"));
multiplyButton.addEventListener("click", () => initializeCalculation("x"));
minusButton.addEventListener("click", () => initializeCalculation("-"));
plusButton.addEventListener("click", () => initializeCalculation("+"));
negateButton.addEventListener("click", negate);
decimalButton.addEventListener("click", enableDecimal);
fractionButton.addEventListener("click", enableFractions);
squaredButton.addEventListener("click", enableSquared);
sqrtButton.addEventListener("click", enableSqrt);
deleteButton.addEventListener("click", deleteInput)
clearButton.addEventListener("click", clearAll);
clearEntryButton.addEventListener("click", clearEntry);
percentButton.addEventListener("click", percentage);

function inputChecker(numberString) {
    if (resultField.textContent.includes("=")) {
        resultField.textContent = "";
        inputField.textContent = numberString;
    } else if (beginCalculation) {
        if (beginCalculationInput === false) {
            inputField.textContent = numberString;
            beginCalculationInput = true;
        } else if (inputField.textContent === "0") {
            inputField.textContent = numberString;
        } else {
            inputField.textContent += numberString;
        }
    } else if (inputField.textContent === "0") {
        inputField.textContent = numberString;
    } else {
        inputField.textContent += numberString;
    }
}

function initializeCalculation(operator) {
    if(!beginCalculation) {
        beginCalculation = true;
        entryField.push(inputField.textContent);
        entryField.push(operator);
        resultField.textContent = `${entryField[0]} ${entryField[1]}`;
    }
}

function calculate() {
    switch(entryField[1]) {
        case "x":
            resultField.textContent = `${entryField[0]} ${entryField[1]} ${inputField.textContent} =`;
            inputField.textContent = String(Number(entryField[0]) * Number(inputField.textContent));
            entryField.length = 0;
            beginCalculation = false;
            beginCalculationInput = false;
            break;
        case "/":
            resultField.textContent = `${entryField[0]} ${entryField[1]} ${inputField.textContent} =`;
            inputField.textContent = String(Number(entryField[0]) / Number(inputField.textContent));
            entryField.length = 0;
            beginCalculation = false;
            beginCalculationInput = false;
            break;
        case "-":
            resultField.textContent = `${entryField[0]} ${entryField[1]} ${inputField.textContent} =`;
            inputField.textContent = String(Number(entryField[0]) - Number(inputField.textContent));
            entryField.length = 0;
            beginCalculation = false;
            beginCalculationInput = false;
            break;
        case "+":
            resultField.textContent = `${entryField[0]} ${entryField[1]} ${inputField.textContent} =`;
            inputField.textContent = String(Number(entryField[0]) + Number(inputField.textContent));
            entryField.length = 0;
            beginCalculation = false;
            beginCalculationInput = false;
            break;
        default:
            break;
    }
}

function negate() {
    inputField.textContent = String(-1 * Number(inputField.textContent));
    if (beginCalculation) {
        resultField.textContent = `${entryField[0]} ${entryField[1]} negate(${Number(inputField.textContent) * -1})`
    } else {
        resultField.textContent = `negate(${inputField.textContent * -1})`;
    }
}

function enableDecimal() {
    if (!(inputField.textContent.includes("."))) {
        inputField.textContent = inputField.textContent + ".";
    }
}

function enableFractions() {
    let number = inputField.textContent;
    inputField.textContent = String(1 / Number(inputField.textContent));
    if (beginCalculation) {
        resultField.textContent = `${entryField[0]} ${entryField[1]} 1/(${number})`;
    } else {
        resultField.textContent = `1/(${number})`;
    }
}

function enableSquared() {
    let number = inputField.textContent;
    inputField.textContent = String(Number(inputField.textContent) ** 2);
    if (beginCalculation) {
        resultField.textContent = `${entryField[0]} ${entryField[1]} sqr(${number})`;
    } else { 
        resultField.textContent = `sqr(${number})`;
    }
}

function enableSqrt() {
    let number = inputField.textContent;
    inputField.textContent = String(Math.sqrt(Number(inputField.textContent)));
    if (beginCalculation) {
        resultField.textContent = `${entryField[0]} ${entryField[1]} sqrt(${number})`
    } else {
        resultField.textContent = `sqrt(${number})`;
    }
}

function percentage() {
    inputField.textContent = `${Number(inputField.textContent) / 100}`; 
    if (beginCalculation) {
        resultField.textContent = `${entryField[0]} ${entryField[1]} ${inputField.textContent}`;
    } else {
        resultField.textContent = `${inputField.textContent}`; 
    }

}

function deleteInput() {
    if (beginCalculation === true) {
        return false;
    }  else if (resultField.textContent.includes("=")) {
        resultField.textContent = "";
    } else if (inputField.textContent.length === 1) {
        inputField.textContent = "0";
    } else {
        inputField.textContent = inputField.textContent.slice(0,-1);
    }
}

function clearAll() {
    beginCalculation = false;
    beginCalculationInput = false;
    entryField.length = 0;
    resultField.textContent = "";
    inputField.textContent = "0";
}

function clearEntry() {
    if (resultField.textContent.includes("=")) {
        entryField.length = 0;
        resultField.textContent = "";
        inputField.textContent = "0";
    } else {
        inputField.textContent = "0"
    }
}
