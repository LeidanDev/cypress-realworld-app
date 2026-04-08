class TransactionPage {

    selectorList(){
        return{
            mine: "[data-test='nav-personal-tab']",
            transactions: ".css-hfwr93-MuiGrid-root"
        }
    }

    acessarHistorico(){
        cy.get(this.selectorList().mine).click()
        cy.get(this.selectorList().transactions).should('exist');
    }

    acessarHistoricoVazio(){
        cy.get(this.selectorList().mine).click()
        cy.contains('No Transactions').should('be.visible');
    }
} export default new TransactionPage