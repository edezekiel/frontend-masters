
const buttonsContainer = document.querySelector('.buttons-container')

buttonsContainer.addEventListener('click', (event) => calculatorClick(event));

const calculator = {
  firstOperand: '0',
  secondOperand: '0',
  currentOperation: null
};

// Initialize stdout
setStdout(calculator.firstOperand);

function getStdout() {
  const stdout = document.querySelector('.calculator-stdout');
  const stdoutValue = stdout.innerText;
  return stdoutValue;
}

function setStdout(num) {
  const stdout = document.querySelector('.calculator-stdout');
  stdout.innerText = num;
}

function updateCalculatorValue(num) {
  !calculator.currentOperation ? buildOperand(num) : buildOperand(num, false);
}

function buildOperand(num, first = true) {
  if (first) {
    if (num !== '0' && calculator.firstOperand !== '0') {
      calculator.firstOperand = calculator.firstOperand.concat(num);
    } else {
      calculator.firstOperand = num;
    }
    setStdout(calculator.firstOperand);
  } else {
    if (num !== '0' && calculator.secondOperand !== '0') {
      calculator.secondOperand = calculator.secondOperand.concat(num);
    } else {
      calculator.secondOperand = num;
    }
    setStdout(calculator.secondOperand);
  }
}

function calculatorClick(event) {
  const selected = event.target.innerText;

  if (isNaN(parseInt(selected))) {
    handleCommand(selected);
  } else {
    updateCalculatorValue(selected);
  }
  event.stopPropagation();
}

function handleCommand(selected) {
  switch (selected) {
    case '=':
      if (calculator.currentOperation) { calculateResult(); }
      break;
    case 'C':
      updateCalculatorValue('0');
      break;
    case '%':
    case 'x':
    case '-':
    case '+':
      calculator.currentOperation = selected;
      break;
    case '←':
      backspace();
      break;
    default:
      console.log('Unable to process command.');
  }
}

function backspace() {
  let stdout = getStdout();
  if (stdout.length > 0) {
    const backspacedValue = stdout.substring(0, stdout.length - 1);
    if (!calculator.currentOperation) {
      calculator.firstOperand = backspacedValue
    } else {
      calculator.secondOperand = backspacedValue
    }
    setStdout(backspacedValue);
  }
}

function calculateResult() {
  const operation = calculator.currentOperation;
  const a = parseInt(calculator.firstOperand);
  const b = parseInt(calculator.secondOperand);
  let result;

  switch (operation) {
    case 'x':
      result = a * b;
      break;
    case '%':
      result = a % b;
      break;
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
  }

  resetCalculator(result);
  setStdout(result);
}

function resetCalculator(result) {
  calculator.currentOperation = null;
  calculator.firstOperand = result.toString();
  calculator.secondOperand = '0';
}
