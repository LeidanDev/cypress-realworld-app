class NewRegisterPage {
    selectorList() {
        return {
            signupLink: "[href='/signup']",
            firstName: "#firstName",
            lastName: "#lastName",
            username: "#username",
            password: "#password",
            confirmPassword: "#confirmPassword",
            buttonSignup: "[type='submit']",

            errors: {
                firstName: "#firstName-helper-text",
                lastName: "#lastName-helper-text",
                username: "#username-helper-text",
                password: "#password-helper-text",
                confirmPassword: "#confirmPassword-helper-text",
            }
        };
    }

    accessPage() {
        cy.visit('http://localhost:3000'); // abre sistema
    }

    openRegisterForm() {
        cy.get(this.selectorList().signupLink).click(); // abre tela de cadastro

        // garante que o form abriu antes de continuar
        cy.get(this.selectorList().firstName).should('be.visible');
    }

    registerUser(firstName: string, lastName: string, username: string, password: string) {
        this.openRegisterForm();

        cy.get(this.selectorList().firstName).type(firstName);
        cy.get(this.selectorList().lastName).type(lastName);
        cy.get(this.selectorList().username).type(username);
        cy.get(this.selectorList().password).type(password);
        cy.get(this.selectorList().confirmPassword).type(password);
        cy.get(this.selectorList().buttonSignup).click();
    }

    validateRequiredFields() {
        this.openRegisterForm();

        const fields = [
            { field: this.selectorList().firstName, error: this.selectorList().errors.firstName, message: 'First Name is required' },
            { field: this.selectorList().lastName, error: this.selectorList().errors.lastName, message: 'Last Name is required' },
            { field: this.selectorList().username, error: this.selectorList().errors.username, message: 'Username is required' },
            { field: this.selectorList().password, error: this.selectorList().errors.password, message: 'Enter your password' },
            { field: this.selectorList().confirmPassword, error: this.selectorList().errors.confirmPassword, message: 'Confirm your password' },
        ];

        fields.forEach(f => {
            cy.get(f.field).click(); // ativa o campo
        });

        // clique fora para garantir validação do último campo
        cy.get('body').click(0,0);

        fields.forEach(f => {
            cy.get(f.error).should('contain.text', f.message);
        });
    }
}

export default new NewRegisterPage();