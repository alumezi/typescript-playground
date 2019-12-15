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


console.log(userData)

function throwErr(): never {
    throw new Error("Asd");
}

console.log(throwErr());