// cypress/support/commands.js
import 'cypress-file-upload';
import { faker } from '@faker-js/faker';

// 🔹 Comando para registrar um novo usuário
Cypress.Commands.add('registerNewUser', () => {
  const name = faker.person.firstName();
  const email = faker.internet.email();
  const password = faker.internet.password(10);

  // Guarda os dados para reutilizar depois, se precisar
  Cypress.env('newUser', { name, email, password });

  cy.visit('/');
  cy.get('a[href="/login"]').click();

  // Formulário de cadastro inicial
  cy.get('input[data-qa="signup-name"]').type(name);
  cy.get('input[data-qa="signup-email"]').type(email);
  cy.get('button[data-qa="signup-button"]').click();

  // Preenchendo todos os campos do formulário de criação de conta
  cy.get('#id_gender1').check();
  cy.get('#password').type(password);

  cy.get('#days').select('10');
  cy.get('#months').select('May');
  cy.get('#years').select('1992');
  cy.get('#newsletter').check();
  cy.get('#optin').check();

  cy.get('#first_name').type(faker.person.firstName());
  cy.get('#last_name').type(faker.person.lastName());
  cy.get('#company').type(faker.company.name());
  cy.get('#address1').type(faker.location.streetAddress());
  cy.get('#address2').type(faker.location.secondaryAddress());
  cy.get('#country').select('United States');
  cy.get('#state').type(faker.location.state());
  cy.get('#city').type(faker.location.city());
  cy.get('#zipcode').type(faker.location.zipCode());
  cy.get('#mobile_number').type(faker.phone.number('###########'));

  cy.get('button[data-qa="create-account"]').click();

  // Validação do sucesso
  cy.get('h2[data-qa="account-created"]').should('contain.text', 'Account Created');
  cy.get('a[data-qa="continue-button"]').click();

  // Confirma se o login foi feito
  cy.contains('Logged in as').should('be.visible');
});


// 🔹 Comando para login de usuário existente
Cypress.Commands.add('loginUser', (email, password) => {
  cy.visit('/');
  cy.get('a[href="/login"]').click();
  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(password);
  cy.get('button[data-qa="login-button"]').click();
  cy.contains('Logged in as').should('be.visible');
});


// 🔹 Comando para pesquisar e adicionar produto ao carrinho

Cypress.Commands.add('searchAndAddToCart', (productName) => {
  cy.visit('/products');
  cy.get('#search_product').type(productName);
  cy.get('#submit_search').click();
  cy.get('.productinfo').first().contains('Add to cart').click();
  cy.get('.modal-content').should('contain.text', 'Added!');
  cy.get('.close-modal').click();
  
  // Navegar diretamente para o carrinho
  cy.visit('/view_cart');
});

// 🔹 Comando para enviar o formulário de contato
Cypress.Commands.add('submitContactForm', (name, email, subject, message) => {
  cy.visit('/contact_us');
  cy.get('input[data-qa="name"]').type(name);
  cy.get('input[data-qa="email"]').type(email);
  cy.get('input[data-qa="subject"]').type(subject);
  cy.get('textarea[data-qa="message"]').type(message);
  cy.get('input[name="upload_file"]').attachFile('example.txt');
  cy.get('input[data-qa="submit-button"]').click();
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Success! Your details have been submitted successfully.');
  });
});