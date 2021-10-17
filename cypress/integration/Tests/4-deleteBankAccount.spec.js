/// <reference types="Cypress" />

import { loginPage } from '../../page-objects/loginPage';
import { bankAccountPage } from '../../page-objects/bankAccountPage';

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
        cy.contains(Cypress.env('katharinaUser')).should('be.visible');

        bankAccountPage.clickBankAccounts();      
        bankAccountPage.clickDeleteAccount();

        cy.contains("(Deleted)").should('be.visible');



      });
    });
    
  });