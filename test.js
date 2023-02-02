const App = require('./App');

// Adiciona 3 clientes a aplicação
App.addClient('May Huff', 'du@uwa.mr');
App.addClient('Chris Stephens', 'sasjapso@eniwep.eg');
App.addClient('Myrtie Potter', 'epcumweg@hiz.yt');

// Tenta adicionar um cliente já cadastrado
App.addClient('Daisy Ballard', 'sasjapso@eniwep.eg');

// Faz um depósito na conta do cliente 'May Huff'
App.deposit('du@uwa.mr', 1500);

// Transfere um valor da conta do cliente 'May Huff' para o cliente 'Chris Stephens'
App.transfer('du@uwa.mr', 'sasjapso@eniwep.eg', 550);

// Altera a taxa de juros para empréstimo
App.changeInterestRate(10);

// Solicita um empréstimo de R$1000 em 4 parcelas, no cliente 'Myrtie Potter'
App.takeLoan('epcumweg@hiz.yt', 1000, 4);

// Imprime as informaçõoes financeiras dos 3 clientes:

    //'May Huff'
    console.log(App.findClient('du@uwa.mr').account);

    //'Chris Stephens'
    console.log(App.findClient('sasjapso@eniwep.eg'));
    console.log(App.findClient('sasjapso@eniwep.eg').account);

    //'Myrtie Potter'
    console.log(App.findClient('epcumweg@hiz.yt'));
    console.log(App.findClient('epcumweg@hiz.yt').account);
    console.log(App.findClient('epcumweg@hiz.yt').account.loans[0].installments);