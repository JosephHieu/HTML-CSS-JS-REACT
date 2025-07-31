var date = 31;

if (date === 2) {
    console.log("Today is Monday");
} else if(date === 3) {
    console.log("Today is Tuesday");
} else {
    console.log("Another days of week");
}

// Switch statement

switch(date) {
    case 2: 
        console.log("Today is Monday");
        break;
    case 3: 
        console.log("Today is Tuesday");
        break;
    default:
        console.log("Another days of week");
}

// Ternar Operator: toan tu 3 ngoi
var course = {
    name: "Java",
    coin: 250
}

var result = course.coin > 0 ? `${course.coin} Coins` : 'Free of charge';
console.log(result);