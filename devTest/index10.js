// function firstNameLog() {
//   let id = "first-name";
//   let el = document.getElementById(id);
//   console.log(el.value);
// }
// function lastNameLog() {
//   let id = "last-name";
//   let el = document.getElementById(id);
//   console.log(el.value);
// }

// пишем 1 универсальную функцию для id = first-name и id = last-name передавая в качестве параметра сам id
function logValue(id) {
  // console.log('попытки найти элемент по айди');
  let el = document.getElementById(id);
  console.log(el.value);
}
function getValue(id) {
  // console.log('попытки найти элемент по айди');
  let el = document.getElementById(id);
  return el.value;
}

// пишем функцию сокращающую нам работу 
// let avatarContainerId = "ava";
// let avatarContainerEl = document.getElementById(avatarContainerId);
// function getEl(id) {
//   let el = document.getElementById(id);
//   return el;
// }
// et avatarContainerId = "ava";
// let avatarContainerEl = getEl(avatarContainerId);


let firstNameId = "first-name";
let lastNameId = "last-name";
let valueGetting = getValue(firstNameId);

logValue(firstNameId);
logValue(lastNameId);

window.alert(valueGetting);
