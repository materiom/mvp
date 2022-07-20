// line below for VSCode intellisense
///<reference types="Cypress" />

// describe the test suite
describe("Materiom Register Form", () => {
  it("loads successfully", () => {
    cy.viewport("macbook-15");
    cy.visit("register");
    cy.get('[data-cy="register-form"]')
      .should("be.visible")
      .within(() => {
        cy.get("h1").should("contain.text", "Get Started");
        cy.get("h1").should("contain.text", "Already have an account?");
        cy.get('[data-cy="login-link"]')
          .should("be.visible")
          .should("contain.text", "Login");
      });
  });


  it("check all links to sites", () => {
    cy.viewport("macbook-15");
    cy.visit("/register");
    cy.get('a:not([href*="mailto:"])')
      .not('[target*="_blank"]')
      .each((page) => {
        const href = page.prop("href");
        cy.visit(href);
        cy.url().should("include", href);
        cy.get('[data-cy="404"]')
          .should("not.exist")
        cy.go('back')
      });
    })
  // it("has working link to login", () => {
  //   cy.viewport("macbook-15");
  //   cy.visit("register");
  //   cy.contains("Login").click();
  //   cy.url().should("include", "/login");
  // });

});
