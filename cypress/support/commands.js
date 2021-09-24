require('@4tw/cypress-drag-drop')
import 'cypress-file-upload';
import "cypress-real-events/support";

Cypress.Commands.add('addList', (input) => {

  cy.get('[data-cy=board-item]').click().wait(500);
  cy.get('.CreateList').click();
  
  cy.get('[data-cy=add-list-input]').type(input + '{enter}');
  

})