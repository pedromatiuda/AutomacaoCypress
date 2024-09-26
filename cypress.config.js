const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    supportFile: 'cypress/support/e2e.js',
  },
})
