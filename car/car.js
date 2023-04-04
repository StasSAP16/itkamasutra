
function Car(name) {
    this.name = name;
    this.isTurnOn = false;
    this.spid = 0;
    this.engin = {
        v: 1.6,
        hP: 120,
        isTurnOn: false,
    };
    // вынесли метод start как прототип метод который работает у всех экземпляров одинаково!
    // this.start = function() {
    //     this.some = true;
    //     this.spid = 10;
    //     this.engin.some = true;
    //     console.log(this.name, " ", this.spid);
    // }
}

//  в прототипе должны быть только методы!!!!!
Car.prototype.start = function() {
    this.some = true;
    this.spid = 10;
    this.engin.isTurnOn = true;
    console.log(this.name, " ", this.spid);
}

//  в прототипе должны быть только методы!!!!! в эксперименте ниже при создании reno мы прототипом engin
// меняем значение false на true для мерседаса а это не верно!!
// Car.prototype.engin = {
//     v: 1.6,
//     hP: 120,
//     isTurnOn: false,
// };
