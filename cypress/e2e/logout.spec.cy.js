describe("Log-out e2e", () => {
  it("should visit homepage and logout sucessfuly", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=logout-button]").click();
    cy.get("[data-cy=login-button]").should("contain", "Log in");
  });
});
