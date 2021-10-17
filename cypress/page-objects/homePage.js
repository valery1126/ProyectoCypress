// <reference types="Cypress" />

class HomePage {
    url = '/signin';

    elements = {
      getSelectTransactionButton: () => cy.get('[data-test^="transaction-item"]').first(),
      getLikeTransactionButton: () => cy.get('[data-test^="transaction-like-button"]'),
      getComment: () => cy.get('[data-test^="transaction-comment-input"]'),
      getLikeCount: ()=> cy.get('[data-test^="transaction-like-count"]'),
      getFirstComment: ()=> cy.get('.MuiTypography-displayBlock')
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
        this.elements.getSelectTransactionButton().click({force:true});
      }

      clickEnter() {
        this.elements.getComment().type('{enter}');
      }

      getLikeCountLabel(){
        this.elements.getLikeCount();
      }


  }
  
  export const homePage = new HomePage();