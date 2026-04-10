class TransactionPage {

    selectorList(){
        return{
            mine: "[data-test='nav-personal-tab']",
            transactions: ".css-hfwr93-MuiGrid-root"
        }
    }

    acessarHome(){
        cy.contains("Home").click()
    }

    acessarHistorico(){
        cy.get(this.selectorList().mine, {timeout: 5000}).click()
        cy.get(this.selectorList().transactions).should('exist');
    }

    acessarHistoricoVazio(){
        cy.get(this.selectorList().mine).click()
        cy.contains('No Transactions').should('be.visible');
    }
} export default new TransactionPage