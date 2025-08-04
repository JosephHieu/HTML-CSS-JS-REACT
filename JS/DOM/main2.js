
// innerText, textContent

// geter

// setter

// var headingElement = document.querySelector('.heading2');

// console.log(headingElement.innerText);
// console.log(headingElement.textContent);

// headingElement.innerText = '<i>New Heading</i>';

// // innerHTML, outerHTML

// var boxElement = document.querySelector('.box2');

// boxElement.innerHTML = '<h1 title="Heading">Heading</h1>';

// console.log(document.querySelector('.box2 h1').innerText);

// console.log(boxElement.innerHTML);

var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var ulTag = document.querySelector('.courses-list');
   
    var liTag = courses.map(function(course) {
        return `<li>${course}</li>`;
    });

    ulTag.innerHTML = liTag;
}

console.log(render(courses));