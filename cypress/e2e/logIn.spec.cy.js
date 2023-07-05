describe("Log-in e2e", () => {
  it("should visit homepage and redirect to log-in page, then fullfil fields with data and login sucessfuly", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="email-input"]').type("robson@gmail.com");
    cy.get('[data-cy="password-input"]').type("rob123");
    cy.get('[data-cy="submit-button"]').click();
  });
});
