var fullName = 'Nguyen Hoang Hieu';

// alert(fullName);

// Giới thiệu một số hàm built-in
// build-in function là những hàm được xây dựng sẵn
// 1. Alert
// 2. Console
// 3. Confirm
// 4. Prompt
// 5. Set timeout
// 6. Set interval


console.log(fullName);

// confirm('Xac nhận bạn đủ tuổi');
// prompt('Xac nhận.');

// setTimeout(function () {
//     alert("HieuDepZai");
// }, 1000)

// Kiểu dữ liệu nguyên thủy

/* 
1. Dữ liệu nguyên thủy - Primitive Data
    - Number
    - String 
    - Boolean
    - Undefined
    - Null
    - Symbol

2. Dữ liệu phức tạp - Complex Data
    - Function
    - Object
*/

// Number type
var a = 1;
var b = 2;
var c = 1.5;

// String type
fullName = "Joseph Hieu";

// Boolean
var isSuccess = false;

// Undefined type
var age;

console.log(age);

// Null
var isNull = null; // nothing

// Symbol
var id = Symbol('id'); // unique
var id2 = Symbol('id'); // unique

console.log(id == id2);

// Function
var myFunction = function() {
    console.log('Hi, Xin chao cac ban!');
}

myFunction();

// Object types
var myObject = {
    name: 'Hieu Hoang',
    age: 21,
    address: 'TP.HCM',
    myFunction: function () {
        
    }
};

console.log(typeof myObject);
console.log('myObject', myObject);

var myArray = ['Javascript', 'PHP', "Ruby"];

console.log(typeof myArray);