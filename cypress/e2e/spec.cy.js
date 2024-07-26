describe('buscador de cep', () => {
  it('Buscando CEP', () => {
    cy.visit('https://gaabriellogan.github.io/buscador-cep/')
    cy.get('#cep-input').type('13800316')
    cy.get('button').click()
    cy.contains('Mogi Mirim').should('be.visible')
  });
})