// import transactionsPage from "../pages/transactionsPage";
// import LoginPage from "../pages/loginPage";
// import userData from "../fixtures/userData.json";
// import NewRegister from "../pages/newRegisterPage";
// import paymentPage from "../pages/paymentPage";

// describe('Visualizar histórico de transações com sucesso', () => {
//     beforeEach(() => {
//         LoginPage.accessLoginPage();
//     });
//     it('Deve exibir o histórico de transações de um usuário corretamente', () => {
//         const user = userData.userSuccess;

//         LoginPage.login(user.username, user.password);
//         paymentPage.acessarTransferencia();
//         paymentPage.preencherTransferencia("10", "teste sucesso");
//         paymentPage.submeterTransferencia();
//         transactionsPage.acessarHome();
//         transactionsPage.acessarHistorico();
//     });

//     it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
//         const user = userData.newUser;

//         NewRegister.registerUser(
//             user.firstname,
//             user.lastname,
//             user.username,
//             user.password
//         );


//         LoginPage.login(user.username, user.password);
//         transactionsPage.acessarHistoricoVazio()
//     });
// });

import transactionsPage from "../pages/transactionsPage";
import LoginPage from "../pages/loginPage";
import userData from "../fixtures/userData.json";
import paymentPage from "../pages/paymentPage";
import loginPage from "../pages/loginPage";

describe('Visualizar histórico de transações com sucesso', () => {

    let username;
    const password = "carlos123";

    beforeEach(() => {

        // 🔥 cria usuário único para isolamento total
        username = `user_${Date.now()}`;

        cy.clearCookies();
        cy.clearLocalStorage();

        cy.window({ log: false }).then((win) => {
            win.sessionStorage.clear();
        });

        LoginPage.accessLoginPage();

        // 🔥 garante usuário sempre novo no backend
        LoginPage.ensureUserExists(username, password);
    });

    it('Deve exibir o histórico de transações de um usuário corretamente', () => {

        LoginPage.login(username, password);
        loginPage.firstLogin();
        paymentPage.acessarTransferencia();
        paymentPage.preencherTransferencia("10", "teste sucesso");
        paymentPage.submeterTransferencia();

        transactionsPage.acessarHome();
        transactionsPage.acessarHistorico();
    });

    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {

        const user = userData.newUser;

        LoginPage.login(user.username, user.password);

        transactionsPage.acessarHistoricoVazio();
    });

});