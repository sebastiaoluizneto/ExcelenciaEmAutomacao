// cypress/e2e/removerProduto.cy.js
describe('Remover produto do carrinho', () => {
  it('Deve adicionar e remover um produto do carrinho', () => {
    cy.searchAndAddToCart('Dress');
    
    
    
    // ✅ Já estamos na página do carrinho, pode remover o produto
    cy.get('.cart_quantity_delete').click();

    cy.contains('Cart is empty!').should('be.visible');
  });
});