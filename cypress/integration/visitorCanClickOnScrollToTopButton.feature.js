describe("visitor can click on button to scroll to top of page", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_list.json",
    });
    cy.visit("/");
  });
  it("button is not visible until scrolling down", () => {
    cy.get(".scrollTop").should('not.be.visible'); 
  });

  it("button is shown when scrolling down", () => {
    cy.scrollTo(0, 500);
    cy.get(".scrollTop").should('be.visible'); 
  });

  it('succussfully clicks button to scroll up', () => {
    cy.scrollTo(0, 500);
    cy.get(".scrollTop").click(); 
    cy.window().then(($window) => {
      expect($window.scrollY).to.be.closeTo(0, 100);
    });
  }); 
});
