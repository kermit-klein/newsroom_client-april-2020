describe("Visitor can filter by category", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_category_list.json",
    });
    cy.visit("/");
  });

  it("economy successfully", () => {
    cy.get("#economy").click();
    cy.get("#article-3").should("be.visible");
    cy.get("#article-4").should("be.visible");
    cy.get("#article-1").should("not.be.visible");
    cy.get("#article-9").should("not.be.visible");
  });

  it("entertainment successfully", () => {
    cy.get("#entertainment").click();
    cy.get("#article-10").should("be.visible");
    cy.get("#article-9").should("be.visible");
    cy.get("#article-1").should("not.be.visible");
    cy.get("#article-5").should("not.be.visible");
  });

  it("other successfully", () => {
    cy.get("#other").click();
    cy.get("#article-11").should("be.visible");
    cy.get("#article-12").should("be.visible");
    cy.get("#article-1").should("not.be.visible");
    cy.get("#article-9").should("not.be.visible");
  });

  it("world successfully", () => {
    cy.get("#world").click();
    cy.get("#article-5").should("be.visible");
    cy.get("#article-6").should("be.visible");
    cy.get("#article-9").should("not.be.visible");
    cy.get("#article-12").should("not.be.visible");
  });

  it("sport successfully", () => {
    cy.get("#sport").click();
    cy.get("#article-1").should("be.visible");
    cy.get("#article-2").should("be.visible");
    cy.get("#article-3").should("not.be.visible");
    cy.get("#article-5").should("not.be.visible");
  });

  it("politics successfully", () => {
    cy.get("#politics").click();
    cy.get("#article-7").should("be.visible");
    cy.get("#article-8").should("be.visible");
    cy.get("#article-1").should("not.be.visible");
    cy.get("#article-9").should("not.be.visible");
  });

  it("current successfully 1", () => {
    cy.clock(Date.parse("2020-05-24 14:15"));
    cy.get("#current").click();
    cy.get("#article-1").should("be.visible");
    cy.get("#article-3").should("be.visible");
    cy.get("#article-2").should("not.be.visible");
  });

  it("current successfully 2", () => {
    cy.clock(Date.parse("2020-05-25 14:00"));
    cy.visit("/");
    cy.get("#current").click();
    cy.get("#article-1").should("be.visible");
    cy.get("#article-3").should("not.be.visible");
  });
});
