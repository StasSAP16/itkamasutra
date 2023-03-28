let buttonPlus = document.getElementById("buttonPlus");
let buttonMinus = document.getElementById("buttonMinus");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonDivide = document.getElementById("buttonDivide");

let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");

function makeOperation(operation) {
  let number1 = Number(input1.value);
  let number2 = Number(input2.value);
  if (operation === "+") {
    // почемуто заставил редактор заменить let на var!
    var result = number1 + number2;
  } else if (operation === "-") {
    var result = number1 - number2;
  } else if (operation === "*") {
    var result = number1 * number2;
  } else if (operation === "/") {
    var result = number1 / number2;
  } else {
    window.alert("Что то пошло не так!");
  }
  window.alert(result);
}

function onOperationButtonClick(eventObject) {
  let clickedElement = eventObject.currentTarget;
  let operation = clickedElement.innerHTML;
  makeOperation(operation);
}
// рефакторинг 18 урока
// <--------------------------------------------------------------------------------
// функция более не нужна т.к. создали цикл с for
// function addComandEventListener(i) {
//     operationButtons[i].addEventListener("click", onOperationButtonClick);  
// }
//  создаем массив с кнопками действий
let operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDivide]
//  теперь заменим переменную на элемент массива
// buttonPlus.addEventListener("click", onOperationButtonClick);
// buttonMinus.addEventListener("click", onOperationButtonClick);
// buttonMultiply.addEventListener("click", onOperationButtonClick);
// buttonDivide.addEventListener("click", onOperationButtonClick);

// создали функцию addComandEventListener(i) вместо 4х вызовов листенера 
// operationButtons[0].addEventListener("click", onOperationButtonClick);
// operationButtons[1].addEventListener("click", onOperationButtonClick);
// operationButtons[2].addEventListener("click", onOperationButtonClick);
// operationButtons[3].addEventListener("click", onOperationButtonClick);
// addComandEventListener(0);
// addComandEventListener(1);
// addComandEventListener(2);
// addComandEventListener(3);
// засунем в тело цикла for нашу функцию addComandEventListener(0);
for (let index = 0; index < operationButtons.length; index++) {
    // addComandEventListener(index);
    let button = operationButtons[index];
    button.addEventListener("click", onOperationButtonClick); 
}
// ------------------------------------------------------------------------------------->