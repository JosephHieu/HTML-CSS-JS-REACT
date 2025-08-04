
// Event listener
// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe / Hủy bỏ lắng nghe


var btn = document.getElementById('btn');

// console.log(btn);

// btn.onclick = function() {
//     console.log('Viec 1');


//     console.log('Viec 2');


//     console.log('Viec 3');
// }

function viec1() {
    console.log("Viec 1");
}

btn.addEventListener('click', viec1);

setTimeout(function() {
    btn.removeEventListener('click', viec1);
}, 3000);