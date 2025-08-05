
// JSON

// 1. là một định dạng dữ liệu (chuỗi)
// 2. JavaScript Object Notation
// 3. JSON: Number, String, Boolean, Null, Array
// Object

// Mã hóa / giải mã
// Encode / decode
// Stringify: Từ Javascript -> JSON
// Parse: TỪ JSON -> Javascript types

// var json = '["Javascript","PHP"]';
var json = '{"name":"Son Dang","age":18}';

var a = '1';

console.log(JSON.parse(json));

console.log(JSON.stringify(true));

// Promise (sync, async)
// Promise have 3 status
// 1. Pending
// 2. Fullfilled
// 3. Rejected

var promise = new Promise(
    // Executor
    function(resolve, reject) {

        // Logic
        // Success: resolve() - Pending
        // Faile: reject()
        // resolve();
        // reject('Thong bao loi')

    }
);

promise
    .then(function() {
        console.log('Successfully! 1');
    })
    .then(function() {
        console.log('Successfully! 2');
    })
    .then(function() {
        console.log('Successfully! 3');
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log('Done!');
    });


function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    })
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return sleep(1000);
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    })
    .then(function() {
        console.log(4);
        return sleep(1000);
    })