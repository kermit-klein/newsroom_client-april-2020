const stubLocation = require("../support/stubLocation");

describe("visitor can view articles basen on location", () => {
  beforeEach(() => {
    cy.stubMain();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles?page=1&location=Sweden&category=local",
      response: "fixture:sweden_articles.json",
    });
  });

  it("by visiting the 'local' category", () => {
    cy.get("#navbar").should("contain", "Local");
  });

  it("Local category shows only local news", () => {
    cy.get("#local").click();
    cy.get("#location").should("contain", "from Sweden");
    cy.get("#articleCards").should("contain", "Title 60");
    cy.get("#articleCards").should("contain", "Title 59");
    cy.get("#articleCards").should("not.contain", "Title 55");
    cy.get("#articleCards").should("not.contain", "Title 44");
  });
});

describe("Visitor can't see local news when location is null", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles?page=1&category=local",
      response: "fixture:no_location_articles.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles?page=1&location=Sweden",
      response: "fixture:dns_home_articles.json",
    });
    cy.visit("/", stubLocation({ latitude: undefined, longitude: undefined }));
  });

  it("undefined location message is shown instead", () => {
    cy.get("#local").click();
    cy.get("#no-location").should(
      "contain",
      "Unable to get your location, showing international news instead"
    );
    cy.get("#articleCards").should("not.contain", "Title 60");
    cy.get("#articleCards").should("not.contain", "Title 59");
    cy.get("#articleCards").should("contain", "Title 55");
    cy.get("#articleCards").should("contain", "Title 44");
  });
});
