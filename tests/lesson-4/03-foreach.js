// 1. In ra tất cả các phần tử của một mảng. Ví dụ mảng [1, 2, 3] thì in ra
//      1
//      2
//      3

let array = [1, 2, 3]

// for
console.log("Using for");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// for of
console.log("Using for...of");
for (let i of array) {
    console.log(i);
}

// foreEach
console.log("Using forEach");
array.forEach((value, index) => {
    console.log(`Index: ${index} - Value: ${value}`);
});

// 2. Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. Ví dụ mảng [1, 2, 3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3
let sum = 0;
let max = array[array.length - 1];
let min = array[array.length - 1];
for (let i of array) {
    sum += i;
    if (i > max) {
        max = i;
    }
    if (i < min) {
        min = i;
    }
}

console.log(`Sum: ${sum} - Max: ${max} - Min: ${min}`);

// 3. Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi. Ví dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6]
let newArray = [];
array.forEach(value => {
    newArray.push(value * 2);
})

console.log('New array:', newArray);
