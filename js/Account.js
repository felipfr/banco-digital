module.exports = class Account {
    #balance;

    get balance() {
        return this.#balance;
    };

    constructor(client) {
        this.client = client;
        this.#balance = 0;
        this.deposits = [];
        this.loans = [];
        this.transfers = [];
    };

    addDeposit(amount) {
        this.#balance += amount.value;
        this.deposits.push(amount);
    };

    addLoan(amount) {
        this.#balance += amount.value;
        this.loans.push(amount);
    };

    addTransfer(transfer) {
        if (transfer.toClient.email === this.client.email) {
            this.#balance += transfer.value;
            this.transfers.push(transfer);
        } else if (transfer.fromClient.email === this.client.email) {
            this.#balance -= transfer.value;
            this.transfers.push(transfer);
        };
    };
};