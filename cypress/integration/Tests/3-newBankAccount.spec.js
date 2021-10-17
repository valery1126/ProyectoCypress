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
        bankAccountPage.clickNewAccount();
        bankAccountPage.typeInfo({
          BankName: Cypress.env('bankName'),
          RoutingNumber: Cypress.env('routingNumber'),
          AccountNumber: Cypress.env('accountNumber')
        });

        bankAccountPage.clickSaveAccount();

        cy.contains(Cypress.env('bankName')).should('be.visible');



      });
    });
    
  });