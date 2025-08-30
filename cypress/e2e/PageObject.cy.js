//Arquivo de teste - Spec

import Login from '../pages/login/index' //importa a classe Login
import Inventory from '../pages/inventory/index';
import Cart from '../pages/cart/index'
import Checkout from '../pages/checkout/index';


describe('Teste E2E', () => {
  beforeEach(() => { //faça isto antes
    Login.visitarPagina() //chama a classe em login/index.js
    Login.preencherCredenciaisValidas() // preenche os dados
    Inventory.validaAcessoInventory() //valida o acesso a página
  });


  it('Compra realizada com sucesso', () => {
    //AÇÃO - chamar o método
    Inventory.filtroInventory()
    Inventory.selecionaItens()
    Inventory.contemItensCarrinho()
    //Validação
    Inventory.abreCarrinho()
    //Remove item
    Cart.removeItemCarrinho()
    //Validação
    Cart.validaRemoveItem()
    //Vai para o checkout
    Cart.abreCheckout()
    //Preenche os dados
    Checkout.preencheDados()
    //Vai para a próxima página
    Checkout.continueBtn()
    //Verifica os itens da compra
    Checkout.verificaCompra()
    //Finalizar
    Checkout.finalizaCompra()
    //Confirmação de compra
    Checkout.validaCompra()
  })
})


