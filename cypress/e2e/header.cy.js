// line below for VSCode intellisense
///<reference types="Cypress" />

// describe the test suite
describe("Materiom Header", () => {
  it("loads profile picture", () => {
    cy.viewport("macbook-15");
    cy.visit("/");
    cy.get(".profile-header-cy-TEST")
      .should("be.visible")
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
});
