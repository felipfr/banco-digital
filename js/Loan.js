const Installment = require("./Installment");

module.exports = class Loan {
    static #interestRate = 0.75;

    static get interestRate() {
        return Loan.#interestRate;
    };

    static set changeFee(newFee) {
        Loan.#interestRate = 1 + (newFee / 100);
    };

    constructor(amount, installments) {
        this.amount = amount;
        this.installments = [];
        for (let i = 1; i <= installments; i++) {
            this.installments.push(new Installment((amount * Loan.#interestRate) / installments, i));
        };
        this.creationDate = new Date();
    };
};