class Payment {

    seletorList() {
        return {
            newTransfer: ".NavBar-newTransactionButton",
            users: "[data-test^='user-list-item']",
            amountField: "#amount",
            description: "#transaction-create-description-input",
            submit: "[data-test='transaction-create-submit-payment']"
        }
    }

    acessarTransferencia() {
        cy.get(this.seletorList().newTransfer, { timeout: 10000 })
            .should('be.visible')
            .click();
    }

    preencherTransferencia(valor: string, descricao: string) {


        cy.contains("Ruthie Prosacco", { timeout: 10000 })
            .should('be.visible')
            .should('not.be.disabled')
            .parents('li')
            .first()
            .click({ force: true });

        cy.get(this.seletorList().amountField)
            .should('be.visible')
            .clear()
            .type(valor);

        cy.get(this.seletorList().description)
            .should('be.visible')
            .clear()
            .type(descricao);
    }

    submeterTransferencia() {
        cy.get(this.seletorList().submit)
            .should('be.visible')
            .click();
    }

    validarSucesso() {
        cy.contains('Transaction Submitted!')
            .should('be.visible');
    }

    validarErroSaldo() {
        cy.contains('Insufficient balance')
            .should('be.visible');
    }

}

export default new Payment();