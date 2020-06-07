const stubLocation = require("../support/stubLocation");


describe("visitor can see local weather forecast", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://api.openweathermap.org/data/**",
      response: "fixture:open_weather.json",
    });
    cy.visit("/", stubLocation({ latitude: 57.71, longitude: 11.97 }));
  });

  it("weather component shows current location and temperature", () => {
    cy.get("#widget").should("contain", "Gothenburg");
    cy.get("#widget").should("contain", 'Temperature: 11°C')
  });

});

describe("Visitor can't see the weather when location is null", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://api.openweathermap.org/data/*",
      response: "fixture:open_weather.json",
    });
    cy.visit("/", stubLocation({ latitude: undefined, longitude: undefined }));
  });

  it("doesn't show if location is null", () => {
    cy.get("#widget").should('not.visible');
  });
});
