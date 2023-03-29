// let buttonPlus = document.getElementById("buttonPlus");
// let buttonMinus = document.getElementById("buttonMinus");
// let buttonMultiply = document.getElementById("buttonMultiply");
// let buttonDivide = document.getElementById("buttonDivide");

let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");
// рефакторинг 19 урока
// вместо ручного создания массива из 18 урока делаем автоматический массив через getElementsByClassName
// (вернется не чистый массив а HTMLCollection(4))
// <------------------------------------------------------------------------------------
// let operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDivide]
// так же после созданияя operationButtons можно закоментировать и поиск кнопок по id:
// buttonPlus/buttonMinus/buttonMultiply/buttonDivide (с 1 по 4 строку)
// 1й строчкой ищем 4 элемента и далее идем в цикл for со значениями(+-/*)и кнопками 
let operationButtons = document.getElementsByClassName('operationsButton');
// ------------------------------------------------------------------------------------->

// рефакторинг 18 урока
// <--------------------------------------------------------------------------------
// let operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDivide]

for (let index = 0; index < operationButtons.length; index++) {
    // addComandEventListener(index);
    let button = operationButtons[index];
    button.addEventListener("click", onOperationButtonClick); 
}
// ------------------------------------------------------------------------------------->

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
