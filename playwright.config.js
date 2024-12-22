/* eslint-disable no-undef */
// playwright.config.js
const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  testMatch: '**/*.spec.jsx',
  use: {
    baseURL: 'http://localhost:8080/',
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
})