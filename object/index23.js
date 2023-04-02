// вызываем метод инициализации slider1
// let cont1 = document.querySelector("#sapSlider1");
// let cont2 = document.querySelector("#sapSlider2");
// slider1.start(cont1);
// slider2.start(cont2);

let slider1 = sliderFactory.createNewSlider();
let slider2 = sliderFactory.createNewSlider();
slider1.start("sapSlider1");
slider2.start("sapSlider2");