import { test } from '@playwright/test';

const keySearch = 'Tàu vũ trụ';
const personalNotes = [
    {
        title: 'Vụ nổ tàu Starship tạo cơn mưa mảnh vỡ trên quần đảo Bahamas',
        description: 'Tầng trên của hệ thống phóng Starship phát nổ trong lần thử nghiệm thứ tám đã tạo ra cơn mưa mảnh vỡ giống mưa sao băng trên bầu trời Bahamas và Florida.'
    },
    {
        title: 'Bệnh nhân bị liệt điều khiển cánh tay robot bằng suy nghĩ',
        description: 'Nhờ giao diện não-máy tính mới, một bệnh nhân bị liệt có thể tự dùng cánh tay robot để di chuyển đồ vật trong suốt 7 tháng mà không cần điều chỉnh.'
    },
    {
        title: 'NASA tắt thiết bị của tàu vũ trụ bay xa nhất lịch sử',
        description: 'Các kỹ sư NASA tắt bớt thiết bị trên bộ đôi tàu Voyager 1 và Voyager 2 nhằm kéo dài thời gian chúng hoạt động ở không gian liên sao.'
    },
    {
        title: 'Tàu vũ trụ Starship phát nổ gây gián đoạn giao thông hàng không',
        description: 'Tàu Starship của SpaceX phát nổ trong chuyến thử nghiệm lần thứ 8 gây gián đoạn giao thông hàng không ở Florida, đánh dấu lần thứ hai thất bại của phương tiện phóng này.'
    },
    {
        title: 'Đề xuất nhiều chính sách gỡ khó cho hàng hóa nhập khẩu',
        description: 'Bộ Khoa học và Công nghệ đề xuất giảm thủ tục kiểm tra chất lượng với hàng hóa có mức độ rủi ro trung bình - thấp, chuyển sang hậu kiểm để tạo thuận lợi cho doanh nghiệp.'
    },
    {
        title: 'Khánh Hòa thí điểm 440 ha vùng nuôi biển công nghệ cao',
        description: 'UBND tỉnh Khánh Hòa triển khai đề án thí điểm phát triển nuôi biển công nghệ cao hơn 440 ha, góp phần giúp người nuôi tăng thu nhập, phát triển bền vững kinh tế biển.'
    },
    {
        title: 'Bổ sung dinh dưỡng đúng thời điểm để con cao lớn vượt trội',
        description: 'Dinh dưỡng đầy đủ, cân đối giúp trẻ em và thanh thiếu niên phát triển chiều cao tối ưu.'
    },
    {
        title: 'Phát hiện hố thiên thạch cổ xưa nhất hành tinh',
        description: 'Hố va chạm rộng ít nhất 100 km, có thể hình thành do một thiên thạch tốc độ hơn 36.000 km/h đâm vào Trái Đất khoảng 3,5 tỷ năm trước.'
    },
    {
        title: 'Robot hình người tiên tiến nhất thế giới',
        description: 'Một robot hình người tên Ameca gây chú ý tại Triển lãm di động toàn cầu (MWC) diễn ra tuần này tại Barcelona khi đưa ra giải đáp một câu hỏi hóc búa.'
    },
    {
        title: 'Tàu vũ trụ Mỹ có thể bị đổ sau khi hạ cánh trên Mặt Trăng ',
        description: 'Tàu Athena của công ty Intuitive Machines không hạ cánh thẳng đứng như dự kiến và đội phụ trách nhiệm vụ vẫn đang tìm hiểu nguyên nhân.'
    }
]

test('Bài học 4: Personal notes', async ({ page }) => {
    // Truy cập trang https://material.playwrightvn.com/
    await test.step('Navigate to Material Playwrightvn', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    // Click vào “Bài học 4: Personal notes”
    await test.step('Click “Bài học 4: Personal notes”', async () => {
        await page.locator(`//a[@href='04-xpath-personal-notes.html']`).click();
    });

    // a. Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn (khoảng 3 dòng) tại báo https://vnexpress.net/khoa-hoc, 
    await test.step('Add new 10 Personal Notes', async () => {
        for (const note of personalNotes) {
            // Fill Title
            await page.locator(`//input[@id='note-title']`).fill(note.title);

            // Fill Content
            await page.locator(`//textarea[@id='note-content']`).fill(note.description);

            // Click button "Add Note"
            await page.locator(`//button[@id='add-note']`).click();
        }
    });

    // b. Thực hiện search theo tiêu đề bài báo bất kì.
    await test.step('Add new 10 Personal Notes', async () => {
        await page.locator(`//input[@id='search']`).fill(keySearch);
    });
});
