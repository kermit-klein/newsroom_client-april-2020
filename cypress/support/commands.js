Cypress.Commands.add("typeInStripeElement", (element, value) => {
  cy.get(`#${element} iframe`).then(($iframe) => {
    const $body = $iframe.contents().find("body");
    cy.wrap($body).find(`input[name^="${element}"]`).type(value, { delay: 10 });
  });
});

Cypress.Commands.add("logIn", () => {
  cy.route({
    method: "POST",
    url: "http://localhost:3000/api/auth/*",
    response: "fixture:successful_login.json",
    headers: {
      uid: "user@mail.com",
    },
  });
  cy.route({
    method: "GET",
    url: "http://localhost:3000/api/auth/*",
    response: "fixture:successful_login.json",
    headers: {
      uid: "user@mail.com",
    },
  });
  cy.get("#language").contains("EN").click();
  cy.wait(2000);
  cy.get("a > #login").click();
  cy.get("a > #login").click();
  cy.get("#login-form").within(() => {
    cy.get("#email").type("user@mail.com");
    cy.get("#password").type("password");
    cy.get("Button").contains("Submit").click();
  });
});

Cypress.Commands.add("stubMain", () => {
  const stubLocation = require("../support/stubLocation");
  cy.server()
  cy.route({
    method: "GET",
    url: "http://localhost:3000/api/articles?page=1",
    response: "fixture:dns_home_articles.json",
  });
  cy.route({
    method: "GET",
    url: "http://localhost:3000/api/articles?page=1&location=Sweden",
    response: "fixture:dns_home_articles.json",
  });
  cy.route({
    method: "GET",
    url: "http://opencagedata.com/geocode/v1/json?q=60,18&language=en&key=*",
    response: "fixture:open_cage_stub.json"
  })
  cy.visit("/", stubLocation({ latitude: 60, longitude: 18 }));
})