// cypress/e2e/cadastro.cy.js
describe('Cadastro de novo usuário', () => {
  it('Deve cadastrar um usuário com sucesso', () => {
    cy.registerNewUser();
    
    // Apenas verifica se está logado no final
    // O comando já faz todo o processo de cadastro e validação
  });
});