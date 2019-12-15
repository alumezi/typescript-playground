var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
function func(a, b) {
    var c = 0;
    if (a) {
        c = 2;
    }
    return a + b + c;
}
export default myself;
