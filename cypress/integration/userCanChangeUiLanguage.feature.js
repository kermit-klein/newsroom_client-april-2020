describe('user can change language', () =>  {
  it('by clicking button', () => {
    cy.visit("/");
    cy.get("#language").contains("SV").click();
    cy.wait(2000);
    cy.get("Button#login").contains("Logga in");
    cy.get("#language").contains("EN").click();
    cy.wait(2000);
    cy.get("Button#login").contains("Login");
  });
})