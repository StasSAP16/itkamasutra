let sliderFactory = {
  createNewSlider: function () {
    let newSlider = {
      imgsUrl: [],
      currentIndex: 0,
      prewBtn: null,
      nextBtn: null,
      mainImg: null,

      start: function (elementId) {
        let that = this;
        let elSelector = "#" + elementId;
        let element = document.querySelector(elSelector);

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
        this.imgsUrl.push("/Users/stanislav/Desktop/itkamasutra/devTest/swifts.png");
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
    return newSlider;
  },
};
