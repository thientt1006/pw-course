import { test } from '@playwright/test';

test('Bài học 1: Register Page', async ({ page }) => {
    // Truy cập trang https://material.playwrightvn.com/
    await test.step('Navigate to Material Playwrightvn', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    // Click vào “Bài học 1: Register Page”
    await test.step('Click “Bài học 1: Register Page”', async () => {
        await page.locator(`//a[@href='01-xpath-register-page.html']`).click();
    });

    // Nhập đầy đủ các thông tin, click button register
    await test.step('Input infor and click button Register', async () => {
        // Username:
        await page.locator(`//input[@id='username']`).fill('Nguyen Van A');

        // Email:
        await page.locator(`//input[@id='email']`).fill('NguyenVanA@gmail.com');

        // Gender:
        await page.locator(`//input[@id='male']`).check();

        // Hobbies:
        await page.locator(`//input[@id='traveling']`).check();

        // Interests:
        await page.locator(`//select[@id='interests']`).selectOption({ value: 'science' });

        // Country:
        await page.locator(`//select[@id='country']`).selectOption({ value: 'canada' });

        // Date of Birth:
        await page.locator(`//input[@id='dob']`).fill('2020-02-02');

        // Profile Picture:
        await page.locator(`//input[@id='profile']`).setInputFiles('data-test/playwright-logo.png');

        // Biography:
        await page.locator(`//textarea[@id='bio']`).fill('Address: HCM City');

        // Rate Us:
        await page.locator(`//input[@id='rating']`).fill('9');

        // Favorite Color:
        await page.locator(`//input[@id='favcolor']`).fill('#000000');

        // Newsletter:
        await page.locator(`//div[@class='tooltip']`).hover();
        await page.locator(`//input[@id='newsletter']`).check();

        // Enable Feature:
        await page.locator(`//span[@class="slider round"]`).check();

        // click button register
        await page.locator(`//button[@type='submit' ]`).click();
    });
});
