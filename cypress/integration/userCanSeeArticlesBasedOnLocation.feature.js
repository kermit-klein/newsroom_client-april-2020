describe("visitor can view articles basen on location", () => {
  before(() => {
    cy.wait(200)
  })
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://api.opencagedata.com/geocode/v1*",
      response: "fixture:open_cage.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_list_location.json",
    });
    cy.visit("/");
  });

  xit("by visiting the 'local' category", () => {
    cy.get('#navbar').should('contain', 'Local')
  })

  it("Local category shows only local news", () => {
    cy.get("#local").click();
    cy.get("#articleCards").should("contain", "Title 1");
    cy.get("#articleCards").should("contain", "Title 1");
    cy.get("#articleCards").should("not.contain", "Title 3");
    cy.get("#articleCards").should("not.contain", "Title 4");
  });

  it("But without location a message is shown instead", () => {
    cy.get("#local").click();
    cy.get('')
  })
});