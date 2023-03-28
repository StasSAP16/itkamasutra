let buttonPlus = document.getElementById("buttonPlus");
let buttonMinus = document.getElementById("buttonMinus");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonDivide = document.getElementById("buttonDivide");

// для рефакторинга кода по сравнению с файлом index12.js
// вынесем локальные переменные из функций и сделаем их глобальными!
// Итого они написаны 1 раз вместо 4х!
let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");
// для рефакторинга кода вынесли в отдельную функцию получение значения в input1 и input2
// function getNumber1() {
//   return Number(input1.value);
// }
// function getNumber2() {
//   return Number(input2.value);
// }

// 3й этап рефакторинга выведем операции в одельную функцию
// 4й этап опять запихиваем переменные в функцию, делаем их локальными
// функции getNumber1() и getNumber2() закоментируем

function makeOperation(operationCode) {
  let number1 = Number(input1.value);
  let number2 = Number(input2.value);
  if (operationCode === "+") {
    // почемуто заставил редактор заменить let на var!
    var result = number1 + number2;
  } else if (operationCode === "-") {
    var result = number1 - number2;
  } else if (operationCode === "*") {
    var result = number1 * number2;
  } else if (operationCode === "/") {
    var result = number1 / number2;
  } else {
    window.alert("Что то пошло не так!");
  }
  window.alert(result);
}

// function onButtonPlusClick() {
//   makeOperation("+");
// }
// function onButtonMinusClick() {
//   makeOperation("-");
// }
// function onButtonMultiplyClick() {
//   makeOperation("*");
// }
// function onButtonDivideClick() {
//   makeOperation("/");
// }
// заменим 4 вышестоящие функции листенеры (слушатели). Написали универсальный листенер!
function onOperationButtonClick(eventObject) {
  // по аналогии как мы находили El через getElementById
  // currentTarget это элемент с которым произошло событие !(нажата кнопка и тп)
  let clickedElement = eventObject.currentTarget;
  // clickedElement.innerHTML будет равен (+ - * /)т.к. у всех кнопок есть innerHTML
  let operation = clickedElement.innerHTML;
  makeOperation(operation);
}

buttonPlus.addEventListener("click", onOperationButtonClick);
// buttonPlus.addEventListener("click", onButtonPlusClick);
buttonMinus.addEventListener("click", onOperationButtonClick);
// buttonMinus.addEventListener("click", onButtonMinusClick);
buttonMultiply.addEventListener("click", onOperationButtonClick);
// buttonMultiply.addEventListener("click", onButtonMultiplyClick);
buttonDivide.addEventListener("click", onOperationButtonClick);
// buttonDivide.addEventListener("click", onButtonDivideClick);
