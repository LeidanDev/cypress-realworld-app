import transactionsPage from "../pages/transactionsPage";
import LoginPage from "../pages/loginPage";
import userData from "../fixtures/userData.json";

describe('Visualizar histórico de transações com sucesso', () => {
    beforeEach(() => {
        LoginPage.accessLoginPage();
    });
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
        const user = userData.userSuccess;

        LoginPage.login(user.username, user.password);
        transactionsPage.acessarHistorico()
    });

    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
        const user = userData.userWithoutTransictions; //  ideal ter outro usuário mas está sem usuario sem saldo positivo no userData

        LoginPage.login(user.username, user.password);
        transactionsPage.acessarHistoricoVazio()
    });
});
