describe("Add Post e2e", () => {
  it("should visit homepage and redirect to log-in page", () => {
    cy.visit("http://localhost:3000");
  });
  it("should visit log-in page and fullfill form sucessfuly", () => {
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="email-input"]').type("robson@gmail.com");
    cy.get('[data-cy="password-input"]').type("rob123");
    cy.get('[data-cy="submit-button"]').click();
  });
  it("should visit cms page and redirect to posts page", () => {
    cy.get('[data-cy="cms-button"]').click();
    cy.get('[data-cy="posts-button"]').click();
  });
  it("should fullfill form sucessfuly", () => {
    cy.get('[data-cy="title-input"]').type("Test title");
    cy.get('[data-cy="content-input"]').type("Test content");
    cy.get('[data-cy="select-input"]').select("Mundial");
    cy.get('[data-cy="submit-button"]').click();
  });
  it("should visit homepage and check if post was added", () => {
    cy.get('[data-cy="home-button"]').click();
    cy.get('[data-cy="post-title"]').should("contain", "Test title");
  });
});
