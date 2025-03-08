# Lesson 5: DOM terminology Playwright basic

1. DOM
    - DOM = Document Object Model
    - Node
        ```
        <option value="usa">United States</option>
        ```
    - Trong đó:
        - `<option>`: thẻ/tag mở
        - `</option>`: thẻ/tag đóng
        - `United States`: text hiển thị
        - `value`: thuộc tính
        - `"usa"`: giá trị của thuộc tính
    - Ngoài ra còn có thẻ/tag tự đóng
        ```
        <img src="image.jpg" alt="Image description"/>
        ```
    - Các thẻ HTML thường gặp
        - Thẻ `<div>` (viết tắt của divide): dùng để chia các khối trong trang web
        - Thẻ `<h1></h1>` đến `<h6></h6>` (viết tắt của heading): dùng để tạo ra các header phân cấp theo thứ tự từ lớn đến bé.
        - Thẻ `<form></form>`: dùng để chứa một form thông tin.
        - Thẻ `input`: text, email, radio, checkbox, file, color, range, date
        - Thẻ `textarea`: hiển thị ô input, dạng to.
        - Thẻ `radio button`: tạo nút chọn một (radio).
        - Thẻ `checkbox`: tạo nút chọn nhiều lựa chọn (checkbox).
        - Thẻ `list` và `dropdown`: hiển thị danh sách hoặc menu thả xuống.
        - Thẻ `button`: tạo nút bấm.
        - Thẻ `table`: hiển thị bảng dữ liệu.
            - `thead` = table heading
                - `tr` = table row = 1 dòng
                    - `th`: table heading: text in đậm
            - `tbody`
                - `tr` -> `td` = table data
        - Thẻ `date picker`: tạo bộ chọn ngày.
        - Thẻ `slider`: tạo thanh trượt.
        - Thẻ `iframe`: hiển thị nội dung từ một trang web khác bên trong trang hiện tại.
2. Selector
    1. Hiểu hơn về selector
        - Là cách chọn phần tử trên trang
        - Có nhiều kiểu:
            - XPath selector
            - CSS selector
            - Playwright selector
    2. XPath selector
        - XPath = XML Path
        - Có 2 loại:
            - Tuyệt đối: đi dọc theo cây DOM
                - bắt đầu bởi 1 `/`
            - Tương đối: tìm dựa vào đặc tính
                - bắt đầu bởi 2 `//`
                - `//tenthe[@thuoctinh="giatri"]`
        - ***=> Nên dùng XPath tương đối***
3. Playwright basic syntax
    - **test**
        - Đơn vị cơ bản để khai báo một **test**
            ```
            import { test } from '@playwright/test';

            test('<tên test>', async ({ page }) => {
                // Code của test
            });
            ```
    - **step**
        - Đơn vị nhỏ hơn **test**, để khai báo từng **step** của test case
            ```
            await test.step('Tên step', async () => {
                // Code here
            });
            ```
        - ***Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain.***
    - Basic actions
        - Navigate
            ```
            await page.goto('https://pw-practice.playwrightvn.com/');
            ```
        - Click
            - Single click
                ```
                await page.locator("//button").click();
                ```
            - Double click
                ```
                await page.locator("//button").dblclick();
                ```
            - Click chuột phải
                ```
                page.locator("//button").click({
                    button: 'right'
                })
                ```
            - Click chuột kèm bấm phím khác
                ```
                page.locator("").click({
                    modifiers: ['Shift'],
                })
                ```
        - Input
            - **Fill**: Giống việc bạn paste content vào một ô input
                ```
                page.locator("//input").fill('Playwright Viet Nam');
                ```
            - **pressSequentially**: Giống việc bạn gõ từng chữ cái vào ô input
                ```
                page.locator("//input").pressSequentially('Playwright Viet Nam', {
                    delay: 100,
                });
                ```
        - Radio/checkbox
        - Select option
        - Set Input File
            - Lấy giá trị hiện tại đang là check hay không:
                ```
                const isChecked =
                page.locator("//input").isChecked();
                ```
            - Check/ uncheck
                ```
                page.locator("//input").check();
                page.locator("//input").setChecked(false);
                ```
        - Hover
            - Để **hover** vào phần tử, ta dùng hàm **hover()**:
                ```
                await page.locator("<xpath here>").hover();
                ```
        - text()
            - Hàm ***text()*** dùng để tìm ra phần tử có giá trị tương ứng. Ví dụ với DOM sau:
                ```
                <div @class=”playwright”>This is a text</div>
                Thì để chọn phần tử này, ta dùng cú pháp như sau:
                //div[text()=’This is a text’]
                ```
        - contains()
            - Đôi khi trong phần tử HTML, phần tử sẽ bị thừa khoảng trắng, hoặc có các giá trị không cố định trong text. Ví dụ
                ```
                <div> Tôi là Alex </div> // Text này có 1 ký tự space ở đầu và ở đuôi
                <div> Bây giờ là: 08:07 </div> // Thời gian sẽ tuỳ vào thời điểm truy cập trang web
                ```
            - Để chọn các phần tử này, ta cùng hàm `contains(<giá trị>, <giá trị contains>)`. Ví dụ
                ```
                //div[contains(text(), ‘Tôi là Alex’)]
                //div[contains(text(), ‘Bây giờ là:’)]
                ```
        - confirmation dialog
            - Xem video hướng dẫn: https://youtu.be/S4h4v2wQS6c?si=Cj74VVfnKK0QEzbP
