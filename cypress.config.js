const { defineConfig } = require('cypress')

const puppeteerSetup = require('./cypress/support/puppeteer')


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      puppeteerSetup(on)
    },
  },
  fixturesFolder: false,
  chromeWebSecurity: true
})
