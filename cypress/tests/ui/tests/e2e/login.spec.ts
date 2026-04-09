import LoginPage from "../pages/loginPage";
import userData from "../fixtures/userData.json";

describe('Login', () => {

    beforeEach(() => {
        LoginPage.accessLoginPage(); // executa antes de cada teste
    });

    it('Deve fazer login com usuário válido', () => {
        const user = userData.userSuccess;

        LoginPage.login(user.username, user.password);
        LoginPage.checkLoginSuccess();
    });

    it('Deve exibir erro com credenciais inválidas', () => {
        const user = userData.userFail;

        LoginPage.login(user.username, user.password);
        LoginPage.checkAccessInvalid();
    });

});

