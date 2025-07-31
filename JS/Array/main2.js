/* 
    Array methods:
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce()

*/

var courses = [
    {
        id: 1,
        name: 'Javascript Masterclass',
        coin: 0
    },
    {
        id: 2,
        name: "Java Masterclass",
        coin: 500
    },
    {
        id: 3,
        name: 'Ruby Masterclass',
        coin: 300
    }
];

// forEach - travels all element in an array

courses.forEach(function(course, index) {
    console.log(index, course);
});

// every - every single course should be equal 0

var isFree = courses.every(function(course) {
    return course.coin === 0;
});

console.log(isFree);

// some - just one course = 0 is enough to return true

var isFree = courses.some(function(course) {
    return course.coin === 0;
});

console.log(isFree);


// Find - find one element that is satisfied
var course = courses.find(function(course) {
    return course.name === "Java Masterclass";
});

console.log(course);

// Filter - return all elemet those are satisfied
var listCourses = courses.filter(function(course) {
    return course.coin > 0;
});

console.log(listCourses);

// map 
var newCourses = courses.map((course, index, originArray)=> {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia ${course.coin}`,
        index: index,
        originArray: originArray
    }
});

console.log(newCourses);


var newArray = courses.map((course, index) => `<h2>${course.name}</h2>`);

console.log(newArray);
console.log(newArray.join(''));

// reduce

var totalCoin = 0;

for (var course of courses) {
    totalCoin += course.coin;
}

console.log(totalCoin);

console.log("-------------------");

var i = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray) {

    i++;

    var totalCoin = accumulator + currentValue.coin;

    console.table({
        'Luot chay: ': i,
        'Bien tich tru: ': accumulator,
        'Gia Khoa hoc: ': currentValue.coin,
        'Tich tru duoc: ': totalCoin
    });
    console.log(currentValue);
    
    return accumulator + currentValue.coin;
}



var totalCoin = courses.reduce(coinHandler, 0);

// includes method
var title = 'Responsive web design';
console.log(title.includes('web', 0));

var Lg = ["Java", "C", "Rust", "Python"];
console.log(Lg.includes('C', 0));