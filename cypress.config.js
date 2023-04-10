const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.aesop.com.br',
    viewportWidth: 1440,
    viewportHeight:900
  },
});

