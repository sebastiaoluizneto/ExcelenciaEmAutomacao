// cypress/e2e/adicionarProduto.cy.js
describe('Adicionar produto ao carrinho', () => {
  it('Deve buscar um produto e adicioná-lo ao carrinho com sucesso', () => {
    const produto = 'T-Shirt';
    
    cy.searchAndAddToCart(produto);
    

    
    // ✅ Agora verifica diretamente se o produto está no carrinho
    cy.contains(produto).should('be.visible');
  });
});