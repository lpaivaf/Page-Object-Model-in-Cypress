// Arquivo de ações para a página Login

import { elements as el } from "./elements"; //importa o elemento e apelida de "el" de ./elements

class Login { //classe (definição)

    visitarPagina() { //método 
        cy.visit('https://www.saucedemo.com/v1/'); //visita a página
    }

    preencherCredenciaisValidas() { //método
        // cy.get('[data-test="username"]').type('standard_user');
        cy.get(el.username).type('standard_user'); //usa o "el" e busca o caminho do user name
        // cy.get('[data-test="password"]').type('secret_sauce');
        cy.get(el.password).type('secret_sauce');
        // cy.get('[data-test="login-button"]').click();
        cy.get(el.loginButton).click();
    }

}

export default new Login(); //exporta a classe instanciada