/// <reference types="cypress" />


describe('Work with link', () => {
  beforeEach(() => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
  })

  it('Links', () => {
    cy.get('[href="#"]').click()
    cy.get('#resultado').should('have.text', 'Voltou!')

    cy.reload()
    cy.get('#resultado').should('not.have.text', 'Voltou!')
    cy.contains('Voltar').click()
    cy.get('#resultado').should('have.text', 'Voltou!')
  })
})