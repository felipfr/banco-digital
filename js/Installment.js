module.exports = class Installment {
    constructor(amount, number) {
        this.amount = amount;
        this.number = number;
        this.status = 'pendente';
    };
};