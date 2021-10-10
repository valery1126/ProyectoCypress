/// <reference types="Cypress" />

class BankAccountPage {
  url = '/bankaccounts';
  elements = {
    getBankAccountsButton: () => cy.get('[data-test="sidenav-bankaccounts"]'),
    getNewAccountButton: () => cy.get('[data-test="bankaccount-new"]'),
    getBankName: () => cy.get('#bankaccount-bankName-input'),
    getRoutingNumber: () => cy.get('#bankaccount-routingNumber-input'),
    getAccountNumber: () => cy.get('#bankaccount-accountNumber-input'),
    getSaveButton: () => cy.get('[data-test="bankaccount-submit"]')
  };

  visit() {
    cy.visit(this.url);
  }

  typeCredentials({ BankName = ' ', RoutingNumber = ' ', AccountNumber = ' ' } = {}) {
    this.elements.getBankName().clear().type(BankName);
    this.elements.getRoutingNumber().clear().type(RoutingNumber);
    this.elements.getAccountNumber().clear().type(AccountNumber);
  }

  clickBankAccounts() {
    this.elements.getBankAccountsButton().click();
  }

  clickNewAccount() {
    this.elements.getNewAccountButton().click();
  }


  clickSaveAccount() {
    this.elements.getSaveButton().click();
  }

}

export const bankAccountPage = new BankAccountPage();