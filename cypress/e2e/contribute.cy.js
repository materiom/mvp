///<reference types="Cypress" />
describe("Materiom Contribution Page", () => {

  // find all links in the page that aren't
  // mail or external links and clicks them
  // and checks if they direct to the correct URL
  it("check all links to sites", () => {
    cy.viewport("macbook-15");
    cy.visit("/contribute");
    cy.get('a:not([href*="mailto:"])')
      .not('[target*="_blank"]')
      .each((page) => {
        const href = page.prop("href");
        cy.visit(href);
        cy.url().should("include", href);
        cy.get('[data-cy="404"]').should("not.exist");
        cy.go("back");
      });
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
