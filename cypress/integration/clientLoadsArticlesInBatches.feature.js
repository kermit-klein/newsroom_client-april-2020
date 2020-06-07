const stubLocation = require("../support/stubLocation");

describe('Client loads articles in batches', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles?page=1&location=Sweden",
      response: "fixture:dns_home_articles.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles?page=1&location=Sweden&category=economy",
      response: "fixture:economy.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles?page=1&location=Sweden&category=local",
      response: "fixture:local.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles?page=2&location=Sweden&category=local",
      response: "fixture:local_page2.json",
    });

    cy.visit("/", stubLocation({ latitude: 60, longitude: 18 }));
  });

  it('on the homepage', () => {
    cy.get('.article-list-card').should("have.length", 24)
  })

  it('on a category page', () => {
    cy.get("#economy").click()
    cy.get('.article-list-card').should("have.length", 3)
  })

  it('on a category with lots of articles you can load more', () => {
    cy.get("#local").click()
    cy.get('.article-list-card').should("have.length", 24)
    cy.scrollTo(0,2000)
    cy.get("#more-btn").click()
    cy.get('.article-list-card').should("have.length", 28)
  })
})
