///<reference types="Cypress" />
describe("Materiom Dashboard", () => {
  it("loads profile picture", () => {
    cy.viewport("macbook-15");
    cy.visit("/");
    cy.get(".profile-cy-TEST")
      .should("be.visible")
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  it("has working link to contribution portal", () => {
    cy.viewport("macbook-15");
    cy.visit("/");
    cy.contains("Make Contributions").click();
    cy.url().should("include", "/contribute");
  });

  it("has working link to data commons", () => {
    cy.viewport("macbook-15");
    cy.visit("/");
    cy.contains("ANALYSE").click();
    cy.url().should("include", "/analyse");
  });

  it("has working link to user directory", () => {
    cy.viewport("macbook-15");
    cy.visit("/");
    cy.contains("CONNECT").click();
    cy.url().should("include", "/connect");
  });

  it("has working link to profile", () => {
    cy.viewport("macbook-15");
    cy.visit("/");
    cy.contains("PROFILE").click();
    cy.url().should("include", "/profile");
  });
});
