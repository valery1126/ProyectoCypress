// <reference types="Cypress" />

class HomePage {
    url = '/signin';
    elements = {
      getSelectTransactionButton: () => cy.get('[data-test="transaction-item-nvDYVsPSE"]'),
      getLikeTransactionButton: () => cy.get('[data-test="transaction-like-button-nvDYVsPSE"]'),
      getComment: () => cy.get('[data-test="transaction-comment-input-nvDYVsPSE"]'),

    };
  
    visit() {
      cy.visit(this.url);
    }
  
    typeInfo({ comment = ' ' } = {}) {
      this.elements.getComment().clear().type(comment);
    }
  
    clickLike() {
      this.elements.getLikeTransactionButton().click();
    }

    clickSelectTransaction() {
        this.elements.getSelectTransactionButton().click();
      }

      clickEnter() {
        this.elements.getComment().type('{enter}');
      }


  }
  
  export const homePage = new HomePage();