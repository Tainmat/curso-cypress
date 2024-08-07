/// <reference types="cypress" />

class Buttons {
  elements = {
    cliqueMeButton: () => cy.get('#buttonSimple')
  }

  clickInCliqueMeButton() {
    this.elements.cliqueMeButton().click()
  }
}

const buttons = new Buttons()

describe('Cypress basics', () => {
  it.only('Should visit a page and assert title', () => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')

    // const title = cy.title()
    // console.log(title)

    cy.pause()

    cy.title().should('be.equal', 'Campo de Treinamento')
    cy.title().should('contain', 'Campo')

    cy.title()
      .should('be.equal', 'Campo de Treinamento')
      .and('contain', 'Campo')

    //TODO: imprimir o log no console
    //TODO: escrever o log em um campo de texto
  })

  it('Should find and interact with an element', () => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')

    buttons.clickInCliqueMeButton()
    buttons.elements.cliqueMeButton().should('have.value', 'Obrigado!')
  })
})