/// <reference types="cypress" />

describe('REST API Test with Cypress', () => {

  it('API Test - Validate Headers', () => {
    cy.request('http://localhost:3000/board/54962565378').as('board');
    cy.get('@board')
      .its('headers')
      .its('content-type')
      .should('include', 'text/html; charset=UTF-8')
  })

  //validate HTTP 200 when request api to board
  it('API Test - Validate Status Code', () => {
    cy.request('http://localhost:3000/board/54962565378').as('board');
    cy.get('@board').its('status').should('equal', 200);
  })

  //validate HTTP 201 when new list created
  it('API Test - Validate Status Code for new resource', () => {
    cy.visit('http://localhost:3000');
    cy.intercept(
      {
        method: 'POST', 
        url: 'api/lists' 
       }, (req) => {
         req.reply( (res) => {
           console.log(req)
         })
         
        },).as('postapi') 
    cy.addList('New List') //custom command
    cy.wait('@postapi')
    .then((board) => {
      expect(board.response.statusCode).to.eq( 201)
    })
  })



})
