// line below for VSCode intellisense
///<reference types="Cypress" />

// describe the test suite
describe("Materiom Login Form", () => {
  it("loads successfully", () => {
    cy.viewport("macbook-15");
    cy.visit("login");
    cy.get('[data-cy="login-form"]')
      .should("be.visible")
      .within(() => {
        cy.get("h1").should("contain.text", "Get Started");
        cy.get("a")
          .should("be.visible")
          .should("contain.text", "Register here");
        cy.get("a")
          .should("be.visible")
          .should("contain.text", "Forgotten password");
      });
  });

  it("has working password reset link", () => {
    cy.viewport("macbook-15");
    cy.visit("login");
    cy.contains("Register here").click();
    cy.url().should("include", "/register");
  });

  it("has working register link", () => {
    cy.viewport("macbook-15");
    cy.visit("login");
    cy.contains("Forgotten password").click();
    cy.url().should("include", "/password-reset");
  });
});
