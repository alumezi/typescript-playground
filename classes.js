"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.test = "asd";
        this.name = name;
        this.age = age;
    }
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    return Person;
}());
var Arbnor = /** @class */ (function (_super) {
    __extends(Arbnor, _super);
    function Arbnor(age) {
        return _super.call(this, "Arbnor", age) || this;
    }
    return Arbnor;
}(Person));
var Engine = /** @class */ (function () {
    function Engine() {
        this.engineType = "v20";
    }
    Engine.prototype.turnOn = function () {
        return "Engine " + this.engineType + " is on";
    };
    return Engine;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = "";
        return _this;
    }
    Car.prototype.changeType = function (name) {
        this.engineType = name;
    };
    Object.defineProperty(Car.prototype, "getter", {
        get: function () {
            return this.model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "setter", {
        set: function (model) {
            this.model = model;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}(Engine));
var Tezlah = new Car();
Tezlah.setter = "Model S";
console.log(Tezlah.getter);
Tezlah.changeType("v30");
console.log(Tezlah.engineType);
var Katie = new Person("Katie", 23);
var Arbnor1 = new Arbnor(24);
Arbnor1.setAge(25);
// console.log("TCL: Katie", Katie)
// console.log("TCL: Katie", Arbnor1)
