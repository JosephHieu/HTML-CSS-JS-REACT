// Toan tu so sanh

var a = 1;
var b = '1';

console.log(a == b);
console.log(a === b);

console.log(a != b);
console.log(a !== b);

console.log("---".repeat(10));

a = 1;
b = 2;

// if (a < b) {
//     console.log('A < B');
// } else {
//     console.log('A > B');
// }

var result = a < b && a < 0;

console.log(result);

result = 'A' && 'B' && 'C' && 'D'
if (result) {
    console.log("Dieu kien dung");
} else {
    console.log('dieu kien sai')
}

console.log('result', result);
console.log('result' + result);

console.log("---".repeat(10));

/* 
1. Hàm
    - Một khối mã
    - Làm 1 việc cụ thể
2. Loại hàm
    - Built-in
    - Tự định nghĩa

3. Tính chất
    - Không thực thi khi định nghĩa
    - Sẽ thực thi khi được gọi
    - Có thể nhận tham số
    - Có thể trả về 1 giá trị
*/

function showMessage() {

    // code
    console.log('Bao boi cua anh a!');
}

showMessage();


function writeLog(message) {
    console.log(typeof message);
}

writeLog("Nguyen Hoang Hieu");
writeLog('Day la 1 log');
writeLog(['JS', "PHP"]);


console.log(1, 2, 3, 4);

function writeSomething() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `;
        console.log(myString);
    }
}

writeSomething('Con me may');

function sum(a, b) {

    return a + b;
}

var result = sum(9.8, 1.5);
console.log(result);

console.log('---'.repeat(10));

/* 
    Các loại function
    1. Declaration function
    2. Expression function
    3. Arrow function
*/

// 1. Declaration fuction
function sayHi() {
    console.log('Hi everyone');
}

// 2. Expression function
var showMessage2 = function() {

}

setTimeout(function() {

});

setTimeout(function autoLogin() {

});

var herObject = {
    myFunction: function() {

    }
}

// Template string ES6
var first = "Hieu";
var last = "Hoang";

console.log(`Toi la: ${first} ${last}`);

// Phuong thuc cua string

var myString = "Hoc Javascript muc co ban";

// 1. Length
console.log(myString.length);

// 2. Find index
console.log(myString.indexOf('J'));

// 3. Cut string
console.log(myString.substring(10))
console.log(myString.slice(0, 10));

// 4. Replace string
console.log(myString.replace('JavaScript', 'JS'));

console.log(myString.toLowerCase());
console.log(myString.toUpperCase());

// Trim
console.log(myString.trim());

// split
var languages = 'Javascript, PHP, Ruby, Java';
console.log(languages.split(', '));

// get a character by index
console.log(myString.charAt(0));













