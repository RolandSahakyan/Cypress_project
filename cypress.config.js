const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    viewportHeight: 1400,
    viewportWidth: 1800,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
