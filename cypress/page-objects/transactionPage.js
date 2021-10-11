/// <reference types="Cypress" />

class TransactionPage {
    url = '/transaction/new';
    elements = {
      getNewTransactionButton: () => cy.get('[data-test="nav-top-new-transaction"]'),
      getContact: () => cy.get('[data-test="user-list-item-qywYp6hS0U"]'),
      getAmount: () => cy.get('#amount'),
      getNote: () => cy.get('#transaction-create-description-input'),
      getRequestButton: () => cy.get('[data-test="transaction-create-submit-request"]'),
      getPayButton: () => cy.get('[data-test="transaction-create-submit-payment"]'),
      getAnotherTransactionButton: () => cy.get('[data-test="new-transaction-create-another-transaction"]'),
      getAlertSuccess: () => cy.get('[data-test="alert-bar-success"]')
    };
  
    visit() {
      cy.visit(this.url);
    }
  
    typeCredentials({ amount = ' ', note = ' ' } = {}) {
      this.elements.getAmount().clear().type(amount);
      this.elements.getNote().clear().type(note);
    }
  
    clickNewTransaction() {
      this.elements.getNewTransactionButton().click();
    }

    clickSelectContact() {
        this.elements.getContact().click();
      }

      clickRequest() {
        this.elements.getRequestButton().click();
      }

      clickPayment() {
        this.elements.getPayButton().click();
      }



  }
  
  export const transactionPage = new TransactionPage();