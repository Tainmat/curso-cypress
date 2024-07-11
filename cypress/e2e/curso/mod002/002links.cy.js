/// <reference types="cypress" />

describe('Work with link', () => {
  it('Links', () => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')

    cy.get('[href="#"]').click()
    cy.get('#resultado').should('have.text', 'Voltou!')

    cy.reload()
    cy.get('#resultado').should('not.have.text', 'Voltou!')
    cy.contains('Voltar').click()
    cy.get('#resultado').should('have.text', 'Voltou!')
  })
})