const Client = require("./js/Client");
const Deposit = require("./js/Deposit");
const Transfer = require("./js/Transfer");
const Loan = require("./js/Loan");

module.exports = class App {
    static #clients = [];

    static findClient(email) {
        const client = this.#clients.find(client => client.email === email);
        return client ?? null;
    };

    static addClient(fullname, email) {
        const clientExists = App.findClient(email)
        if (!clientExists) {
            App.#clients.push(new Client(fullname, email));
            console.log(`O cliente '${fullname}' foi cadastrado com sucesso!`);
        } else {
            console.log(`O email '${email}' já está cadastrado!`);
        };
    };

    static deposit(email, amount) {
        const client = App.findClient(email);
        if (!client) {
            console.log(`Nenhum cliente encontrado com o email '${email}'`);
        } else {
            const newDeposit = new Deposit(amount);
            client.account.addDeposit(newDeposit);
        };
    };

    static transfer(fromClientEmail, toClientEmail, amount) {
        const fromClient = App.findClient(fromClientEmail);
        const toClient = App.findClient(toClientEmail);
        if (fromClient && toClient) {
            const newTransfer = new Transfer(fromClient, toClient, amount);
            fromClient.account.addTransfer(newTransfer);
            toClient.account.addTransfer(newTransfer);
            console.log(`Transferência realizada com sucesso!`);
        } else if (fromClient != fromClientEmail) {
            console.log(`Nenhum cliente encontrado com o email '${email}'`);
        } else if (toClient != toClientEmail) {
            console.log(`Desculpe, não foi possível encontrar o destinatário do depósito. Por favor, verifique se o email '${toClientEmail}' está correto e tente novamente.`);
        };
    };

    static takeLoan(email, amount, numberOfInstallments) {
        const client = App.findClient(email);
        if (!client) {
            console.log(`Nenhum cliente encontrado com o email '${email}'`);
        } else {
            const newLoan = new Loan(amount, numberOfInstallments);
            client.account.addLoan(newLoan);
            console.log(`Empréstimo de R$${amount} reais em ${numberOfInstallments} parcelas realizado com sucesso!`);
        };
    };

    static changeInterestRate(newFee) {
        Loan.changeFee = newFee;
        console.log(`A taxa de juros foi alterada com sucesso!`);
    };
};