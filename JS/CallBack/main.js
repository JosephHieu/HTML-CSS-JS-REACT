
// CallBack 

// 1. Là hàm
// 2. Truyền quan đối số
// 3. Được gọi lại (trong hàm nhận đối số)


function myFunction(param) {
    // console.log(typeof param);
    if (typeof param === 'function') {
        param('Hoc Lap Trinh');
    }
}

function myCallBack(value) {
    console.log('Value: ', value);
}

myFunction(myCallBack);

var courses = ['Javascript', 'PHP', 'Ruby'];

var htmls = courses.map(function(course) {
    return `<h2>${course}</h2>`;
});

console.log(htmls.join(''));

Array.prototype.map2 = function(callback) {
    // console.log(this);
    var output = [], arrayLength = this.length;
    for (var i = 0; i < arrayLength; i++) {
        var result = callback(this[i], i);
        // console.log('result: ', result);
        output.push(result);
    }
    return output;
}

var htmls = courses.map2(function(course) {
    // console.log(index, course);
    return `<h2>${course}</h2>`;
});

console.log(htmls.join(''));

console.log("-----------------------");

Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
}

var output = courses.forEach2(function(course, index, array) {
    console.log(course, index, array);
});

// rebuilt filter method

Array.prototype.filter2 = function(callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if(callback(this[index], index, this)) {
                output.push(this[index]);
            }
        }
    }
    return output;
}

var studies = [
    {
        name: 'Javascript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name: 'Ruby',
        coin: 980
    }
];


var filterStudies = studies.filter2(function(study, index, array) {
    return study.coin > 700;
});

console.log(filterStudies);




