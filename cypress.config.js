const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'apdpr6',
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // to deal with CORS
    chromeWebSecurity: false,
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
