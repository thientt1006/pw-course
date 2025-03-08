import { test } from '@playwright/test';

test('Bài học 2: Product page', async ({ page }) => {
    // Truy cập trang https://material.playwrightvn.com/
    await test.step('Navigate to Material Playwrightvn', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    // Click vào “Bài học 2: Product page”
    await test.step('Click “Bài học 2: Product page”', async () => {
        await page.locator(`//a[@href='02-xpath-product-page.html']`).click();
    });

    // a. Sản phẩm 1: 2 sản phẩm 
    await test.step('Add product 1 to cart', async () => {
        await page.locator(`//button[@data-product-id='1']`).dblclick();
    });

    // b. Sản phẩm 2: 3 sản phẩm 
    await test.step('Add product 2 to cart', async () => {
        await page.locator(`//button[@data-product-id='2']`).click({ clickCount: 3 });
    });

    // c. Sản phẩm 3: 1 sản phẩm 
    await test.step('Add product 3 to cart', async () => {
        await page.locator(`//button[@data-product-id='3']`).click();
    });
});
