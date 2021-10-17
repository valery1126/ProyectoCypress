// <reference types="Cypress" />

import { loginPage } from '../../page-objects/loginPage';
import { homePage } from '../../page-objects/homePage';

describe('Transaction List Test', () => {
    beforeEach(() => {

      cy.intercept('POST', '/login').as('login');
      loginPage.visit();
    });
  
    context('Positive Scenarios', () => {
        it('should like and comment a transaction', () => {

            loginPage.typeCredentials({
            username: Cypress.env('katharinaUser'),
            password: Cypress.env('katharinaPassword'),
            });
            loginPage.clickSignIn();
            cy.contains(Cypress.env('katharinaUser')).should('be.visible');

            homePage.clickSelectTransaction();
            homePage.clickLike();
            homePage.typeInfo({
                comment:'Like and Comment Test'
            });
            
            homePage.clickEnter();

            homePage.elements.getLikeCount().should('have.text','1 ');

        });

    });
    
});