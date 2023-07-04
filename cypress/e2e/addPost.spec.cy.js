describe("Add Post e2e tests", () => {
  it("should log-in and add post succesfully", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="email-input"]').type("robson@gmail.com");
    cy.get('[data-cy="password-input"]').type("rob123");
    cy.get('[data-cy="submit-button"]').click();
    cy.get('[data-cy="cms-button"]').click();
    cy.get('[data-cy="posts-button"]').click();
    cy.get('[data-cy="title-input"]').type("Test title");
    cy.get('[data-cy="content-input"]').type("Test content");
    cy.get('[data-cy="select-input"]').select("Mundial");
    cy.get('[data-cy="submit-button"]').click();
    cy.get('[data-cy="home-button"]').click();
    cy.get('[data-cy="post-title"]').should("contain", "Test title");
  });
});
