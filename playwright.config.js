// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  testMatch: ['**/*.spec.js', '**/*.test.js'],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  timeout: 60000, // 60s per test

  use: {
    actionTimeout: 10000,      // per click/fill/etc.
    navigationTimeout: 15000,  // per page.goto()
    expect: { timeout: 10000 },
    video: 'on',
    trace: 'on-first-retry',
    headless: false,           // 👀 show the browser
    launchOptions: {
      slowMo: 3000             // 🐢 3s pause after each action
    }
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
