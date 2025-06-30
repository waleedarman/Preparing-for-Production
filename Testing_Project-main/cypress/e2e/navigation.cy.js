describe('StudyNight App Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/index.html');
  });

  it('should display the header title', () => {
    cy.get('[data-cy=header]').should('contain.text', 'Study Night');
  });

  it('should navigate to About page when About link clicked', () => {
    cy.get('[data-cy=about-link]').click();
    cy.get('main').should('contain.text', 'About Study Night');
  });

  it('should navigate to Card Sets page when Card Sets link clicked', () => {
    cy.get('[data-cy=card-set-link]').click();
    cy.get('main').should('contain.text', 'Study Set Library');
  });
});
