const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const operationButtons = document.querySelectorAll('[data-operation]');
const numberButtons = document.querySelectorAll('[data-number]');
const pointButton = document.querySelector('[data-point]')
const equalsButton = document.querySelector('[data-equals]');
let equalFlag = false;

function clearAll() {
    previousOperand.textContent = '';
    currentOperand.textContent = '0';
    equalFlag = true;
}

function deleteChar() {
    if (currentOperand.textContent == '' && previousOperand.textContent != '') {
        previousOperand.textContent = previousOperand.textContent.slice(0, -1);
        currentOperand.textContent = previousOperand.textContent;
        previousOperand.textContent = '';
    } 

    else if (currentOperand.textContent != '' && currentOperand.textContent != 'Error') {
        currentOperand.textContent = currentOperand.textContent.slice(0, -1);
    }

    if (currentOperand.textContent == '' && previousOperand.textContent == '') {
        currentOperand.textContent = '0';
    }

    if (currentOperand.textContent == 'Error') {
        currentOperand.textContent = '0';
    }

    equalFlag = true;
    
}

function insertOperation() {
    if (currentOperand.textContent != '') {
        let cLastIndex = currentOperand.textContent.length - 1;
        let cLastChar = currentOperand.textContent[cLastIndex];
        if (cLastChar == "+" || cLastChar == "-" || cLastChar == "*" || cLastChar == "/") {
            currentOperand.textContent = currentOperand.textContent.slice(0, -1);
            currentOperand.textContent += this.value;
            previousOperand.textContent = currentOperand.textContent;
            /* currentOperand.textContent = ''; */
        }
        
        else {
            if (this.value == "*" || this.value == "/") {
                previousOperand.textContent = previousOperand.textContent + currentOperand.textContent + this.value;
            } else
                previousOperand.textContent=eval(previousOperand.textContent+currentOperand.textContent)+this.value;
            currentOperand.textContent = '';
        }
    }

    if (currentOperand.textContent == '') {
        let pLastIndex = previousOperand.textContent.length - 1;
        let pLastChar = previousOperand.textContent[pLastIndex];
        if (pLastChar == "+" || pLastChar == "-" || pLastChar == "*" || pLastChar == "/") {
            previousOperand.textContent = previousOperand.textContent.slice(0, -1);
            previousOperand.textContent += this.value;
        }
    }

    if (previousOperand.textContent.includes("Infinity") || previousOperand.textContent.includes("NaN")) {
        currentOperand.textContent = "Error";
        previousOperand.textContent = '';
        equalFlag = true;
    }
}

function insertNumber() {
    if (equalFlag == true) currentOperand.textContent = '';
    currentOperand.textContent += this.textContent;
    if (currentOperand.textContent[0] == "0" && currentOperand.textContent[1] != ".")
        currentOperand.textContent = currentOperand.textContent.slice(0, 1);
    equalFlag = false;
}

function insertPoint() {
    if (equalFlag == true) currentOperand.textContent = '';
    if (!currentOperand.textContent.includes('.'))
        currentOperand.textContent += this.textContent;
    if (currentOperand.textContent[0] == ".") currentOperand.textContent = "0.";
    equalFlag = false;
}

function equal() {
    if (previousOperand.textContent != '' && currentOperand.textContent != '') {
        currentOperand.textContent = eval(previousOperand.textContent + currentOperand.textContent);
        previousOperand.textContent = '';
        equalFlag = true;
    }

    if (previousOperand.textContent != '' && currentOperand.textContent == '') {
        let pLastIndex = previousOperand.textContent.length - 1;
        let pLastChar = previousOperand.textContent[pLastIndex];
        if (pLastChar == "+" || pLastChar == "-" || pLastChar == "*" || pLastChar == "/") {
            previousOperand.textContent = previousOperand.textContent.slice(0, -1);
            currentOperand.textContent = eval(previousOperand.textContent);
            previousOperand.textContent = '';
            equalFlag = true;
        }
    }

    if (currentOperand.textContent.includes("Infinity") || currentOperand.textContent.includes("NaN")) {
        currentOperand.textContent = "Error";
    }
}

allClearButton.addEventListener('click', clearAll, false);
deleteButton.addEventListener('click', deleteChar, false);
pointButton.addEventListener('click', insertPoint, false);
equalsButton.addEventListener('click', equal, false);

numberButtons[0].addEventListener('click', insertNumber, false);
numberButtons[1].addEventListener('click', insertNumber, false);
numberButtons[2].addEventListener('click', insertNumber, false);
numberButtons[3].addEventListener('click', insertNumber, false);
numberButtons[4].addEventListener('click', insertNumber, false);
numberButtons[5].addEventListener('click', insertNumber, false);
numberButtons[6].addEventListener('click', insertNumber, false);
numberButtons[7].addEventListener('click', insertNumber, false);
numberButtons[8].addEventListener('click', insertNumber, false);
numberButtons[9].addEventListener('click', insertNumber, false);

operationButtons[0].addEventListener('click', insertOperation, false);
operationButtons[1].addEventListener('click', insertOperation, false);
operationButtons[2].addEventListener('click', insertOperation, false);
operationButtons[3].addEventListener('click', insertOperation, false);