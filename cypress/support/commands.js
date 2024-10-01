// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
Cypress.on('uncaught:exception', (err, runnable) => {
    // Loguea la excepción para fines de depuración
    console.error('Excepción no controlada:', err.message);
  
    // Retorna false para evitar que Cypress falle la prueba
    return false;
  });
  
Cypress.Commands.add("login", ({ correo, password }) => {

    cy.visit('https://front-prueba-eosin.vercel.app/', { failOnStatusCode: false });
    // datos
    cy.get('#email').type(`${correo}`);
    cy.get('input[id="password"]').type(`${password}`);
    // Botón para iniciar sesión.
    cy.get(':nth-child(3) > .flex').click();
  });