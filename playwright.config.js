// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  testMatch: ['**/*.spec.js', '**/*.test.js'],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  timeout: 60000,

  use: {
    headless: true,             // ✅ force headless for CI
    actionTimeout: 10000,
    navigationTimeout: 15000,
    expect: { timeout: 10000 },
    video: process.env.CI ? 'on' : 'off',       // record video only on CI
    trace: 'on-first-retry',
    launchOptions: {
      // slowMo only for local debugging
      slowMo: process.env.CI ? 0 : 3000
    }
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
