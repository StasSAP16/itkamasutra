let slider1 = {
  imgsUrl: [],
  currentIndex: 0,
  // вместо getElementById используем querySelector
  prewBtn: null, //document.querySelector(".showPrew"),
  nextBtn: null, //document.querySelector(".showNext"),
  // mainImg: document.getElementById("mainImg"),
  mainImg: null, //document.querySelector(".mainImg"),
  // перенесем поиск в start
  start: function () {
    let that = this;
    //   создадим переменную для конкретного id div что бы он искал кнопки у него
    let element = document.querySelector("#sapSlider1");
    // перенесем поиск в start
    this.prewBtn = element.querySelector(".showPrew");
    this.nextBtn = element.querySelector(".showNext");
    this.mainImg = element.querySelector(".mainImgClass");

    this.prewBtn.addEventListener("click", function (e) {
      that.onShowPrewBtn(e);
    });
    this.nextBtn.addEventListener("click", function (e) {
      that.onShowNextBtn(e);
    });

    this.imgsUrl.push("/Users/stanislav/Desktop/itkamasutra/swift.png");
    this.imgsUrl.push("/Users/stanislav/Desktop/itkamasutra/js.png");
    this.imgsUrl.push(
      "/Users/stanislav/Desktop/itkamasutra/devTest/swifts.png"
    );
    this.mainImg.src = this.imgsUrl[this.currentIndex];

    this.prewBtn.disabled = true;
  },

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
