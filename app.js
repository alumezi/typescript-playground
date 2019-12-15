import { Person, Arbnor, Car, Singleton } from "./classes.js";
import myself from "./excercises/exercise.js";
//typescript basics
var a = 2;
var b;
var hobbies = [23, "asd"];
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["black"] = 100] = "black";
    Color[Color["white"] = 101] = "white";
})(Color || (Color = {}));
var car = "John";
function multiply(value1, value2) {
    return value1 * value2;
}
var someFunc = multiply;
someFunc(2, 2);
var userData = {
    x: 23,
    y: "name"
};
userData = 2;
function throwErr() {
    throw new Error("Asd");
}
var theSingletonInstance = Singleton.getInstance(); //can only be initialized this way and only with name The Singleton
var Tezlah = new Car();
Tezlah.setter = "Model S";
Tezlah.changeType("v30");
var Katie = new Person("Katie", 23);
var Arbnor1 = new Arbnor(24);
Arbnor1.setAge(25);
myself.bankAccount.deposit(3000);
//logs
console.log(userData);
console.log(Tezlah.getter);
console.log(Tezlah.engineType);
console.log("TCL: Katie", Katie);
console.log("TCL: Katie", Arbnor1);
console.log(theSingletonInstance);
console.log(myself.bankAccount.money);
console.log(throwErr());
