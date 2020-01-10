import { Person, Arbnor, Car as Vehicle, Singleton } from "./classes.js";
import myself from "./excercises/exercise.js";
import { Car } from "./excercises/exercise_2.js";
//typescript basics
let a: number = 2;
let b: string;

let hobbies: [number, string] = [23, "asd"];

enum Color {
    blue,
    black = 100,
    white
}

let car: string = "John";

function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

type funcType = (a: number, b: number) => number;

let someFunc: funcType = multiply;
someFunc(2, 2);

let userData: { x: number, y: string } | number = {
    x: 23,
    y: "name"
}

userData = 2;



function throwErr(): never {
    throw new Error("Asd");
}


let theSingletonInstance = Singleton.getInstance(); //can only be initialized this way and only with name The Singleton


var Tezlah = new Vehicle();
Tezlah.setter = "Model S";
Tezlah.changeType("v30")


var Katie = new Person("Katie", 23);
var Arbnor1 = new Arbnor(24);
Arbnor1.setAge(25);


myself.bankAccount.deposit(3000);
//logs
console.log(userData)
console.log(Tezlah.getter);
console.log(Tezlah.engineType);
console.log("TCL: Katie", Katie);
console.log("TCL: Katie", Arbnor1);
console.log(theSingletonInstance);
console.log(myself.bankAccount.money);
console.log("---------------------------")
var BMW = new Car("BMW");
BMW.honk();
console.log(BMW.acceleration);
BMW.accelerate(10);
console.log(BMW.acceleration);