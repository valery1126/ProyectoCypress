/// <reference types="Cypress" />

import { loginPage } from '../../page-objects/loginPage';
import { transactionPage } from '../../page-objects/transactionPage';

describe('Transaction Request Test', () => {
    beforeEach(() => {

      cy.intercept('POST', '/login').as('login');
      loginPage.visit();
    });
  
    context('Positive Scenarios', () => {
        it('should create new transaction', () => {

            loginPage.typeCredentials({
            username: Cypress.env('katharinaUser'),
            password: Cypress.env('katharinaPassword'),
            });
            loginPage.clickSignIn();
            cy.contains(Cypress.env('katharinaUser')).should('be.visible');

            transactionPage.clickNewTransaction();
            transactionPage.clickSelectContact();
            transactionPage.typeCredentials({
                amount:'1000',
                note:'Request Test',
            });
            
            transactionPage.clickRequest();

            cy.wait(1000);

            cy.get(transactionPage.elements.getAlertSuccess).should('be.visible');
        });

    });
    
});