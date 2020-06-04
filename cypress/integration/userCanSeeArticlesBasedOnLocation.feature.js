const stubLocation = require("../support/stubLocation");

describe("visitor can view articles basen on location", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_list_location.json",
    });
    cy.visit("/");
  });

  it("by visiting the 'local' category", () => {
    cy.get("#navbar").should("contain", "Local");
  });

  it("Local category shows only local news", () => {
    cy.get("#local").click();
    cy.get("#location").should("contain", "Showing news from Sweden");
    cy.get("#articleCards").should("contain", "Title 1");
    cy.get("#articleCards").should("contain", "Title 2");
    cy.get("#articleCards").should("not.contain", "Title 3");
    cy.get("#articleCards").should("not.contain", "Title 4");
  });
});

describe("Visitor can't see local news when location is null", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_list_location.json",
    });
    cy.visit("/", stubLocation({ latitude: undefined, longitude: undefined }));
  });

  it("undefined location message is shown instead", () => {
    cy.get("#local").click();
    cy.get("#no-location").should(
      "contain",
      "Unable to get your location, showing international news instead"
    );
    cy.get("#articleCards").should("contain", "Title 3");
    cy.get("#articleCards").should("contain", "Title 4");
    cy.get("#articleCards").should("not.contain", "Title 1");
    cy.get("#articleCards").should("not.contain", "Title 2");
  });
});
