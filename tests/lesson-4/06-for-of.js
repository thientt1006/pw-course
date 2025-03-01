// 1. Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị cho trước. 
// Ví dụ với mảng [1, 2, 3, 4, 3, 55, 23] và giá trị cho trước là 3 thì vị trí cần in ra đầu tiên là 2 và vị trí cuối cùng cần in ra là 4.
function findFirstAndLastIndex(array, target) {
    let firstIndex = -1;
    let lastIndex = -1;
    let currentIndex = 0;

    for (let value of array) {
        if (value === target) {
            if (firstIndex === -1) {
                firstIndex = currentIndex;
            }
            lastIndex = currentIndex;
        }
        currentIndex++;
    }
    return {firstIndex, lastIndex};
}

let array = [1, 2, 3, 4, 3, 55, 23];
let target = 3;
let result = findFirstAndLastIndex(array, target);
console.log(`Vị trí đầu tiên: ${result.firstIndex} - Vị trí cuối cùng: ${result.lastIndex}`);

// 2. Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. Ví dụ với chuỗi
// "Playwright" thì mảng kết quả sẽ là [“t”, “h”, “g”, “i”, “r”, “w”, “y”, “a”, “l”, “P”] => dua vao bai tap for
function reverseToArray(str) {
    let result = [];
    for (let i = str.length - 1; i >= 0; i--) {
        result.push(str[i]);
    }
    return result;
}

console.log(reverseToArray("Playwright"));

// 3. Lọc ra tất cả các phần tử duy nhất trong một mảng. Ví dụ với mảng [1, 2, 3, 1, 2, 4, 5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5]
function getUniqueElements(array) {
    let result = [];
    for (let i of array) {
        let count = 0;
        for (let j of array) {
            if (i === j) {
                count += 1;
            }
        }
        if (count === 1) {
            result.push(i);
        }
    }
    return result;
}

let arr = [1, 2, 3, 1, 2, 4, 5];
console.log('Unique array:', getUniqueElements(arr));
