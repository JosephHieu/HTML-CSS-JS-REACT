var age = 18;
var pi = 3.14; // recommended to use

var otherNumber = new Number(9); // avoid using this way

console.log(typeof otherNumber);

console.log(isNaN(20/'ab'));


// 2. Làm việc với Number
// - To string
// - To Fixed

console.log(age.toString())
console.log(pi.toFixed(3))