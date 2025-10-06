// cypress/e2e/contato.cy.js
import { faker } from '@faker-js/faker';

describe('Formulário de Contato', () => {
  it('Deve enviar o formulário de contato com sucesso', () => {
    const nome = faker.person.fullName();
    const email = faker.internet.email();
    const assunto = faker.lorem.words(3);
    const mensagem = faker.lorem.sentence();

    cy.submitContactForm(nome, email, assunto, mensagem);

    cy.on('window:alert', (str) => {
      expect(str).to.contain('Success! Your details have been submitted successfully.');
    });
  });
});
