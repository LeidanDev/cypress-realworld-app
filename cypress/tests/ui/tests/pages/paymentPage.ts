// class Payment {

//     seletorList() {
//         return {
//             newTransfer: ".NavBar-newTransactionButton",
//             users: "[data-test='user-list-item-uBmeaz5pX']",
//             amountField: "#amount",
//             description: "#transaction-create-description-input",
//             submit: "[data-test='transaction-create-submit-payment']"
//         }
//     }

//     acessarTransferencia() {
//         cy.get(this.seletorList().newTransfer, { timeout: 10000 })
//             .should('be.visible')
//             .click();
//     }

//     preencherTransferencia(valor: string, descricao: string) {

//         cy.get(this.seletorList().users)
//             .scrollIntoView()
//             .should('be.visible')
//             .click();

//         // cy.get('[data-test="users-list"]')
//         //     .contains("Ruthie Prosacco")
//         //     .scrollIntoView()
//         //     .should('be.visible')
//         //     .click();

//         cy.get(this.seletorList().amountField)
//             .should('be.visible')
//             .clear()
//             .type(valor);

//         cy.get(this.seletorList().description)
//             .should('be.visible')
//             .clear()
//             .type(descricao);
//     }

//     submeterTransferencia() {
//         cy.get(this.seletorList().submit)
//             .should('be.visible')
//             .click();
//     }

//     validarSucesso() {
//         cy.contains('Transaction Submitted!')
//             .should('be.visible');
//     }

//     validarErroSaldo() {
//         cy.contains('Insufficient balance')
//             .should('be.visible');
//     }

// }

// export default new Payment();

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

        // 🔥 SELEÇÃO CORRIGIDA: busca apenas pelo nome (sem depender do seletor completo)
        // cy.contains("li", "Ruthie Prosacco")
        //     .scrollIntoView()
        //     .should('be.visible')
        //     .click();

        // //alternativa ainda mais flexível (caso MUI mude estrutura):
        // cy.contains("Ruthie Prosacco")
        //     .scrollIntoView()
        //     .should('be.visible')
        //     .click();

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