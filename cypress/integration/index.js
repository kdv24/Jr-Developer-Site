describe('Site', () => {
  it('renders and can navigate between pages', () => {
    cy.visit('/')
      .getByText(/page 2/i)
      .click()
      .location('pathname')
      .should('eq', '/page-2/')
      .getByText(/homepage/i)
      .click()
      .location('pathname')
      .should('eq', '/');
  });
});
