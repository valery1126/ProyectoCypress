/// <reference types="Cypress" />

import { registerPage } from '../../page-objects/registerPage';
import { loginPage } from '../../page-objects/loginPage';

describe('Register User Tests', () => {
    beforeEach(() => {
      registerPage.visit();
    });
  
    context('Positive Scenarios', () => {
      it('should register user', () => {

        registerPage.typeCredentials({
          firstname: Cypress.env('user_Name'),
          lastname: Cypress.env('user_LastName'),
          username: Cypress.env('user_Username'),
          password: Cypress.env('user_Password'),
          confirmPassword: Cypress.env('user_Password')
        });
        registerPage.clickSignUp();

        loginPage.typeCredentials({
          username: Cypress.env('user_Username'),
          password: Cypress.env('user_Password'),
        });
        loginPage.clickSignIn();
        cy.url().should('include', '/');
        cy.contains(Cypress.env('user_Username')).should('be.visible');

       
      });


    });
    
  });