function addErrorClass(elementId) {
  let element = document.getElementById(elementId);
  element.className = "errorInput";
}
function addErrorClassAllInputs() {
  addErrorClass("first-name");
  addErrorClass("last-name");
  addErrorClass("address");
}

// addErrorClassAllInputs()
// берем функцию и помещаем в сет setTimeout как параметр, функцию которую мы вызовем потом!
// второй параметр это через сколько нужно вызвать 2000 мс

// window.setTimeout(addErrorClassAllInputs, 2000);

let sendButton = document.getElementById("send-button");
let lastName = document.getElementById("last-name");
// указываем 2 параметра в addEventListener 1 событие и 2 кто является Listener
// Listener = addErrorClassAllInputs - это функция которую вызовет кнопка,
//  когда произойдет событие "click" "JS DOM Event"
// sendButton.addEventListener("click", addErrorClassAllInputs);

// что бы такую функцию вызвать с имеющимся параметром,
// то нужно обернуть ее функцией без параметра
// sendButton.addEventListener("click", addErrorClass); <- ее нельзя вызывать со собками ()
// иначе она сразу выполнится без наступления события

function addErrorClassToFirstName() {
  addErrorClass("first-name");
}
sendButton.addEventListener("click", addErrorClassToFirstName);

function onLastNameKeyUp() {
    addErrorClass("last-name");
}
debugger;
lastName.addEventListener("keyup", onLastNameKeyUp);
