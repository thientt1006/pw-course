import { test } from '@playwright/test';

const username = "Nguyen Van A";
const email = "NguyenVanA@gmail.com";
const interest = "science";
const country = "canada";
const dob = "2020-02-02";
const urlInputFile = "data-test/playwright-logo.png";
const biography = "Address: HCM City";
const rating = "9";
const favcolor = "#000000";

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
        await page.locator(`//input[@id='username']`).fill(username);
        await page.locator(`//input[@id='email']`).fill(email);
        await page.locator(`//input[@id='male']`).check();
        await page.locator(`//input[@id='traveling']`).check();
        await page.locator(`//select[@id='interests']`).selectOption({ value: interest });
        await page.locator(`//select[@id='country']`).selectOption({ value: country });
        await page.locator(`//input[@id='dob']`).fill(dob);
        await page.locator(`//input[@id='profile']`).setInputFiles(urlInputFile);
        await page.locator(`//textarea[@id='bio']`).fill(biography);
        await page.locator(`//input[@id='rating']`).fill(rating);
        await page.locator(`//input[@id='favcolor']`).fill(favcolor);
        await page.locator(`//div[@class='tooltip']`).hover();
        await page.locator(`//input[@id='newsletter']`).check();
        await page.locator(`//span[@class="slider round"]`).check();
    });

    // click button register
    await test.step('Click button register', async () => {
        await page.locator(`//button[@type='submit']`).click();
    });
});
