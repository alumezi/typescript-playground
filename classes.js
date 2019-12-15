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
var Katie = new Person("Katie", 23);
var Arbnor1 = new Arbnor(24);
Arbnor1.setAge(25);
console.log("TCL: Katie", Katie);
console.log("TCL: Katie", Arbnor1);
