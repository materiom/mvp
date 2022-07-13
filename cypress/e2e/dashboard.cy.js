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

  // find all links in the page that aren't
  // mail or external links and clicks them 
  // and checks if they direct to the correct URL 
  it("check all links to sites", () => {
    cy.viewport("macbook-15");
    cy.visit("/");
    cy.get('a:not([href*="mailto:"])')
      .not('[target*="_blank"]')
      .each((page) => {
        const href = page.prop("href");
        cy.visit(href);
        cy.url().should("include", href);
      });
  });

  // for external links best practice is to
  // check for href and target attributes to
  // avoid CORS
  it("has working link to twitter", () => {
    cy.viewport("macbook-15");
    cy.visit("/");
    cy.get('[data-cy="twitterLink"]')
      .should("have.attr", "href", "https://twitter.com/materiom_")
      .should("have.attr", "target", "_blank");
  });

  // for email links the best we can do is check
  // the href is correct and if that doesn't work
  // it's probably a browser level error
  it("has working link to open support email", () => {
    cy.viewport("macbook-15");
    cy.visit("/");
    cy.get('[data-cy="supportLink"]').should(
      "have.attr",
      "href",
      "mailto:hello@materiom.org"
    );
  });
});
