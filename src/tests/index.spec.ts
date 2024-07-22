import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:4321/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/FashionUnited/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:4321/');

  // Click the get started link.
  await page.getByRole('link', { name: 'To the docs' }).click();

  // Expects page to have a heading with the name of Advertising.
  await expect(page.getByRole('heading', { name: 'Advertising' })).toBeVisible();
});
