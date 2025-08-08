// 1. Var / Let, Const: Scope, Hosting
// 2. Const / Var, Let: Assignment

// {
//   var course = "Javascript basic";
// }

// let a = 10;

// 3. Multi-line String
const courseName = "Javascript";
const description = `Course name: ${courseName}`;

console.log(description);

const lines = `Line 1
Line 2
Line 3`;

console.log(lines);

// 4. Arrow function

const sum = (a, b) => {
  return a + b;
};

const ob = (a, b) => ({
  a: a,
  b: b,
});

console.log(ob(2, 2));

const course = {
  name: "Javascript basic!",
  getName: function () {
    return this.name;
  },
};

console.log(course.getName());

// 5. Classes
// function Course(name, price) {
//   this.name = name;
//   this.price = price;
// }

class Course {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

const phpCourse = new Course("PHP", 1000);
const jsCourse = new Course("Javascript", 1500);

console.log(phpCourse);
console.log(jsCourse);

// 6. Default parameter values
function logger(log = "Gia tri mac dinh") {
  console.log(log);
}

logger(undefined);

// 7. Enhanced Object literals
// Định nghĩa key: value cho object
// Định nghĩa method cho object
// Định nghĩa key cho object dưới dạng biến

var fieldName = "JS";
var price = 1000;

var courses = {
  fieldName,
  price,
  getName() {
    return price;
  },
};

// Destructuring trong Javascript ES6
var array = ["Javascript", "PHP", "Ruby"];

var [a, b, ...rest] = array;

console.log(a, b);
console.log(rest);

var { fieldName, price } = courses;
console.log(fieldName, price);
