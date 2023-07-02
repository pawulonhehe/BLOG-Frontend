const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    browser: "chrome",
    server: "http://localhost:3000",
    spec: "e2e/**/*.spec.js",
    watchFiles: ["e2e/**/*.spec.js"],
    defaultCommandTimeout: 10000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    supportFile: false,
    baseUrl: "http://localhost:3000",
  },
});
