/// <reference types="cypress" />

class FormValues {
  elements = {
    nameInput: () => cy.get('#formNome'),
    suggestionInput: () => cy.get('#elementosForm\\:sugestoes')
  }

  typeName(text) {
    if(!text) return
    this.elements.nameInput().type(text)
  }

  typeSuggestion(text) {
    if(!text) return
    this.elements.suggestionInput().type(text)
  }
}

const form = new FormValues()

describe('Work with text fields', () => {
  const input = {
    name: 'Tainã',
    sobrenome: 'Pino',
    suggestion: 'Minha sugestão está descrita aqui...'
  }

  it('Given I am on the page', () => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
  })

  it(`When I enter ${input.name} in the name field`, () => {
    form.typeName(input.name)
  })

  it(`Then I should have the text ${input.name} in value of name field`, () => {
    form.elements.nameInput().should('have.value', input.name)
  })

  it(`Then I type ${input.suggestion} in text area field`, () => {
    form.typeSuggestion(input.suggestion)
  })

  it(`Then I should have the text ${input.suggestion} in value of suggestion field`, () => {
    form.elements.suggestionInput().should('have.value', input.suggestion)
  })
})