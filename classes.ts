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

export { Person };

export class Arbnor extends Person {
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

export class Car extends Engine {
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

//singleton example

export class Singleton {
    private static instance: Singleton;

    private constructor(public readonly name: string) { }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton('The Singleton');
        }
        return Singleton.instance;
    }
}