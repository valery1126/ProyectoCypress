/// <reference types="Cypress" />

describe('Register User Tests', () => {
    beforeEach(() => {
      cy.visit('/signup');
    });
  
    context('Positive Scenarios', () => {
      it('should register user', () => {
        cy.get('#firstName').type(Cypress.env('user_Name'));
        cy.get('#lastName').type(Cypress.env('user_LastName'));    
        cy.get('#username').type(Cypress.env('user_Username'));
        cy.get('#password').type(Cypress.env('user_Password'));
        cy.get('#confirmPassword').type(Cypress.env('user_Password'));
        cy.get('[data-test="signup-submit"]').click();


        cy.get('#username').type(Cypress.env('user_Username'));
        cy.get('#password').type(Cypress.env('user_Password'));
        cy.get('[data-test="signin-submit"]').click();
        cy.contains(Cypress.env('user_Username')).should('be.visible');
        cy.url().should('include', '/');
       
      });


    });
    
  });