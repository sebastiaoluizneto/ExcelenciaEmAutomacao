// cypress/e2e/login.cy.js
import { faker } from '@faker-js/faker';

describe('Login de usuário', () => {
  let userData;

  before(() => {
    // Cadastra o usuário e guarda os dados
    cy.registerNewUser().then(() => {
      userData = Cypress.env('newUser');
    });
    cy.get('a[href="/logout"]').click();
  });

  it('Deve realizar login com sucesso', () => {
    // Usa os dados do usuário cadastrado
    cy.loginUser(userData.email, userData.password);
    cy.contains('Logged in as').should('be.visible');
  });
});