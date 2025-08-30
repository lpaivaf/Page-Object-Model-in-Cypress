import { elements as el } from "./elements";

class Checkout {

    preencheDados() {
        cy.xpath(el.nome).type('Bart');
        cy.xpath(el.sobrenome).type('Simpson');
        cy.xpath(el.cep).type('999666');
    }

    continueBtn() {
        cy.xpath(el.continueBotão).click()
        cy.url('eq', 'https://www.saucedemo.com/v1/checkout-step-two.html')
    };

    verificaCompra() {
        cy.xpath(el.pruduto3).should('exist')
        cy.xpath(el.produto5).should('exist')
    }

    finalizaCompra() {
        cy.xpath(el.finishButton).click()
    }

    validaCompra() {
        cy.url('eq', 'https://www.saucedemo.com/v1/checkout-complete.html')
        //cy.xpath(el.complete).should('exist')
        //cy.xpath(el.complete).contains('THANK YOU FOR YOUR ORDER').should('be.visible')
        cy.screenshot('Compra finalizada com sucesso')
    }
}


export default new Checkout();