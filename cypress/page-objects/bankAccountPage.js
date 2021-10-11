/// <reference types="Cypress" />

class BankAccountPage {
  url = '/bankaccounts';
  elements = {
    getBankAccountsButton: () => cy.get('[data-test="sidenav-bankaccounts"]'),
    getNewAccountButton: () => cy.get('[data-test="bankaccount-new"]'),
    getBankName: () => cy.get('#bankaccount-bankName-input'),
    getRoutingNumber: () => cy.get('#bankaccount-routingNumber-input'),
    getAccountNumber: () => cy.get('#bankaccount-accountNumber-input'),
    getSaveButton: () => cy.get('[data-test="bankaccount-submit"]'),
    getDeleteButton: () => cy.get('.MuiListItem-gutters:nth-child(1) .MuiButton-label')
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

  clickDeleteAccount() {
    this.elements.getDeleteButton().click();
  }

}

export const bankAccountPage = new BankAccountPage();