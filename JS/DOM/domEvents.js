
// DOM events
// 1. Attribute events
// 2. Assign event using the element node

// var h1Elements = document.querySelectorAll('.dom');

// for (var i = 0; i < h1Elements.length; i++) {
//     h1Elements[i].onclick = function(e) {
//         console.log(e.target);
//     }
// }

// 1. Input / select
// 2/ Key up / down

// var inputValue;

// var inputElement = document.querySelector('input[type="text"]');

// inputElement.oninput = function(e) {
//     console.log(e.target.value);
// }

// var checkElement = document.querySelector('input[type="checkbox"]');

// checkElement.onchange = function(e) {
//     console.log(e.target.checked);
// }

// inputElement.onkeyup = function(e) {
//     console.log(e);
// }

// document.onkeydown = function(e) {
//     switch(e.which) {
//         case 27: 
//             console.log('EXIT');
//             break;
//         case 13:
//             console.log('SEND CHAT');
//             break;
//     }
// }

// 1. preventDefault
// 2. stoopPropagation

// var aElements = document.links;

// for (var i = 0; i < aElements.length; i++) {
//     aElements[i].onclick = function(e) {
//         // console.log(e.target.href);

//         if(!e.target.href.startWith('https://f8.edu.vn')) {
//             e.preventDefault();
//         }
//     }
// }

// var ulElement = document.querySelector('ul');

// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }

// ulElement.onclick =
//     function(e) {
//         console.log(e.target);
// }

document.querySelector('div').onclick = function() {
    console.log('DIV');
}

document.querySelector('button').onclick = function(e) {
    e.stopPropagation();
    console.log('Click me');
}











