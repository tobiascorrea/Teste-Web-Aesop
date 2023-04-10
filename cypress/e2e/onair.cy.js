
describe('Page status verification', () => {
    it('The web page should be online and have the correct title', () => {
        cy.visit('/');
        cy.title().should('eq', 'Aesop Brasil');
        cy.get('a.natds35[href="/cadastre-se"]').should('exist'); // check if the element exists
        cy.get('a.natds35[href="/login?redirect=%2F"]').should('exist');
    });
});
  