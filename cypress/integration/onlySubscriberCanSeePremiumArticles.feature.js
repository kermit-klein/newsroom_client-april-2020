describe("user logged in as", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles/3",
      response: "fixture:single_premium_article.json",
    });
    cy.visit("/article/3");
  });
  
  it("subscriber doesn't see the premium blocker", () => {
    cy.logIn("subscriber");
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles/3",
      response: "fixture:full_single_premium_article.json",
    });
    cy.visit("/article/3");
    cy.get("#premium-blocker").should("not.exist");
  });

  it("user can see the premium blocker", () => {
    cy.logIn("user");
    cy.visit("/article/3");
    cy.get("#premium-blocker").should("be.visible");
  });
});
