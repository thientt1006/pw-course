import { test } from '@playwright/test';

test('Bài học 3: Todo page', async ({ page }) => {
    // Truy cập trang https://material.playwrightvn.com/
    await test.step('Navigate to Material Playwrightvn', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    // Click vào “Bài học 3: Todo page”
    await test.step('Click “Bài học 3: Todo page”', async () => {
        await page.locator(`//a[@href='03-xpath-todo-list.html']`).click();
    });

    let countTodoItem = 100;
    // a. Thêm mới 100 todo item có nội dung “Todo <i>” 
    await test.step('Add new 100 todo item', async () => {
        for (let i = 0; i < countTodoItem; i++) {
            await page.locator(`//input[@id='new-task']`).fill(`Todo <${i}>`);
            await page.locator(`//button[@id='add-task']`).click();
        }
    });

    // b. Xoá các todo có số lẻ 
    await test.step('Remove todo item has odd number', async () => {
        page.on('dialog', async dialog => dialog.accept()); // handle confirmation dialog
        for (let i = 1; i <= countTodoItem; i += 2) {
            await page.locator(`//button[@id='todo-${i}--delete']`).click();
        }
    });
});
