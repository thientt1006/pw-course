// 1. In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. Ví dụ: object student = {“name”: “Alex”, “age”: 10} thì in ra
// name=Alex
// age=10
let student = {
    name: "Alex",
    age: 10
}

for (let i in student) {
    console.log(`${i}: ${student[i]}`);
}

// 2. Tính tổng các giá trị số của các thuộc tính trong một đối tượng. Ví dụ: object
// student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng 30 (=10+20).
student["salary"] = 20;
let sum = 0;
for (let i in student) {
    // typeof value === "number" → Đảm bảo là kiểu number.
    // !Number.isNaN(value) → Loại bỏ NaN. (Not-a-Number)
    // Number.isFinite(value) → Loại bỏ Infinity và -Infinity. 
    //      (Infinity và -Infinity là các giá trị số đặc biệt trong JavaScript đại diện cho số lớn vô hạn và số nhỏ vô hạn.)
    if (typeof student[i] === "number" && !Number.isNaN(student[i]) && Number.isFinite(student[i])) {
        sum += student[i];
    }
}

console.log(`Sum = ${sum}`);

// 3. Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. Ví dụ object
// student={“name”: “Alex”, “age”: 10} thì sẽ tạo ra một mảng [“name”, “age”]
let objectArray = [];
for (let i in student) {
    objectArray.push(i);
}

console.log('New object array:', objectArray);
