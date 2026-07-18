
/*const prompt = require('prompt-sync')();
function greet(a){
    console.log("Hello, " + a);
}
greet(prompt());// how to take input from user in js*/

/*//MAP

let nums = [ 2,4,6,8 ];

let TRIPLE = nums.map(x => x * 3);

console.log(TRIPLE);

//FILTER

let ages = [12, 18, 25, 15, 30];

let old = ages.filter(x => (x === 18 || x>18));

console.log(old);

//REDUCE 
 
let prices = [100, 250, 50, 600];

let sum = prices.reduce((total, x) => total + x, 0);

console.log(sum);*/

//CLOSURES

/*function greet(name) {
    return function () {
        console.log("Hello " + name);
    };
}

const greetAyush = greet("Ayush");
//const greetRahul = greet("Rahul");

greetAyush();
greet("Ayush")();
//greetRahul();*/

//HOF

/*function multiplyBy(x) {
    return function(y) {
        return x * y;
    };
}

const double = multiplyBy(2);

console.log(double(5));*/

/*function outer() {
    return function() {
        console.log("JavaScript");
    };
}

const fn = outer();

fn();*/
/*
//shallow copy
const personal = {
    name: "Ayush"
};

const personal_name={...personal}
//


const academic = {
    course: "AI",
    year: 2
};

const student = {
    ...personal,
    ...academic,marks:55
};
const update={...student,year:3,marks:60}

console.log(student);
console.log(update)

*/

const obj={a:1,b:2}
// keys to string
console.log(Object.keys(obj).toString())
// key values to string
console.log(Object.values(obj).toString())