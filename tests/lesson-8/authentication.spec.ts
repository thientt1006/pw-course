import { expect, test } from "@playwright/test";

test.describe("AUTH - Authentication", async () => {
    let usernameXpath: string = "//input[@id = 'user_login']";
    let passwordXpath: string = "//input[@id = 'user_pass']";
    let loginBtnXpath: string = "//input[@id = 'wp-submit']";
    let loginErrorXpath: string = "//div[@id = 'login_error']";
    let dashboardXpath: string = "//h1[text() = 'Dashboard']";
    let glanceXpath: string = "//h2[text() = 'At a Glance']";
    let activityXpath: string = "//h2[text() = 'Activity']";

    let invalidAccount: {
        username: string;
        password: string;
    };

    let validAccount: {
        username: string;
        password: string;
    };

    let errorMessage: string;

    test.beforeAll(() => {
        invalidAccount = {
            username: "K12 - Thien",
            password: "123456"
        }

        validAccount = {
            username: "k12-thien",
            password: "&ov2@!))72^)cic4@E0J#HgY"
        }

        errorMessage = `Error: The username ${invalidAccount.username} is not registered on this site. If you are unsure of your username, try your email address instead.`;
    });

    test.beforeEach(async ({ page }) => {
        // Go to Login page
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
    });

    test.afterEach(async () => {

    });

    test.afterAll(async () => {

    });

    test("@AUTH_001: Login fail", async ({ page }) => {
        await test.step("Nhập vào thông tin username, password bị sai", async () => {
            // Input username, password
            await page.locator(usernameXpath).fill(invalidAccount.username);
            await page.locator(passwordXpath).fill(invalidAccount.password);

            //Expected result:
            //  - Giá trị của username, password được điền vào ô input
            // Get text in input field username, password
            const actualUsername = await page.locator(usernameXpath).inputValue();
            const actualPassword = await page.locator(passwordXpath).inputValue();

            // Verify text in input field username, password
            expect(actualUsername).toEqual(invalidAccount.username);
            expect(actualPassword).toEqual(invalidAccount.password);
        });

        await test.step("Click button login", async () => {
            // Click button Login
            await page.locator(loginBtnXpath).click();

            // Get text in error message
            const actualErrorMessage = await page.locator(loginErrorXpath).innerText();

            //Expected result:
            //  - Hiển thị lỗi:
            //      - "Error: The username <username> is not registered on this site. If you are unsure of your username, try your email address instead."
            await expect(actualErrorMessage).toEqual(errorMessage);
        });
    });

    test("@AUTH_002: Login success", async ({ page }) => {
        await test.step("Nhập vào thông tin username, password đúng", async () => {
            // Input username, password
            await page.locator(usernameXpath).fill(validAccount.username);
            await page.locator(passwordXpath).fill(validAccount.password);

            //Expected result:
            //  - Giá trị của username, password được điền vào ô input
            // Get text in input field username, password
            const actualUsername = await page.locator(usernameXpath).inputValue();
            const actualPassword = await page.locator(passwordXpath).inputValue();

            // Verify text in input field username, password
            expect(actualUsername).toEqual(validAccount.username);
            expect(actualPassword).toEqual(validAccount.password);
        });

        await test.step("Click button login", async () => {
            // Click button Login
            await page.locator(loginBtnXpath).click();

            //Expected result:
            //  - Login thành công
            //      - Chuyển tới trang có url là /wp-admin
            //      - Có heading h1 "Dashboard" hiển thị
            //      - Có 2 heading h2 là "At a Glance" và "Activity" hiển thị

            // Navigate to url and contain /wp-admin
            await page.waitForURL('**/wp-admin/');

            // Validate heading h1 "Dashboard" display
            const isDashboardHeadingVisible = await page.locator(dashboardXpath).isVisible();
            expect(true).toEqual(isDashboardHeadingVisible);

            // Validate heading h2 "At a Glance" display
            const isGlanceHeadingVisible = await page.locator(glanceXpath).isVisible();
            expect(true).toEqual(isGlanceHeadingVisible);

            // Validate heading h2 "Activity" display
            const isActivityHeadingVisible = await page.locator(activityXpath).isVisible();
            expect(true).toEqual(isActivityHeadingVisible);
        });
    });
})
