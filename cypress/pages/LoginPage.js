class LoginPage {

  elements = {
    emailInput: () => cy.get('[data-qa="login-email"]'),
    passwordInput: () => cy.get('[data-qa="login-password"]'),
    loginButton: () => cy.get('[data-qa="login-button"]'),
    loggedUser: () => cy.contains('Logged in as')
  };

  visit() {
    cy.visit('/login');
  }

  enterEmail(email) {
    this.elements.emailInput()
      .clear()
      .type(email);
  }

  enterPassword(password) {
    this.elements.passwordInput()
      .clear()
      .type(password);
  }

  clickLogin() {
    this.elements.loginButton().click();
  }

  login(email, password) {
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLogin();
  }

  verifyLoginSuccess() {
    this.elements.loggedUser()
      .should('be.visible');
  }
}

module.exports = new LoginPage();
