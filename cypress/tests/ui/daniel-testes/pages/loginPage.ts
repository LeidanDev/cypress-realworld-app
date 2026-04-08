class LoginPage {
    selectorList() {
        return {
            usernameField: "#username",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            alert: "[role='alert']",
        };
    }

    accessLoginPage() {
        cy.visit('http://localhost:3000'); // abre login
    }

    login(username: string, password: string) {
        cy.get(this.selectorList().usernameField).type(username);
        cy.get(this.selectorList().passwordField).type(password);
        cy.get(this.selectorList().loginButton).click();
    }

    checkLoginSuccess() {
        cy.contains('@').should('be.visible'); // valida usuário logado (genérico)
    }

    checkAccessInvalid() {
        cy.get(this.selectorList().alert).should('be.visible');
    }
}

export default new LoginPage();