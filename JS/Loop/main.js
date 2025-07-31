/*
    Loop
    1. for - lặp với điều kiện
    2. for/in - lặp qua key của đối tượng
    3. for/of - lặp qua value của đối tượng
    4. while - lặp khi điều kiện đúng
    5. do/while - lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng.

*/

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// for in

var myInfo = {
    name: "Hieu",
    age: 18,
    address: "Go Vap"
}


for (var key in myInfo) {
    console.log(myInfo[key]);
}

var languages = ["Javascript", "PHP", "Ruby", "Java"];
for (var key in languages) {
    console.log(key);
}

for (var key of languages) {
    console.log(key);
}

console.log(Object.keys(myInfo));
for (var value of Object.keys(myInfo)) {
    console.log(myInfo[value]);
}

console.log(Object.values(myInfo));

for (var value of Object.values(myInfo)) {
    console.log(value);
}

var myArray = [
    [1, 2], [3, 4], [5, 6]
];

for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
        console.log(myArray[i][j]);
    }
}

// recursion
var arr = ['a', 'b', 'c', 'a', 'b', 'c'];

console.log([...new Set(arr)]);

function countDown(num) {
    if (num == 0) {
        return 1;
    }
    return countDown(num - 1);
}

countDown(10);

function giaiThua(number) {
    if (number == 1) return 1;
    return number * giaiThua(number - 1);
}

console.log(giaiThua(3));