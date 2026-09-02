const { defineConfig } = require('cypress');

const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');

const {
  addCucumberPreprocessorPlugin
} = require('@badeball/cypress-cucumber-preprocessor');

const {
  createEsbuildPlugin
} = require('@badeball/cypress-cucumber-preprocessor/esbuild');


async function setupNodeEvents(on, config) {

  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [
        createEsbuildPlugin(config)
      ]
    })
  );

  return config;
}


module.exports = defineConfig({

  e2e: {

    baseUrl: 'https://automationexercise.com',

    specPattern: [
      'cypress/e2e/**/*.feature',
      'cypress/api/test/**/*.cy.js'
    ],

    supportFile: 'cypress/support/e2e.js',

    setupNodeEvents,

    viewportWidth: 1280,

    viewportHeight: 720,

    defaultCommandTimeout: 10000,

    pageLoadTimeout: 30000,

    screenshotOnRunFailure: true,

    video: true,

    retries: {
      runMode: 2,
      openMode: 0
    },

    testIsolation: true

  }

});
