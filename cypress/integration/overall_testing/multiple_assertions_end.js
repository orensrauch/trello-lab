/// <reference types="cypress" />

beforeEach(() => {
  cy
    .visit('http://localhost:3000/')
  cy.get('[data-cy=board-item]').click();
})

it('Multiple assertions', () => {

  cy.get('[data-cy=task]')
    .should( item => {
      console.log(item)
      if (item.length <= 2) {
        throw new Error('Not enough elements!')
      }
      expect(item[0]).to.contain.text('bread')
      expect(item[1]).to.contain.text('milk')
      expect(item[2]).to.contain.text('water')
      expect(item[3]).to.contain.text('buy groceries')
    }).reload(true)

})



