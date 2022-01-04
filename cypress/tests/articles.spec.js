/// <reference types="cypress" />

import articles from '../support/pages/articles'

describe('Articles', () => {
  beforeEach(() => {
    cy.login()

    cy.visit('/')
  })
  it('Castrasto de novo artigo com Sucesso', () => {
    articles.acessarOFormulario()

    articles.preencherOFormulario()

    articles.publicarOFormulario()

    articles.validacaoDePublicacao()
  })
})
