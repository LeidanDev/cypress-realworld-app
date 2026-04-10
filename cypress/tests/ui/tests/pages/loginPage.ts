class LoginPage {
    selectorList() {
        return {
            usernameField: "#username",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            alert: "[role='alert']",
            buttonNext: ".MuiButton-textPrimary",
            inputBankName: "#bankaccount-bankName-input",
            bankAccount: "#bankaccount-routingNumber-input",
            bankAccountNumber:"#bankaccount-accountNumber-input",
            bankAccountSubmit: ".BankAccountForm-submit",
            buttonDone: ".MuiButton-colorPrimary"
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

    firstLogin(){
        cy.get(this.selectorList().buttonNext).click();
        cy.get(this.selectorList().inputBankName).type("Santander");
        cy.get(this.selectorList().bankAccount).type("123456789");
        cy.get(this.selectorList().bankAccountNumber).type("123456789");
        cy.get(this.selectorList().bankAccountSubmit).click();
        cy.get(this.selectorList().buttonDone).click();
    }

    checkLoginSuccess() {
        cy.contains('@').should('be.visible'); // valida usuário logado (genérico)
    }

    checkAccessInvalid() {
        cy.get(this.selectorList().alert).should('be.visible');
    }

    // ===========================
    // Novo método: garante usuário
    // ===========================
    ensureUserExists(username: string, password: string, email?: string) {
        // Tenta criar o usuário via API
        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/users`,
            body: {
                username,
                password,
                email: email || `${username}@example.com`
            },
            failOnStatusCode: false, // se já existir, não falha
        });
    }
}

export default new LoginPage();