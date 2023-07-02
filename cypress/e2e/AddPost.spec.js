describe("AddPost", () => {
  const baseUrl = "http://localhost:4200";

  it("should add a new post", () => {
    cy.visit(baseUrl);
    cy.get("button").contains("Log in").click();
  });
});
