/// <reference types="cypress" />

class FormValues {
  elements = {
    body: () => cy.get('body'),
    span: () => cy.get('span'),
    footerText: () => cy.get('.facilAchar')
  }
}

const form = new FormValues()

describe('Work with basic elements', () => {
  before(() => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
  })

  it('Text', () => {
    form.elements.body().should('contain', 'Cuidado')

    form.elements.span().should('contain', 'Cuidado')

    form.elements.footerText().should('have.text', 'Cuidado onde clica, muitas armadilhas...')
  })
})