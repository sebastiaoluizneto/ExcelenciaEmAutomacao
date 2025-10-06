// Importa os comandos personalizados definidos em commands.js
import '@shelex/cypress-allure-plugin';
import './commands';

// Evita que falhas não tratadas no site quebre o teste
Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorna false para o Cypress ignorar o erro da aplicação
  return false
})

// Configuração global opcional: limpa cookies e storage antes de cada teste
beforeEach(() => {
  cy.clearCookies()
  cy.clearLocalStorage()
})
