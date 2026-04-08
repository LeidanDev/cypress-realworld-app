import paymentPage from "../pages/paymentPage";
import LoginPage from "../pages/loginPage";
import userData from "../fixtures/userData.json";

describe('Transferências', () => {

    beforeEach(() => {
        LoginPage.accessLoginPage();
    });

    it('Deve enviar dinheiro com sucesso', () => {
        const user = userData.userSuccess;

        LoginPage.login(user.username, user.password);

        paymentPage.acessarTransferencia();
        paymentPage.preencherTransferencia("10", "teste sucesso");
        paymentPage.submeterTransferencia();

        paymentPage.validarSucesso();
    });

    it('Deve exibir erro ao enviar sem saldo', () => {
        const user = userData.userSuccess; //  ideal ter outro usuário mas está sem usuario sem saldo positivo no userData

        LoginPage.login(user.username, user.password);
        
        paymentPage.acessarTransferencia();
        paymentPage.preencherTransferencia("1000", "teste erro");
        paymentPage.submeterTransferencia();

        paymentPage.validarErroSaldo();
    });

    

});