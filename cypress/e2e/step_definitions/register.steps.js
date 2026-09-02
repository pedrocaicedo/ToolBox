const {
  Given,
  When,
  Then,
  After
} = require('@badeball/cypress-cucumber-preprocessor');

const RegisterPage = require('../../pages/RegisterPage');
const DataGenerator = require('../../utils/dataGenerator');

let user;
let accountCreated = false;

Given('que estoy en la pagina de registrar nuevo usuario', () => {
  user = DataGenerator.generateUser();
  cy.visit('/login');
});

When('registro un nuevo usuario', () => {
  RegisterPage.enterSignupData(user);
});

When('completo la informacion solicitada en el formulario', () => {
  RegisterPage.selectGender();
  RegisterPage.enterPassword(user.password);
  RegisterPage.selectDateOfBirth();
  RegisterPage.enterPersonalInformation(user);
});

When('creo el usuario', () => {
  RegisterPage.createAccount();
});

Then('el usuario debe crearse correctamente', () => {
  RegisterPage.verifyAccountCreated()
    .then(() => {
      accountCreated = true;
      RegisterPage.clickContinue();
    });
});

Then('el registro se realiza con exito', () => {
  RegisterPage.verifyAccountCreated();
    accountCreated = true;
});

When('quiero eliminar el usuario', () => {
  RegisterPage.deleteAccount();
});

Then('el usuario se elimina corerectamente', () => {
  RegisterPage.verifyAccountDeleted();
});

After({ tags: '@register' }, () => {
  if (!accountCreated) {
        return;
      }
    RegisterPage.clickContinue();
    RegisterPage.deleteAccount();
    RegisterPage.verifyAccountDeleted();  
    accountCreated = false;
});
