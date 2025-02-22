// 1. Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân
// nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
// Biết:
//      - Chiều cao được tính theo đơn vị mét (VD: 1.75m)
//      - Cân nặng tính theo kg
//      - Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
//      - BMI < 18.5: Thiếu cân
//      - BMI < 25: Bình thường
//      - BMI < 30: Thừa cân
//      - BMI >= 30: Béo phì
function calculateBmi(height, weight) {
    let bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "Thiếu cân";
    }

    if (bmi < 25) {
        return "Bình thường";
    }

    if (bmi < 30) {
        return "Thừa cân";
    }

    if (bmi >= 30) {
        return "Béo phì";
    }
}

let people = [[1.75, 40], [1.75, 60], [1.75, 80], [1.75, 95]];
for (person in people) {
    let result = calculateBmi(people[person][0], people[person][1]);
    console.log(`Height: ${people[person][0]}m - Weight: ${people[person][1]} kg - Result: ${result}`);
}

// 2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ
// nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã chuyển đổi.
// Biết công thức chuyển đổi:
//      - Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
//      - Từ độ F sang độ C: (độ F - 32) * 5 / 9;
function convertDegree(degree, degreeType) {
    if (degreeType === "C") {
        return degree * 9 / 5 + 32;
    }

    if (degreeType === "F") {
        return (degree - 32) * 5 / 9;
    }
}

let temperature = [[30, "C"], [75, "F"]];
for (let i = 0; i < temperature.length; i++) {
    let result = convertDegree(temperature[i][0], temperature[i][1]);
    console.log(`Temperature: ${temperature[i][0]} ${temperature[i][1]} - Degree after convert: ${result}`);
}

// 3. Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong một mảng số.
function calculateTotal(arrNumber) {
    let total = 0;
    for (let i = 0; i < arrNumber.length; i++) {
        total = total + arrNumber[i];
    }

    return total;
}

let arrNumber = [1, -5, 8.8, 0, 7, -14, 10];
console.log(calculateTotal(arrNumber));

// 4. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
// Biết:
//      - Số 0, số 1 không phải số nguyên tố.
//      - Các số nguyên tố là số chỉ chia hết cho 1 và chính nó
function isPrimeNumber(number) {
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function findPrimeNumber(arrNumber) {
    let arrPrimeNumber = [];
    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] >= 2 && isPrimeNumber(arrNumber[i]) === true) {
            arrPrimeNumber[arrPrimeNumber.length] = arrNumber[i];
        }
    }

    return arrPrimeNumber;
}

let arrNumber2 = [-5, -3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(findPrimeNumber(arrNumber2));

// 5. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên người dùng.
// Đoạn code giả mã (pseudo code) như sau:
// // Khai báo mảng global các object có 2 thuộc tính: name, email
// // Khai báo hàm có 2 tham số: name, newEmail
// // Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên
// trùng với tham số name, cập nhật giá trị email về newEmail
let listEmail = [
    { name: "Tuan", email: "tuan@gmail.com" },
    { name: "Linh", email: "linh@gmail.com" },
    { name: "Nam", email: "nam@gmail.com" },
    { name: "Hoang", email: "hoang@gmail.com" },
    { name: "Nhi", email: "nhi@gmail.com" },
];

function updateNewEmail(name, newEmail) {
    for (let i = 0; i < listEmail.length; i++) {
        if (listEmail[i].name === name) {
            listEmail[i].email = newEmail;
        }
    }
}

let listNewEmail = [
    { name: "Tuan", newEmail: "tuanNewEmail@gmail.com" },
    { name: "Linh", newEmail: "linhNewEmail@gmail.com" },
    { name: "Nhi", newEmail: "nhiNewEmail@gmail.com" },
];

for (let i = 0; i < listNewEmail.length; i++) {
    updateNewEmail(listNewEmail[i].name, listNewEmail[i].newEmail);
}

console.log(listEmail);

// 6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một mảng các object.
// Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}
function tinhDiemTrungBinh(arrStudent) {
    let tongDiem = 0;
    for (let i = 0; i < arrStudent.length; i++) {
        tongDiem += arrStudent[i].score;
    }
    return tongDiem / arrStudent.length;
}

let arrStudent = [
    { name: "Alex", score: 85 },
    { name: "Alex1", score: 46 },
    { name: "Alex2", score: 92 },
    { name: "Alex3", score: 54 },
    { name: "Alex4", score: 40 },
]

console.log(tinhDiemTrungBinh(arrStudent));

// 7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
// Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”: “product 1”, price: 100 }
function isFreeProduct(product) {
    for (let i = 0; i < product.length; i++) {
        if (product[i].price <= 0) {
            return true;
        }
    }
    return false;
}

let product = [
    { name: "product 1", price: 100 },
    { name: "product 2", price: 20 },
    { name: "product 3", price: 31 },
    { name: "product 4", price: 0 },
    { name: "product 5", price: 73 },
]

console.log(`Has free product: ${isFreeProduct(product)}`);

// 8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng
// mở cửa từ 9 giờ sáng đến 9 giờ tối.
function isOpen(hour) {
    if (hour < 0 || hour > 23) {
        console.log("Hour is incorrect. Please check again!");
    }

    if (hour >= 0 && hour <= 23) {
        if (hour >= 9 && hour <= 21) {
            console.log("Store is opening!");
        }

        if (hour < 9 || hour > 21) {
            console.log("Store is closed!");
        }
    }
}

isOpen(25);
isOpen(15);
isOpen(8);

// 9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5
// tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.
function calculatePriceTicket(age) {
    if (age < 0 || age > 150) {
        console.log("Age is incorrect. Please check again!");
    }

    if (age >= 0 && age <= 150) {
        if (age <= 5) {
            console.log("Ticket price: free");
        }

        if (age >= 6 && age < 18) {
            console.log("Ticket price: 50k");
        }

        if (age >= 18) {
            console.log("Ticket price: 100k");
        }
    }
}

calculatePriceTicket(-1);
calculatePriceTicket(3);
calculatePriceTicket(10);
calculatePriceTicket(30);

// 10. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh
// switch...case để xử lý.
function printMonthName(month) {
    switch (month) {
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        case 7:
            console.log("July");
            break;
        case 8:
            console.log("August");
            break;
        case 9:
            console.log("September");
            break;
        case 10:
            console.log("October");
            break;
        case 11:
            console.log("November");
            break;
        case 12:
            console.log("December");
            break;
        default:
            console.log("Incorrect month. Please check again!");
    }
}

let months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
for (let i = 0; i < months.length; i++) {
    printMonthName(i);
}

// 11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>=
// 6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5).
function phanLoaiDiem(diem) {
    if (diem < 0 || diem > 10) {
        console.log("Diem khong hop le. Vui long kiem tra lai!");
    }

    if (diem >= 0 && diem <= 10) {
        if (diem >= 8) {
            console.log("Loai Gioi");
        }
        if (diem >= 6.5 && diem < 8) {
            console.log("Loai Kha");
        }
        if (diem >= 5 && diem < 6.5) {
            console.log("Loai Trung Binh");
        }
        if (diem < 5) {
            console.log("Loai Yeu");
        }
    }
}

phanLoaiDiem(11);
phanLoaiDiem(9);
phanLoaiDiem(7);
phanLoaiDiem(6);
phanLoaiDiem(3);

// 12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng
// (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)
function duBaoThoiTiet(nhietDo) {
    if (nhietDo >= 30) {
        console.log(`Nhiet do: ${nhietDo} - Thoi tiet: Nong`);
    }

    if (nhietDo < 30 && nhietDo >= 20) {
        console.log(`Nhiet do: ${nhietDo} - Thoi tiet: Mat`);
    }

    if (nhietDo < 20) {
        console.log(`Nhiet do: ${nhietDo} - Thoi tiet: Lanh`);
    }
}

duBaoThoiTiet(40);
duBaoThoiTiet(25);
duBaoThoiTiet(10);
