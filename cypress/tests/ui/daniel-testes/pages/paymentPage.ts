class Payment {

    seletorList() {
        return {
            newTransfer: "[data-test='nav-top-new-transaction']",
            users: "[data-test='user-list-item-mjeDpD0jN']",
            amountField: "[name='amount']",
            description: "[data-test='transaction-create-description-input']",
            submit: "[data-test='transaction-create-submit-payment']"
        }
    }

    acessarTransferencia() {
        cy.get(this.seletorList().newTransfer).click()
    }

    preencherTransferencia(valor: string, descricao: string) {
        cy.get(this.seletorList().users).click()
        cy.get(this.seletorList().amountField).clear().type(valor)
        cy.get(this.seletorList().description).clear().type(descricao)
    }

    submeterTransferencia() {
        cy.get(this.seletorList().submit).click()
    }

    validarSucesso() {
        cy.contains('Transaction Submitted!').should('be.visible')
    }

    validarErroSaldo() {
        cy.contains('Insufficient balance').should('be.visible')
        
    }

    

}

export default new Payment()