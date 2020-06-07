describe("visitor can view all listed articles", () => {
  beforeEach(() => {
    cy.stubMain();
  });
  it("articles is shown", () => {
    cy.get("#article-60").should("contain", "Evolve extensible metrics");
    cy.get("#article-58").should("contain", "Benchmark web-enabled content");
  });
  
});
