describe("visitor can read a specific article", () => {
  before(() => {
    cy.stubMain();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles/60",
      response: "fixture:single_article.json",
    });
    cy.get("#article-60").within(() => {
      cy.get(".article-title").click();
    })
  });

  it("article is displayed", () => {
    cy.get(".article-title").should("contain", "Title 1");
    cy.get("#article-1-date").should("contain", "2020-02-20 02:02");
    cy.get("#article-1-body").should("contain", "Lorem ipsum");
    cy.get("#article-2").should("not.exist")
  });
});
