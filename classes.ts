class Person {
    name: string;
    protected age: number;
    private test : string = "asd";

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

var Katie = new Person("Katie", 23);
var Arbnor1 = new Arbnor(24);
Arbnor1.setAge(25);
console.log("TCL: Katie", Katie)
console.log("TCL: Katie", Arbnor1)