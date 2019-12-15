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

class Car {
    private model: string = "";

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



var Katie = new Person("Katie", 23);
var Arbnor1 = new Arbnor(24);
Arbnor1.setAge(25);
// console.log("TCL: Katie", Katie)
// console.log("TCL: Katie", Arbnor1)