import { test, expect } from '@playwright/test';
import { playwrightPage } from '../object/playwright';

test.beforeEach(async ({ page }) => {
 
  const playwright = new playwrightPage(page);
  await playwright.gotothiswebsite();
  await playwright.login('standard_user','secret_sauce');
 
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
 
});

test('Product', async ({ page }) => {
  const playwright = new playwrightPage(page);
  await playwright.addcart();

//   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
});

test('test', async ({ page }) => {
const playwright = new playwrightPage(page);
await playwright.logout();

//   await page.getByRole('button', { name: 'Open Menu' }).click();
//   await page.locator('[data-test="logout-sidebar-link"]').click();
});