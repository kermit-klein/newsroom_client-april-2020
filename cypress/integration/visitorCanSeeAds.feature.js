describe("visitor can see ads", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_list.json",
    });
    cy.visit("/");
  });
  it("on front page", () => {
    cy.get("#ad-1").should("be.visible");
    cy.get("#ad-1").its("href").should("include", "/index.html");
    cy.get("#ad-2").should("be.visible");
    cy.get("#ad-2").its("href").should("include", "/index.html");
  });
});
