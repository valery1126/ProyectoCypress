/// <reference types="Cypress" />

import { loginPage } from '../../page-objects/loginPage';

describe('Login Tests', () => {
    beforeEach(() => {

      cy.intercept('POST', '/login').as('login');
      loginPage.visit();
    });
  
    context('Positive Scenarios', () => {
      it('should log in', () => {

        loginPage.typeCredentials({
          username: Cypress.env('katharinaUser'),
          password: Cypress.env('katharinaPassword'),
        });
        loginPage.clickSignIn();
        cy.url().should('include', '/');
        cy.contains(Cypress.env('katharinaUser')).should('be.visible');



      });
    });
    
  });