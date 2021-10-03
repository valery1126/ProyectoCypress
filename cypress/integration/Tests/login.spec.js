/// <reference types="Cypress" />

describe('Login Tests', () => {
    beforeEach(() => {

      cy.intercept('POST', '/login').as('login');
      cy.visit('/signin');
    });
  
    context('Positive Scenarios', () => {
      it('should log in', () => {
        cy.get('#username').type(Cypress.env('katharinaUser'));
        cy.get('#password').type(Cypress.env('katharinaPassword'));
        cy.get('[data-test="signin-submit"]').click();
        cy.wait('@login');
        cy.url().should('include', '/');
        cy.contains(Cypress.env('katharinaUser')).should('be.visible');
      });
    });
    
  });