const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: 'https://next.privat24.ua',
        specPattern: 'cypress/e2e/*.cy.{js,jsx,ts,tsx}',
        excludeSpecPattern: '**/getting-started',
        viewportWidth: 1920,
        viewportHeight: 1080,
    },
});
