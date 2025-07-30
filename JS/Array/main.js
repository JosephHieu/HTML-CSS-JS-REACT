var languages = ['Java', 'Javascript', 'Python', 'C/C++', 'Rust', 'HTML/CSS', 'C#']

var langs = new Array ('Java', 'Javascript', 'Python', 'C/C++', 'Rust', 'HTML/CSS', 'C#'); // avoid to using this way 


console.log(languages);
console.log(typeof langs);
console.log(typeof languages);

console.log(Array.isArray(new Array(2)));

console.log(languages.length);

// index, key
console.log(languages[0]);

// Some methods frequently are used
console.log(languages.join(" "));
console.log(languages.toString().replace(/,/g, " "));

// pop: delete the last element of array and return element has been deleted
console.log(languages.pop())

// push: add a element to the last position of array
console.log(languages.push("PHP"));

// shift: delete the first element of array and return element has been deleted
console.log(languages.shift());

console.log(languages);

// unshift: add a element to the first position of array
languages.unshift("Dart");
console.log(languages);


// splicing: delete elements from index for paramater one,
// and how many elements you want to clear for parameter two
// if you want to insert element just add them for paramer three
console.log("---------------------");
languages.splice(1, 0, 'Java');
console.log(languages);


// concat: using for joining two array
console.log(languages.concat(langs));

// slicing: cut array from start index to end index
console.log(languages.slice(1, 4));


