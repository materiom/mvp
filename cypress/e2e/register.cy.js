///<reference types="Cypress" />
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

  it("has working link to login", () => {
    cy.viewport("macbook-15");
    cy.visit("register");
    cy.contains("Login").click();
    cy.url().should("include", "/login");
  });

});
