describe('StudyNight Forms Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/index.html');
  });

  it('displays the Add New Set form when toggle button is clicked', () => {
    cy.get('[data-cy="card-set-link"]').click();
    cy.get('[data-cy="toggle_form"]').should('contain', 'Add New Set');
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('form[data-cy="set_form"]').should('not.have.class', 'notVisible');
    cy.get('form[data-cy="set_form"]').should('be.visible');
    cy.get('form[data-cy="set_form"] input#titleInput').should('exist');
  });

  it('displays the Add New Card form when toggle button is clicked on flashcards page', () => {
    cy.get('[data-cy="card-set-link"]').click();
    cy.get('.cardSets').first().click();
    cy.get('[data-cy="toggle_form"]').should('contain', 'Add New Card');
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('form').should('be.visible');
  });

  it('shows error when trying to create set with empty input', () => {
    cy.get('[data-cy="card-set-link"]').click();
    cy.get('[data-cy="toggle_form"]').click();

    cy.get('form[data-cy="set_form"]').should('not.have.class', 'notVisible');
    cy.get('form[data-cy="set_form"]').should('be.visible');

    cy.get('form[data-cy="set_form"] input#titleInput').clear();

    cy.get('form[data-cy="set_form"]').submit();

    cy.contains('TITLE CANNOT BE EMPTY').should('be.visible');
  });
});
