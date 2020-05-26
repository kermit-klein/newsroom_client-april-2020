describe("visitor can only view part of premium article", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles/1",
      response: "fixture:single_free_article.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles/2",
      response: "fixture:single_premium_article.json",
    });
  });

  it("free article is fully displayed", () => {
    cy.visit('/article/1')
    cy.get("#article-1-title").should("contain", "Free title");
    cy.get("#article-1-date").should("contain", "2020-02-20 02:02");
    cy.get("#article-1-body").should("contain", "Maecenas interdum varius fringilla.");
    cy.get("#premium-blocker").should("not.exist")
  });

  it("premium article is only partially displayed", () => {
    cy.visit('/article/2')
    cy.get("#article-2-title").should("contain", "Premium title");
    cy.get("#article-2-date").should("contain", "2020-02-20 13:37");
    cy.get("#article-2-body").should("not.contain", "Maecenas interdum varius fringilla.");
    cy.get("#premium-blocker").should("exist")
  });

  it("premium blocker has informative message", () => {
    cy.visit('/article/2')
    cy.get("#premium-blocker").should('contain', "This is a premium article")
  })
});
