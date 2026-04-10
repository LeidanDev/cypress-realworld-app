import loginPage from '../pages/loginPage';

describe('Login Tests', () => {
  let username;
  const password = 'carlos123';
  const invalidPassword = 'wrongpass';

  beforeEach(() => {
    // 🔥 Gera usuário único
    username = `carlos_${Date.now()}`;

    // Limpa sessão (boa prática)
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });

    // Cria usuário novo
    loginPage.ensureUserExists(username, password);

    // Acessa login
    loginPage.accessLoginPage();
  });

  it('should log in successfully with valid credentials', () => {
    loginPage.login(username, password);
    loginPage.firstLogin();
    loginPage.checkLoginSuccess();
  });

  it('should show error with invalid password', () => {
    loginPage.login(username, invalidPassword);
    loginPage.checkAccessInvalid();
  });

  it('should show error with non-existent user', () => {
    const invalidUser = `invalid_${Date.now()}`;
    loginPage.login(invalidUser, invalidPassword);
    loginPage.checkAccessInvalid();
  });
});