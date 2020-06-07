const stubLocation = require("../support/stubLocation");

describe("visitor can see local weather forecast", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_list_location.json",
    });
    cy.visit("/", stubLocation({ latitude: 60, longitude: 18 }));
  });

  it("weather component shows current location", () => {
    cy.get("#weather").should("contain", "Gothenburg");
    cy.get("#forecast").should("contain", 'Temperature: 11°C')
  });

});

// describe("Visitor can't see the weather when location is null", () => {
//   beforeEach(() => {
//     cy.server();
//     cy.route({
//       method: "GET",
//       url: "http://localhost:3000/api/articles",
//       response: "fixture:article_list_location.json",
//     });
//     cy.visit("/", stubLocation({ latitude: undefined, longitude: undefined }));
//   });

//   it("undefined location message is shown instead", () => {
//     cy.get("#local").click();
//     cy.get("#no-location").should(
//       "contain",
//       "Unable to get your location, showing international news instead"
//     );
//     cy.get("#articleCards").should("contain", "Title 3");
//     cy.get("#articleCards").should("contain", "Title 4");
//     cy.get("#articleCards").should("not.contain", "Title 1");
//     cy.get("#articleCards").should("not.contain", "Title 2");
//   });
// });
