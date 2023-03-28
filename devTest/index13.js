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
function getNumber1() {
  return Number(input1.value);
}
function getNumber2() {
  return Number(input2.value);
}

// 3й этап рефакторинга выведем операции в одельную функцию

function makeOperation(operationCode) {
  if (operationCode === "+") {
    // почемуто заставил редактор заменить let на var!
    var result = getNumber1() + getNumber2();
  } else if (operationCode === "-") {
    var result = getNumber1() - getNumber2();
  } else if (operationCode === "*"){
    var result = getNumber1() * getNumber2();
  } else if (operationCode === "/"){
    var result = getNumber1() / getNumber2();
  } else {
    window.alert('Что то пошло не так!');
  }
  window.alert(result);
}

function onButtonPlusClick() {
  // console.log('onButtonPlusClick');
  // let input1 = document.getElementById('number1');
  // let input2 = document.getElementById('number2');
  // вынесли в глобальные переменные let input1 и let input2
  // let number1 = Number(input1.value);
  // let number2 = Number(input2.value);
  // после вынесения в отдельную функцию получение значения в input1 и input2
  // let number1 = getNumber1();
  // let number2 = getNumber2();
  // let result = number1 + number2;
  // 2й уровень рефакторинга: вместо переменных number1 и number2 сразу в result записываем
  // результат вызова функций getNumber1() и getNumber2();
  // 3й этап рефакторинга выведем операции в одельную функцию makeOperation
  // let result = getNumber1() + getNumber2();
  // window.alert(result);
  makeOperation("+");
}
function onButtonMinusClick() {
  // console.log('onButtonMinusClick');
  // let input1 = document.getElementById('number1');
  // let input2 = document.getElementById('number2');
  // let number1 = Number(input1.value);
  // let number2 = Number(input2.value);
  // let number1 = getNumber1();
  // let number2 = getNumber2();
  // let result = getNumber1() - getNumber2();
  // window.alert(result);
  makeOperation("-");
}
function onButtonMultiplyClick() {
  // console.log('onButtonMultiplyClick');
  // let input1 = document.getElementById('number1');
  // let input2 = document.getElementById('number2');
  // let number1 = Number(input1.value);
  // let number2 = Number(input2.value);
  // let number1 = getNumber1();
  // let number2 = getNumber2();
  // let result = getNumber1() * getNumber2();
  // window.alert(result);
  makeOperation("*");
}
function onButtonDivideClick() {
  // console.log('onButtonDivideClick');
  // let input1 = document.getElementById('number1');
  // let input2 = document.getElementById('number2');
  // let number1 = Number(input1.value);
  // let number2 = Number(input2.value);
  // let number1 = getNumber1();
  // let number2 = getNumber2();
  // let result = getNumber1() / getNumber2();
  // window.alert(result);
  makeOperation("/");
}

buttonPlus.addEventListener("click", onButtonPlusClick);
buttonMinus.addEventListener("click", onButtonMinusClick);
buttonMultiply.addEventListener("click", onButtonMultiplyClick);
buttonDivide.addEventListener("click", onButtonDivideClick);
