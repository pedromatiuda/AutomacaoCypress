const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://example.cypress.io',
    supportFile: 'cypress/support/e2e.js',
  },
})
