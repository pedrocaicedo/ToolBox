const {
  Given,
  When,
  Then
} = require('@badeball/cypress-cucumber-preprocessor');

const LoginPage = require('../../pages/LoginPage');

let accountCreated = false;

Given('que navego la pagina de inicio de sesion', () => {

  LoginPage.visit();

});


When('inicio sesion con las credenciales', () => {

  cy.env(['loginEmail', 'loginPassword'])
    .then(({ loginEmail, loginPassword }) => {

      expect(Boolean(loginEmail), 'Login email').to.be.true;
      expect(Boolean(loginPassword), 'Login password').to.be.true;

      LoginPage.login(
        loginEmail,
        loginPassword
      );

    });

});


Then('debo iniciar la sesion correctamente', () => {

  LoginPage.verifyLoginSuccess();

});
