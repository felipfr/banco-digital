const Account = require("./Account");

module.exports = class Client {
    constructor(fullName, email) {
        this.fullName = fullName;
        this.email = email;
        this.account = new Account(this);
    };
};