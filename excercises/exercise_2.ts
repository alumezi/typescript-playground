// Exercise 1 - How was your TypeScript Class?
export class Car {
    name: string;
    acceleration: number;

    constructor(name: string) {
        this.name = name;
        this.acceleration = 0;
    }

    honk() {
        console.log("Toooooooooot!");
    }

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed
    }
}

// Exercise 2 - Two objects, based on each other ...
class baseObject {
    width = 0;
    length = 0;
};

class Rectangle extends baseObject {
    calcSize() {
        return this.width * this.length;
    }
}

var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function () {
    return this.width * this.length;
};
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});

class Person {
    _firstName = ""

    get name(){
        return this._firstName;      
    }

    set name(value: string){
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
}