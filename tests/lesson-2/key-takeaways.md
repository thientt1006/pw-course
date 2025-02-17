# 1. Version control system
- Local: lưu ở máy cá nhân 
- Centralize: lưu ở một máy chủ tập trung (khả năng gây ra conflict cao, dễ mất data khi máy hỏng)
- Distributed: lưu ở nhiều máy khác nhau (bao gồm cả cloud, có nhiều máy backup)

# 2. Git
1. So sánh Git với các VCS khác
    - Tính năng: Dễ dùng, có nhiều tính năng vượt trội: branching, tốc độ xử lý nhanh
    - Chi phí: Free
    - Phổ biến: nhiều công ty sử dụng

2. Git & GitHub

    | Git               | GitHub                |
    |-------------------|-----------------------|
    |Là một phần mềm    | Là một dịch vụ web    |
    |Cài trên máy của bạn|Host trên website|
    |Là một commandline tool | Là công cụ có giao diện|
    |Là công cụ quản lý phiên bản, đưa file vào Git repository|Là nơi để upload Git repository lên|
    |Có các tính năng của Version Control System|Có các tính năng của Version Control System và một số tính năng khác|

3. Git - Three states
    - Working Directory: Các file mới hoặc file có thay đổi
    - Staging Area: Các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)
    - Repository: Các commit (phiên bản)

4. Git - key takeaways: các câu lệnh thường dùng:
    1. Khởi tạo thư mục được quản lý bởi Git: 
        - git init
    2. Cấu hình:
        - Cho 1 repo:
            - git config user.name “name”
            - git config user.email “email”
        - Cho toàn bộ máy tính (default)
            - git config --global user.name “user”
            - git config --global user.email “email”
        - **Bonus:** 
            - Xem lại config:
                - git config user.name
                - git config user.email
            - Config branch default:
                - git config --global init.defaultBranch main
            - Liên kết repository vừa tạo với Git:
                - git remote add origin <ssh_link>
    3. Thêm file vào vùng staging
        - Thêm 1 file: git add <file_name>
        - Thêm toàn bộ: git add .
    4. Xem trạng thái file
        - git status
            - File màu xanh: vùng staging
            - File màu đỏ: vùng working directory
    5. Commit
        - Commit: git commit -m ”message”
        - Kiểm tra lịch sử commit: git log
    6. Git - Simple workflow
        - Không dùng global config
            - init -> config -> add -> commit -> push
        - Dùng global config
            - init ------------> add -> commit -> push

5. Git - Commit convention
    - < type >: <short_description>
    - type: loại commit
        - **chore**: sửa nhỏ lẻ, chính tả, xóa file không dùng tới, ...
        - **feat**: thêm tính năng mới, test case mới
        - **fix**: sửa lỗi 1 test trước đó
    - short_description: mô tả ngắn gọn (50 kí tự), tiếng Anh hoặc tiếng Việt không dấu.

# 3. Javascript basic
1. Variable, constant, data type
    - Khai báo:
        - var <ten_bien> = <gia_tri>;
        - let <ten_bien> = <gia_tri>;
        - const <ten_bien> = <gia_tri>
    - Khác nhau **var** và **let**
        - Phạm vi của biến
            - **var**: phạm vi toàn cục (global)
            - **let**: phạm vi trong cặp ngoặc {}
        - Nên dùng: let, vì dễ kiểm soát phạm vi của biến
    - Có 8 loại kiểu dữ liệu: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object.
2. Comparison operator
    - So sánh hơn kém: >, <
    - So sánh bằng: ==, ===, !=, !==, >=, <=
3. Unary operator
    - i++ bằng với i = i + 1
    - i-- bằng với i = i - 1
4. Arithmetic operator
    - Các phép toán: +, -, *, /, %
5. Conditional
    - Conditional = điều kiện, dùng để kiểm tra có nên thực hiện một đoạn logic không.
    - Cú pháp: if (<điều kiện>) { // code }. Nếu điều kiện đúng, sẽ chạy đoạn code
        ```
        if (5 > 3) {
            console.log("5 lớn hơn 3")
        }
        ```
6. Loops
    - Dùng để thực hiện một đoạn logic một số lần nhất định
    - Cú pháp: for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) { // code }
        ```
        for (let i = 1; i <= 10; i++) {
            console.log("Giá trị của i là: ", i);
        }
        ```
