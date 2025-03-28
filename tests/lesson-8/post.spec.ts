import { test, expect } from "@playwright/test";

test.describe("POST - Post", async () => {
    let name: string = "thien";

    let usernameXpath: string = "//input[@id = 'user_login']";
    let passwordXpath: string = "//input[@id = 'user_pass']";
    let loginBtnXpath: string = "//input[@id = 'wp-submit']";
    let menuPostsXPath: string = "//div[text() = 'Posts']";
    let menuTagsXPath: string = "//a[text() = 'Tags']";
    let menuCategoriesXPath: string = "//a[text() = 'Categories']";
    let addNewTagBtnXPath: string = "//input[@id = 'submit']";
    let noticeMsgXPath: string = "//div[@id = 'ajax-response']/descendant::p";
    let tagNameTextBoxXPath: string = "//input[@id = 'tag-name']";
    let tagSlugTextBoxXPath: string = "//input[@id = 'tag-slug']";
    let tagSearchTextBoxXPath = "//input[@id = 'tag-search-input']"
    let searchTagBtnXPath = "//input[@id = 'search-submit']";
    let parentCategoryDropdownXPath = "//select[@id = 'parent']";

    let tagNameAddedXPath: string = `//a[text() = 'tag ${name}']`;
    let tagNameDeleteAddedXPath: string = `//a[@aria-label = 'Delete “tag ${name}”']`;

    let tagName02AddedXPath: string = `//a[text() = 'tag ${name} 02']`;
    let tagSlug02AddedXPath: string = `//td[text() = 'tag-${name}-02']`;
    let tagName02DeleteAddedXPath: string = `//a[@aria-label = 'Delete “tag ${name} 02”']`;

    let tagName03AddedXPath: string = `//a[text() = 'tag ${name} 03']`;
    let tagSlug03AddedXPath: string = `//td[contains(text(), 'day-la-tag-dac-biet-100-200')]`;
    let tagName03DeleteAddedXPath: string = `//a[@aria-label = 'Delete “tag ${name} 03”']`;

    let categoryName03AddedXPath: string = `//a[text() = 'category ${name} 03']`;
    let categorySlug03AddedXPath: string = `//td[contains(text(), 'day-la-category-dac-biet-100-200')]`;
    let categoryName03DeleteAddedXPath: string = `//a[@aria-label = 'Delete “category ${name} 03”']`;

    let categoryName04AddedXPath: string = `//a[text() = 'category ${name} 04']`;
    let categoryName04DeleteAddedXPath: string = `//a[@aria-label = 'Delete “category ${name} 04”']`;

    let noticeErrorMsgRequireTagName: string = "A name is required for this term.";
    let noticeErrorMsgExistTagName: string = "A term with the name provided already exists in this taxonomy.";
    let tagNameText: string = "lesson tag";

    let validAccount: { username: string, password: string } = {
        username: "k12-thien",
        password: "&ov2@!))72^)cic4@E0J#HgY"
    }

    test.beforeEach(async ({ page }) => {
        // Go to Login page
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
        await page.locator(usernameXpath).fill(validAccount.username);
        await page.locator(passwordXpath).fill(validAccount.password);
        await page.locator(loginBtnXpath).click();

        // Navigate to menu 'Posts'
        await page.locator(menuPostsXPath).click();
    });

    test.afterEach(async ({ page }) => {
        page.on('dialog', async dialog => dialog.accept()); // handle confirmation dialog

        // Search tag to delete
        await page.locator(tagSearchTextBoxXPath).fill(name);
        await page.locator(searchTagBtnXPath).click();

        // Detete tag name for "tag ${name}"
        await page.locator(tagNameAddedXPath).hover();
        await page.locator(tagNameDeleteAddedXPath).click();

        // Delete tag name for "tag ${name} 02"
        await page.locator(tagName02AddedXPath).hover();
        await page.locator(tagName02DeleteAddedXPath).click();

        // Delete tag name for "tag ${name} 03"
        await page.locator(tagName03AddedXPath).hover();
        await page.locator(tagName03DeleteAddedXPath).click();

        // Delete category name for "category ${name} 03"
        await page.locator(categoryName03AddedXPath).hover();
        await page.locator(categoryName03DeleteAddedXPath).click();

        // Delete category name for "category ${name} 04"
        await page.locator(categoryName04AddedXPath).hover();
        await page.locator(categoryName04DeleteAddedXPath).click();
    })

    test("@POST_TAG_001: Tag - add tag failed", async ({ page }) => {
        await test.step('Navigate to Tags', async () => {
            await page.locator(menuTagsXPath).click();
        })

        await test.step('Click button "Add New Tag"', async () => {
            await page.locator(addNewTagBtnXPath).click();

            //Expected result:
            //  - Hiển thị lỗi: "A name is required for this term."
            await expect(page.locator(noticeMsgXPath)).toHaveText(noticeErrorMsgRequireTagName);
        });

        await test.step('Điền thông tin tag: name = "lesson tag", click button "Add New Tag"', async () => {
            //Điền thông tin tag: name = "lesson tag", click button "Add New Tag"
            await page.locator(tagNameTextBoxXPath).fill(tagNameText);
            await page.locator(addNewTagBtnXPath).click();

            // Wait for new error message is updated
            await expect(page.locator(noticeMsgXPath)).not.toHaveText(noticeErrorMsgRequireTagName);

            //Expected result:
            //  - Hiển thị lỗi: "A term with the name provided already  in this taxonomy."
            await expect(page.locator(noticeMsgXPath)).toHaveText(noticeErrorMsgExistTagName);
        });
    });

    test("@POST_TAG_002: Tag - add tag success", async ({ page }) => {
        await test.step('Navigate to Tags', async () => {
            await page.locator(menuTagsXPath).click();
        })

        await test.step('Điền thông tin tag: name = "tag {name}" (name là tên bạn). Click button "Add New Tag"', async () => {
            const tagNameAddedText = `tag ${name}`;
            await page.locator(tagNameTextBoxXPath).fill(tagNameAddedText);
            await page.locator(addNewTagBtnXPath).click();

            //Expected result:
            //  - "Hiển thị thông báo thêm tag thành công: "Tag added."
            //  - Có tag mới được tạo ra trong danh sách tag có tên "tag { name }"
            await expect(page.locator(noticeMsgXPath)).toHaveText("Tag added.");
            await expect(page.locator(tagNameAddedXPath)).toContainText(tagNameAddedText);
        });

        await test.step('Điền thông tin tag: name = "tag {name} 02", slug = "tag-${name}-02"', async () => {
            await page.locator(tagNameTextBoxXPath).fill(`tag ${name} 02`);
            await page.locator(tagSlugTextBoxXPath).fill(`tag-${name}-02`);
            await page.locator(addNewTagBtnXPath).click();

            //Expected result:
            //  - Hiển thị thông báo thêm tag thành công:
            //      - "Tag added."
            //      - Tag có name và slug như đã cung cấp
            //      - Có tag mới được tạo ra có name và slug như ở step"
            await expect(page.locator(noticeMsgXPath)).toHaveText("Tag added.");
            await expect(page.locator(tagName02AddedXPath)).toContainText(`tag ${name} 02`);
            await expect(page.locator(tagSlug02AddedXPath)).toContainText(`tag-${name}-02`);
        })
    });

    test("@POST_TAG_002: Tag - slug auto remove special character", async ({ page }) => {
        await test.step('Navigate to Tags', async () => {
            await page.locator(menuTagsXPath).click();
        })

        await test.step('Điền thông tin tag: name = "tag {name} 03", slug = "Đây là tag đặc biệt @100 $200"', async () => {
            await page.locator(tagNameTextBoxXPath).fill(`tag ${name} 03`);
            await page.locator(tagSlugTextBoxXPath).fill("Đây là tag đặc biệt @100 $200");
            await page.locator(addNewTagBtnXPath).click();

            //Expected result:
            //  - Hiển thị thông báo thêm tag thành công:
            //      - "Tag added."
            //      - Có tag mới được tạo ra trong danh sách tag có tên như input, slug là "day-la-tag-dac-biet-100-200"
            await expect(page.locator(noticeMsgXPath)).toHaveText("Tag added.");

            // Search tag to verify
            await page.locator(tagSearchTextBoxXPath).fill(name);
            await page.locator(searchTagBtnXPath).click();

            await expect(page.locator(tagName03AddedXPath)).toContainText(`tag ${name} 03`);
            await expect(page.locator(tagSlug03AddedXPath)).toContainText("day-la-tag-dac-biet-100-200");
        })
    })

    test('@POST_CATEGORY_001: Category - create category success', async ({ page }) => {
        await test.step('Navigate to Categories', async () => {
            await page.locator(menuCategoriesXPath).click();
        })

        await test.step('Điền thông tin category: name = "category {name} 03", slug = "Đây là category đặc biệt @100 $200"', async () => {
            await page.locator(tagNameTextBoxXPath).fill(`category ${name} 03`);
            await page.locator(tagSlugTextBoxXPath).fill("Đây là category đặc biệt @100 $200");
            await page.locator(addNewTagBtnXPath).click();

            //Expected result:
            //  - Hiển thị thông báo thêm tag thành công:
            //      - "Category added."
            //      - Có category mới được tạo ra trong danh sách category có tên như input, slug là "day-la-category-dac-biet-100-200"
            await expect(page.locator(noticeMsgXPath)).toHaveText("Category added.");

            // Search tag to verify
            await page.locator(tagSearchTextBoxXPath).fill(name);
            await page.locator(searchTagBtnXPath).click();

            await expect(page.locator(categoryName03AddedXPath)).toContainText(`category ${name} 03`);
            await expect(page.locator(categorySlug03AddedXPath)).toContainText("day-la-category-dac-biet-100-200");
        })

        await test.step('Điền thông tin category: name = "category {name} 04", parent = "K6 class"', async () => {
            await page.locator(tagNameTextBoxXPath).fill(`category ${name} 04`);
            await page.locator(parentCategoryDropdownXPath).selectOption({ label: "K6 class" });
            await page.locator(addNewTagBtnXPath).click();

            //Expected result:
            //  - Hiển thị thông báo thêm tag thành công:
            //      - "Category added."
            //      - Có tag mới được tạo ra trong danh sách tag có tên như input, slug là "day-la-category-dac-biet-100-200"
            await expect(page.locator(noticeMsgXPath)).toHaveText("Category added.");

            // Search tag to verify
            await page.locator(tagSearchTextBoxXPath).fill(name);
            await page.locator(searchTagBtnXPath).click();

            await expect(page.locator(categoryName04AddedXPath)).toContainText(`category ${name} 04`);
            await expect(page.locator(categorySlug03AddedXPath)).toContainText("day-la-category-dac-biet-100-200");
        })
    })
});
