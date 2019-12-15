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

myself.bankAccount.deposit(3000);

console.log(myself);