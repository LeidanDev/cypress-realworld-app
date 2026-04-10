import paymentPage from "../pages/paymentPage";
import LoginPage from "../pages/loginPage";


describe('Transferências', () => {

    let username;
    const password = "carlos123";

    beforeEach(() => {
        // 🔥 cria usuário único por teste
        username = `user_${Date.now()}`;

        cy.clearCookies();
        cy.clearLocalStorage();

        cy.window({ log: false }).then((win) => {
            win.sessionStorage.clear();
        });

        // garante usuário sempre novo (estado limpo)
        LoginPage.ensureUserExists(username, password);

        LoginPage.accessLoginPage();

    });

    


    it('Deve enviar dinheiro com sucesso', () => {

        LoginPage.login(username, password);
        LoginPage.firstLogin();
        paymentPage.acessarTransferencia();
        paymentPage.preencherTransferencia("10", "teste sucesso");
        paymentPage.submeterTransferencia();

        paymentPage.validarSucesso();
    });

    it('Deve exibir erro ao enviar sem saldo', () => {

        LoginPage.login(username, password);
        LoginPage.firstLogin();
        paymentPage.acessarTransferencia();
        paymentPage.preencherTransferencia("1000", "teste erro");
        paymentPage.submeterTransferencia();

        paymentPage.validarErroSaldo();
    });

});