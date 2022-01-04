const el = require('./elements').ELEMENTS

const articleName = 'Artigo de Testes' + new Date().getTime()

class Articles {
  acessarOFormulario () {
    cy.get(el.BotaoNovoArtigo).click()
  }

  preencherOFormulario () {
    cy.get(el.InputTitle).type(articleName)
    cy.get(el.InputDescription).type('É um Teste End to End')
    cy.get(el.InputBody).type('Corpo do texto do artigo que está sendo criado')
    cy.get(el.InputTagField).type('cypress')
  }

  publicarOFormulario () {
    cy.contains('button', 'Publish Article').click()
  }

  validacaoDePublicacao () {
    cy.get('h1').should('have.text', articleName)
  }
}

export default new Articles()
