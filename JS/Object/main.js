// Object trong javascript

var marriage = "single";

var info = {
    name: "Nguyen Hoang Hieu", // Other --> Thuoc tinh / property
    age: 18,
    address: "Go Vap, TPHCM, VN",
    marriage: marriage,
    getName: function() { // Function --> Phuong thuc / method
        return this.name;
    }
};

// two ways you can use to add a key-value pair
info.email = "hieu@fullstack.edu.vn"; // way 1
info['JobTitle'] = "Java FullStack Developer"; // way 2

console.log(info);

console.log(info.name);
console.log(info['JobTitle']);

// how to delete an object

delete info.email;

console.log(info);
console.log(info.getName());

// Object constructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getname = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User("Hieu", "Ngyuen", "Avatar");
var user = new User("Vo", "Duy", 'Avatar');

author.title = "Chia se cho thay di";
user.comment = 'Oke';

console.log("------------------");
console.log(author);
console.log(user);

// Object prototype 
User.prototype.className = "Joseph";
User.prototype.getClassName = function() {
    return this.className;
}

console.log(user.className);
console.log(author.className);

console.log("-----------------");
// Làm bài tại đây
function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}



// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'

// Doi tuong Date
var date = new Date();
console.log(date);

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(`${year} ${month} ${day}`);

/*
    Math object

    - Math.PI
    - Math.round()
    - Math.ads()
    - Math.ceil()
    - Math.floor()
    - Math.random()
    - Math.min()
    - Math.max()
*/
console.log(Math.PI);
console.log(Math.round(Math.random() * 10));

