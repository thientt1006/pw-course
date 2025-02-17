// a. Khai báo chiều cao của bạn (cm)
let height = 170;

// b. In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng một dòng
let ideal_weight = (height % 100) * 9 / 10;
let max_weight = (height % 100);
let min_weight = (height % 100) * 8 / 10;

console.log("Cân nặng lý tưởng:", ideal_weight, "Cân nặng tối đa:", max_weight, "Cân nặng tối thiểu:", min_weight);
