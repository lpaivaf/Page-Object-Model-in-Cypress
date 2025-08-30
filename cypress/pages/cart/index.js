import { elements as el } from "../cart/elements";

class Cart {
    removeItemCarrinho() {
        cy.get(el.removeItem).click()
    }

    validaRemoveItem() {
        cy.get(el.cart).should('contain', '2');
    }

    abreCheckout() {
        cy.xpath(el.checkoutButton).click()
        cy.url('eq', 'https://www.saucedemo.com/v1/checkout-step-one.html')
        cy.contains('Checkout: Your Information').should('be.visible')
    }
}

export default new Cart();