// 1)нашли 2 кнопки  и картинку по id
let prewBtn = document.getElementById("showPrew");
let nextBtn = document.getElementById("showNext");
let mainImg = document.getElementById("mainImg");

// 3)привязали к каждой кнопке по Listener/подписываемся на событие click
prewBtn.addEventListener("click", onShowPrewBtn);
nextBtn.addEventListener("click", onShowNextBtn);

// 4)создадим массив с картинками
let imgsUrl = [];
// 5) функция добавления строчки в массив
imgsUrl.push("/Users/stanislav/Desktop/itkamasutra/swift.png");
imgsUrl.push("/Users/stanislav/Desktop/itkamasutra/js.png");
imgsUrl.push("/Users/stanislav/Desktop/itkamasutra/devTest/swifts.png");

// 6)удалили с html адрес src и теперь заполним его из массива стартовой картинкой
// mainImg.src = imgsUrl[0];
// 7) избавимся от прямого указания 0 в массиве, создадим переменную и передадим в imgsUrl[]
let currentIndex = 0;
mainImg.src = imgsUrl[currentIndex];
// 13) нужно со старта задисейблить кнопку влево / назад т.к. индекс со старта = 0 и назад двигаться мы не можем
prewBtn.disabled = true;

// 2)определили функцию "слушателя"
function onShowPrewBtn() {
  // 9)после создания переменной с индексом нужно при каждом клике назад уменьшать этот индекс на 1
  currentIndex--;
  // 9)и далее передаем этот индекс для показа в слайде
  mainImg.src = imgsUrl[currentIndex];
  //14) раздисейблим кнопку назад при нажатии вперед! (иначе все кнопки будут задисейблены)
  nextBtn.disabled = false;
  // 12) дисэйблим кнопку назад если текущий индекс = 0
  if (currentIndex === 0) {
    // если это равенство выполняется то кнопку "далее" дизейблим(делаем не активной)
    prewBtn.disabled = true;
  }
  // console.log("prew-clicked");
}

function onShowNextBtn() {
  // 10)после создания переменной с индексом нужно при каждом клике вперед увеличить этот индекс на 1
  currentIndex++;
  // 10)и далее передаем этот индекс для показа в слайде
  mainImg.src = imgsUrl[currentIndex];
  //14) раздисейблим кнопку вперед при нажатии назад! (иначе все кнопки будут задисейблены)
  prewBtn.disabled = false;
  // 11)нужно напистаь проверку индекса т.к. элемента всего 3 и если индекс > 3 то будет ошибка!
  // 11) попросим у массива длинну imgsUrl.length и сравним с текущим currentIndex (-1 т.к. индекс всегда на 1 меньше)
  // 11) для читаемости обернем в еще одни скобки выражение в if -> imgsUrl.length - 1
  if (currentIndex === imgsUrl.length - 1) {
    // если это равенство выполняется то кнопку "далее" дизейблим(делаем не активной)
    nextBtn.disabled = true;
  }
  // console.log("next-clicked");
}
