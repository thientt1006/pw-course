// 1. In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. Ví dụ: object student = {“name”: “Alex”, “age”: 10} thì in ra
// name=Alex
// age=10
let student = {
    name: "Alex",
    age: 10
}

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

// 2. Tính tổng các giá trị số của các thuộc tính trong một đối tượng. Ví dụ: object
// student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng 30 (=10+20).
student["salary"] = 20;
let sum = 0;
for (let key in student) {
    // typeof value === "number" → Đảm bảo là kiểu number.
    // !Number.isNaN(value) → Loại bỏ NaN. (Not-a-Number)
    // Number.isFinite(value) → Loại bỏ Infinity và -Infinity. 
    //      (Infinity và -Infinity là các giá trị số đặc biệt trong JavaScript đại diện cho số lớn vô hạn và số nhỏ vô hạn.)
    if (typeof student[key] === "number" && !Number.isNaN(student[key]) && Number.isFinite(student[key])) {
        sum += student[key];
    }
}

console.log(`Sum = ${sum}`);

// 3. Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. Ví dụ object
// student={“name”: “Alex”, “age”: 10} thì sẽ tạo ra một mảng [“name”, “age”]
let objectArray = [];
for (let key in student) {
    objectArray.push(key);
}

console.log('New object array:', objectArray);
