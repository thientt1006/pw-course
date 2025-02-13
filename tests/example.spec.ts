import { test, expect } from '@playwright/test';

// Exercise 1
test('has title', async ({ page }) => {
  // Go to https://material.playwrightvn.com/
  await page.goto('https://material.playwrightvn.com/');

  // Expect a title contain "Tài liệu học automation test"
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});

// Exercise 2
test('get started link', async ({ page }) => {
  // Go to https://material.playwrightvn.com/
  await page.goto('https://material.playwrightvn.com/');

  // Click the link which contain text ""
  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

  // Expects page to have a heading with the name of "User Registration"
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});
