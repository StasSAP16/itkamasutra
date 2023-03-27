let firstNameId;
let firstNameEl;
let LastNameId;
let LastNameEl;
let addressId;
let addressEl;
let citiesId;
let citiesEl;
let hobbiesId;
let hobbiesEl;
// можно короче писать создавать переменную и сразу ее инициализировать (присвоить Id)
// НО ВАЖНО сначала объявить переменную Id и только потом ее использовать!
let avatarContainerId = "ava";
// то же касается и  другой переменной (итого 2 строчки вместо 4х)
let avatarContainerEl = document.getElementById(avatarContainerId);
let avatarId = "avatar";
let avatarEl = document.getElementById(avatarId);
let listId = "list";
let listEl = document.getElementById(listId);
// можно написать короче
// let list = document.getElementById('list');
// window.alert(listEl.innerHTML);

// 1 -вариант написания функции
// function logValue() {
//     console.log(firstNameEl.value);
// }
// 2 -вариант написания функции
// function alertFirstName() {
//   console.log(firstNameEl.value);
//   console.log(firstNameEl.className);
// };
// function alertLastName() {
//   console.log(LastNameEl.value);
//   console.log(LastNameEl.className);
// };
// 3 -вариант написания функции с использованием параметра
function alertValueClass(elementParametr) {
  console.log(elementParametr.value);
  console.log(elementParametr.className);
}
// 4 вариант стрелочная функция!!!!!!!!!!!!!!!!!!!!!!!!!!
// Потому что стрелочная функция находится в том же контексте что и код вызвавший её,
// если это класс, можно получить список свойств через this, не передавая this класса внутрь функции в качестве аргумента,
// и второе, можно получить список аргументов с которыми была вызвана эта функция.
// const, потому что вряд ли вы попытаетесь функцию в переменной менять (как var или даже let), а если и попытаетесь,
// сама суть const вам этого сделать просто не даст (2 зайца одним махом).

// const alertLastName2 = (elementParametr) => {
//   console.log(elementParametr.value);
//   console.log(elementParametr.className);
// };

firstNameId = "first-name";
LastNameId = "last-name";
addressId = "address";
citiesId = "cities";
hobbiesId = "hobbies";

firstNameEl = document.getElementById(firstNameId);
// alertFirstName();
alertValueClass(firstNameEl);

LastNameEl = document.getElementById(LastNameId);
// alertLastName();
alertValueClass(LastNameEl);

addressEl = document.getElementById(addressId);
citiesEl = document.getElementById(citiesId);
hobbiesEl = document.getElementById(hobbiesId);
LastNameEl.className = "lastName-input nextClass1 errorInput";

// logValue();
firstNameEl.value = "Andrey";
// alertFirstName();
alertValueClass(firstNameEl);

LastNameEl.value = "Kyzyberden";
// alertLastName();
alertValueClass(LastNameEl);
