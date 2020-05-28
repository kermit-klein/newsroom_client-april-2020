describe("Visitor can see ads", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_list.json",
    });
    cy.visit("/");
  });

  describe("on the index page", () => {
    it("on front page ad1", () => {
      cy.get("#ad-1").should("be.visible");
      cy.get("#ad-1")
        .should("have.attr", "href")
        .and("include", "https://www.mercedes-benz.com/en/");
    });

    it("on front page ad2", () => {
      cy.get("#ad-2").should("be.visible");
      cy.get("#ad-2")
        .should("have.attr", "href")
        .and(
          "include",
          "https://www.malts.com/en-gb/visit-our-distilleries/lagavulin/"
        );
    });
  });

  describe("on a single article page", () => {
    beforeEach(() => {
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/articles/1",
        response: "fixture:single_article.json",
      });
      cy.get("#article-1").within(() => {
        cy.get(".article-title").click();
      });
    });

    it("on single article page ad1", () => {
      cy.get("#ad-1").should("be.visible");
      cy.get("#ad-1")
        .should("have.attr", "href")
        .and("include", "https://www.mercedes-benz.com/en/");
    });
  });
});
