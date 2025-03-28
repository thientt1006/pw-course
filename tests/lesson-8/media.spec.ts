import { test, expect } from "@playwright/test";

test.describe('MEDIA - Media', async () => {
    let usernameXpath: string = "//input[@id = 'user_login']";
    let passwordXpath: string = "//input[@id = 'user_pass']";
    let loginBtnXpath: string = "//input[@id = 'wp-submit']";
    let menuMediaXPath: string = "//div[text() = 'Media']";
    let menuLibraryXPath: string = "//a[text() = 'Library']";
    let addNewMediaFileBtnXPath: string = "//a[@role='button' and text()='Add New Media File']";
    let selectFileXPath = "//input[@type = 'file']";
    let uploadedFileXPath = "//li[@aria-label='thien']";
    let deleteBtnXPath = "//button[@class='button-link delete-attachment' and text()='Delete permanently']";

    let validAccount: { username: string, password: string } = {
        username: "k12-thien",
        password: "&ov2@!))72^)cic4@E0J#HgY"
    }

    const urlInputFile = "tests/student-submission/08-thien/lesson-8/thien.txt";

    test.beforeEach(async ({ page }) => {
        // Go to Login page
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
        await page.locator(usernameXpath).fill(validAccount.username);
        await page.locator(passwordXpath).fill(validAccount.password);
        await page.locator(loginBtnXpath).click();

        // Navigate to menu 'Media/Library'
        await page.locator(menuMediaXPath).click();
        await page.locator(menuLibraryXPath).click();
    });

    test.afterEach(async ({ page }) => {
        page.on('dialog', async dialog => dialog.accept()); // handle confirmation dialog

        // Teardown: xoá các dữ liệu đã thêm vào
        await page.locator(uploadedFileXPath).click();
        await page.locator(deleteBtnXPath).click();
    })

    test('@MEDIA_FILES_001: Media - upload file success', async ({ page }) => {
        await test.step('Tạo file `${name}.txt` bằng tay trong thư mục test của bài học hiện tại. Thực hiện upload file', async () => {
            await page.locator(addNewMediaFileBtnXPath).click();
            await page.locator(selectFileXPath).setInputFiles(urlInputFile);

            //Expected result:
            //  - File được upload thành công
            await expect(page.locator(uploadedFileXPath)).toBeVisible();
        })

        await test.step('F5 trang', async () => {
            await page.reload();

            //Expected result:
            //  - File xuất hiện trong media library
            await expect(page.locator(uploadedFileXPath)).toBeVisible();
        })
    })
})
