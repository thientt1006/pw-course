// 1. Khởi động Tàu Vũ trụ K12
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K12";
let crew = ["Thiên", "An", "Vi", "Hương", "Tuấn", "Minh", "Ánh", "Phong", "Nga", "Lợi", "Uyên"];

function launchShip(crew) {
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew.join(", ")} sẽ đồng hành cùng bạn trong chuyến phiêu lưu <mission>!`;
}

console.log(launchShip(crew).replace("<mission>", `"${mission}"`));

// 2. Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
    return speed * time;
}

let speed = 1000;
let time = 24;
let distance = calculateDistance(speed, time);
console.log(`Khoảng cách đến hành tinh bí ẩn với tốc độ ${speed} km/h và thời gian ${time} giờ là: ${distance} km`);

// 3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
    return time.toString(16);
}

let normalTime = 120;
let timeOnStrangerPlant = convertTimeToHex(normalTime);
console.log(`Thời gian bình thường: ${normalTime}s - Thời gian trên "Hành tinh kỳ lạ" sau chuyển đổi: ${timeOnStrangerPlant}s`);

// 4. Khám phá kho báu
function decryptCode(code) {
    let decryptedCode = "";
    for (let character of code) {
        if (character === character.toLowerCase()) {
            decryptedCode += character.toUpperCase();
        } else if (character === character.toUpperCase()) {
            decryptedCode += character.toLowerCase();
        }
        else {
            decryptedCode += character; //Giữ nguyên các ký tự ko được chuyển đổi
        }
    }
    return decryptedCode;
}

let encryptedCode = "K12 Challenge";
decryptedCode = decryptCode(encryptedCode);
console.log(`Mật mã "${encryptedCode}" sau khi chuyển đổi là: "${decryptedCode}"`);

// 5. Trở về Trái Đất
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}

returnToEarth();