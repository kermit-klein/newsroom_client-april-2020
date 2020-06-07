describe.only("user logged in as", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles/3",
      response: "fixture:single_premium_article.json",
    });
    cy.visit("/article/3");
  });
  describe("subscriber", () => {
    beforeEach(() => {
      cy.logIn("subscriber");
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/articles/3",
        response: "fixture:full_single_premium_article.json",
      });
      cy.visit("/article/3");
    });

    it("doesn't see the premium blocker", () => {
      cy.get("#premium-blocker").should("not.exist");
    });

    it("can see the article in full", () => {
      cy.get("#article-3-body").should(
        "contain",
        "This text is written after the first 300 characters."
      );
    });
  });

  describe("user", () => {
    beforeEach(() => {
      cy.logIn("user");
      cy.visit("/article/3");
    });

    it("can see the premium blocker", () => {
      cy.get("#premium-blocker").should("be.visible");
    });

    it("can't see the article in full", () => {
      cy.get("#article-3-body").should(
        "not.contain",
        "This text is written after the first 300 characters."
      );
    });
  });
});
