## Teste E2E de Compra com Sucesso em Cypress

Este projeto demonstra um teste end-to-end (E2E) de um fluxo de compra com sucesso, implementado utilizando o framework de testes Cypress e o padrão de design Page Object Model (POM).

O objetivo é testar e validar o processo de compra desde a seleção do produto até a confirmação do pedido, garantindo que o fluxo de negócios principal esteja funcionando conforme o esperado.

## Tecnologias e Ferramentas

Cypress: Framework de testes E2E.

JavaScript: Linguagem de programação.

Page Object Model (POM): Padrão de design para organizar o código de testes de forma mais eficiente e reutilizável.

## Estrutura do Projeto

A estrutura de pastas segue a abordagem do Page Object Model para separar os seletores e as ações das páginas do fluxo de teste principal.

/cypress
├── e2e
│ └── PageObject.cy.js // Arquivo de teste que executa o fluxo de compra
├── fixtures
├── pages
│ ├── login // Page Object para a página inicial
│ ├── inventory // Page Object para a página de produtos
│ ├── cart // Page Object para a página do carrinho
│ └── checkout // Page Object para a página de checkout
├── screenshots
├── support
├── videos
├── node_modules
├── cypress.config.js
├── LICENCE
├── package-lock.json
├── package.json
└── README.md

## Funcionalidades Testadas

O teste E2E simula o seguinte fluxo de usuário:

Acessar a página principal da loja.

Navegar até a página do produto desejado.

Adicionar 3 produtos ao carrinho.

Remove 1 produto do carrinho

Navegar para a página de checkout.

Preencher as informações de pagamento e envio.

Finalizar a compra.

Verificar a tela de confirmação do pedido.

## Como Executar os Testes

Siga os passos abaixo para rodar os testes em sua máquina:

Clone o repositório:

Bash

git clone (https://github.com/lpaivaf/Page-Object-Model-in-Cypress.git)
Instale as dependências:

Bash

npm install
Abra o Cypress Test Runner:

Bash

npx cypress open
Isso abrirá a interface do Cypress, onde você pode selecionar e executar o teste compra-com-sucesso.cy.js.

Execute via linha de comando (modo headless):

Bash

npx cypress open - Este comando executa o teste em modo "dinamico" (com interface gráfica).

npx cypress run - Este comando executa o teste em modo "headless" (sem interface gráfica) e é ideal para ambientes de CI/CD.

## Contribuições

Sinta-se à vontade para abrir uma issue ou um pull request para sugerir melhorias, correções ou novas funcionalidades.
