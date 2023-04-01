let slider1 = {
  imgsUrl: [],
  currentIndex: 0,
  prewBtn: document.getElementById("showPrew"),
  nextBtn: document.getElementById("showNext"),
  mainImg: document.getElementById("mainImg"),
  //для инициализации вех параметров создаем метод start
  //в фунуции находятся элементы/переменные которые ранее мы объявляли перед функциями, теперь эти переменные являются
  //нашими проперти объекта-свойства и для того, что бы ими пользоваться в методе нужно перед ними ставить this.
  start: function () {
    this.prewBtn.addEventListener("click", this.onShowPrewBtn);
    this.nextBtn.addEventListener("click", this.onShowNextBtn);

    this.imgsUrl.push("/Users/stanislav/Desktop/itkamasutra/swift.png");
    this.imgsUrl.push("/Users/stanislav/Desktop/itkamasutra/js.png");
    this.imgsUrl.push("/Users/stanislav/Desktop/itkamasutra/devTest/swifts.png");
    this.mainImg.src = this.imgsUrl[this.currentIndex];

    this.prewBtn.disabled = true;
  },

  //объявим метод, который ранее был функцией. Это функция /метд пописчик и никогда листенер не вызывается на прямую
  //в нем находятся элементы/переменные которые ранее мы объявляли перед функциями, теперь эти переменные являются
  //нашими проперти объекта-свойства и для того, что бы ими пользоваться в методе нужно перед ними ставить this.
  onShowPrewBtn: function (e) {
    this.currentIndex--;
    this.mainImg.src = this.imgsUrl[this.currentIndex];
    this.nextBtn.disabled = false;
    if (this.currentIndex === 0) {
      this.prewBtn.disabled = true;
    }
  },
  onShowNextBtn: function (e) {
    this.currentIndex++;
    this.mainImg.src = this.imgsUrl[this.currentIndex];
    this.prewBtn.disabled = false;
    if (this.currentIndex === this.imgsUrl.length - 1) {
      this.nextBtn.disabled = true;
    }
  },
};
