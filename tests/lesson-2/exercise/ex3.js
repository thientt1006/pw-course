// a. Khai báo một hằng số với giá trị kiểu Number bất kỳ.
const current_year = 2025;

//  b. In ra dòng code sau ở console:
//      - Nếu hằng số lớn hơn 0: "Giá trị bạn nhập là số dương"
//      - Nếu hằng số nhỏ hơn 0: "Giá trị bạn nhập là số âm"
//      - Nếu hằng số lớn = 0: "Giá trị bạn nhập là số 0"

if (current_year > 0) {
    console.log("Giá trị bạn nhập là số dương");
}

if (current_year < 0) {
    console.log("Giá trị bạn nhập là số âm");
}

if (current_year === 0) {
    console.log("Giá trị bạn nhập là số 0");
}
