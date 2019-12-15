class Person {
    name: string;
    protected age: number;
    private test: string = "asd";

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    setAge(age: number) {
        this.age = age;
    }
}

class Arbnor extends Person {
    constructor(age: number) {
        super("Arbnor", age)
    }
}

abstract class Engine {
    engineType: String = "v20";

    abstract changeType(name: string): void;

    turnOn() {
        return `Engine ${this.engineType} is on`
    }
}

class Car extends Engine {
    private model: string = "";

    changeType(name: string): void {
        this.engineType = name;
    }

    get getter() {
        return this.model;
    }

    set setter(model: string) {
        this.model = model;
    }
}


var Tezlah = new Car();
Tezlah.setter = "Model S";
console.log(
    Tezlah.getter
)
Tezlah.changeType("v30")
console.log(
    Tezlah.engineType
)

var Katie = new Person("Katie", 23);
var Arbnor1 = new Arbnor(24);
Arbnor1.setAge(25);
// console.log("TCL: Katie", Katie)
// console.log("TCL: Katie", Arbnor1)