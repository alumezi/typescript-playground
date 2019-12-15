"use strict";
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
console.log(userData);
function throwErr() {
    throw new Error("Asd");
}
console.log(throwErr());
