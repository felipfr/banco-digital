module.exports = class Transfer {
    constructor(fromClient, toClient, amount) {
        this.fromClient = fromClient;
        this.toClient = toClient;
        this.amount = amount;
        this.creationDate = new Date();
    };
};