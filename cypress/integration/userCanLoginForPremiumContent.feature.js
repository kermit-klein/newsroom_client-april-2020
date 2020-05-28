describe("User can log in for premium content", () => {
  beforeEach(() => {
    cy.server();
  });

  describe("User can log in successfully", () => {
    beforeEach(() => {
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/articles",
        response: "fixture:article_list.json",
      });
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
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/articles/3",
        response: "fixture:premium_article.json",
        headers: {
          uid: "user@mail.com",
        },
      });
      cy.route({
        method: "DELETE",
        url: "http://localhost:3000/api/auth/*",
        response: "fixture:logout.json",
        headers: {
          uid: "user@mail.com",
        },
      });
      cy.visit("/");
      cy.get("button#login").click();
      cy.get("#login-form").within(() => {
        cy.get("#email").type("user@mail.com");
        cy.get("#password").type("password");
        cy.get("Button#submit").contains("Submit").click();
      });
    });

    it("and is directed to main page", () => {
      cy.get("#article-1").should("contain", "title 1");
    });

    it("with valid credentials", () => {
      cy.get("div#login").within(() => {
        cy.get("p").should("contain", "user@mail.com");
      });
    });

    it("can view premium article", () => {
      cy.visit("/article/3");
      cy.get("#article-3-body").then((text) => {
        text.length >= 300;
      });
    });
    it("clicking the Log out button", () => {
      cy.get("#logout").click();
      cy.get("#logout").should("not.exist");
      expect("#article-1").to.exist;
    });
  });

  describe("unsuccessfully", () => {
    beforeEach(() => {
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/auth/*",
        response: "fixture:unsuccessful_login.json",
        headers: {
          uid: "user@mail.com",
        },
        status: 400,
      });
      cy.visit("/sign_in");
      cy.get("#login-form").within(() => {
        cy.get("#email").type("user@mail.com");
        cy.get("#password").type("wrongpassword");
        cy.get("Button").contains("Submit").click();
      });
    });
    it("with invalid credentials", () => {
      cy.get("#error-message").should(
        "contain",
        "Invalid login credentials. Please try again."
      );
    });
  });
});
