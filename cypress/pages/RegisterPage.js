class RegisterPage {

  elements = {
    nameInput: () =>
      cy.get('[data-qa="signup-name"]'),

    emailInput: () =>
      cy.get('[data-qa="signup-email"]'),

    signupButton: () =>
      cy.get('[data-qa="signup-button"]'),

    genderMale: () =>
      cy.get('#id_gender1'),

    passwordInput: () =>
      cy.get('[data-qa="password"]'),

    daysSelect: () =>
      cy.get('[data-qa="days"]'),

    monthsSelect: () =>
      cy.get('[data-qa="months"]'),

    yearsSelect: () =>
      cy.get('[data-qa="years"]'),

    firstNameInput: () =>
      cy.get('[data-qa="first_name"]'),

    lastNameInput: () =>
      cy.get('[data-qa="last_name"]'),

    companyInput: () =>
      cy.get('[data-qa="company"]'),

    addressInput: () =>
      cy.get('[data-qa="address"]'),

    address2Input: () =>
      cy.get('[data-qa="address2"]'),

    countrySelect: () =>
      cy.get('[data-qa="country"]'),

    stateInput: () =>
      cy.get('[data-qa="state"]'),

    cityInput: () =>
      cy.get('[data-qa="city"]'),

    zipcodeInput: () =>
      cy.get('[data-qa="zipcode"]'),

    mobileInput: () =>
      cy.get('[data-qa="mobile_number"]'),

    createAccountButton: () =>
      cy.get('[data-qa="create-account"]'),

    accountCreatedMessage: () =>
      cy.contains('Account Created!'),

    continueButton: () =>
    cy.get('[data-qa="continue-button"]'),

    deleteAccountButton: () =>
  cy.get('a[href="/delete_account"]'),

    accountDeletedMessage: () =>
    cy.contains('Account Deleted!')

  };

  enterSignupData(user) {
    this.elements.nameInput()
      .type(user.name);

    this.elements.emailInput()
      .type(user.email);

    this.elements.signupButton()
      .click();
  }

  selectGender() {
    this.elements.genderMale()
      .check()
  }

  enterPassword(password) {
    this.elements.passwordInput()
      .type(password);
  }

  selectDateOfBirth() {
    this.elements.daysSelect()
      .select('10');

    this.elements.monthsSelect()
      .select('May');

    this.elements.yearsSelect()
      .select('1990');
  }

  enterPersonalInformation(user) {
    this.elements.firstNameInput()
      .type(user.firstName);

    this.elements.lastNameInput()
      .type(user.lastName);

    this.elements.companyInput()
      .type(user.company);

    this.elements.addressInput()
      .type(user.address);

    this.elements.address2Input()
      .type(user.address2);

    this.elements.countrySelect()
      .select(user.country);

    this.elements.stateInput()
      .type(user.state);

    this.elements.cityInput()
      .type(user.city);

    this.elements.zipcodeInput()
      .type(user.zipcode);

    this.elements.mobileInput()
      .type(user.mobileNumber);
  }

  //Creacion de los Metodos

  createAccount() {
    this.elements.createAccountButton()
      .click();
  }

  verifyAccountCreated() {
    this.elements.accountCreatedMessage()
      .should('be.visible');
  }
 
  clickContinue() {
    this.elements.continueButton()
      .should('be.visible')
      .click();
  }

  deleteAccount() {
  this.elements.deleteAccountButton()
    .should('be.visible')
    .click();
}

verifyAccountDeleted() {
  this.elements.accountDeletedMessage()
    .should('be.visible');
  }

}

module.exports = new RegisterPage();
