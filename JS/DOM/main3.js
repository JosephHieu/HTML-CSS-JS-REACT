
// Node Properties

var boxElement = document.querySelector('.box2');

// console.log(boxElement.style);

// boxElement.style.width = '100px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'red';

Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green'
});

console.log(boxElement.style.width);


// ClassList property

// add
// contains
// remove
// toggle

console.log(boxElement.classList.length);
console.log(boxElement.classList.value);

boxElement.classList.add('red', 'blue');

console.log(boxElement.classList.contains('blue'));

setInterval(() => {
    boxElement.classList.remove('red');
}, 3000);



