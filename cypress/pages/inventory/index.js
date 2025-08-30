import { elements as el } from "./elements";

class Inventory {

    validaAcessoInventory() {
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
        // cy.screenshot('acesso a página de inventário')
    }

    filtroInventory() {
        cy.get(el.filtroInventario).select('Name (Z to A)')
    }

    selecionaItens() {
        cy.get(el.produto1).click();
        cy.get(el.produto3).click();
        cy.get(el.produto5).click();

    }

    contemItensCarrinho() {
        cy.get(el.cart).should('contain', '3'); // Confirma que foi adicionado
    }

    abreCarrinho() {
        cy.get(el.cart).click()
        cy.url('eq', 'https://www.saucedemo.com/v1/cart.html')
        // cy.screenshot('abre carrinho')
    }

}

export default new Inventory()