type bankAccountTsc = { money: number, deposit: (value: number) => void };

let bankAccount: bankAccountTsc = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: { name: string, bankAccount: bankAccountTsc, hobbies: string[] } = {
    name: "Max",
    bankAccount,
    hobbies: ["Sports", "Cooking"]
};


function func(a: number, b: number) { //strict null checks for c
    let c = 0;
    if (a) {
        c = 2;
    }

    return a + b + c;
}

export default myself;