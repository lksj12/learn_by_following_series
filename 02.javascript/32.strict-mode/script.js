// function sum(a,b) {
    // "use strict"
    // return a+b;
// }

//class는 자동으로 strict mode
// class Cat {

// }

"use strict";

// let greeting = "hello";
// greating = "hi";
// console.log(greeting);
// console.log(greeting, window.greating);

// undefined = 8;
// NaN = 10;

// console.log(undefined);
// console.log(NaN);

// const obj = {};
// Object.defineProperty(obj, "readOnly", {
//     writable: false, value: 7
// })

// console.log(obj);

// obj.readOnly = 10;
// console.log(obj);

// function add(a,a,b) {
//     return a + a + b
// }

// "string".prop = 7;

function sum(a,b) {
    console.log(this);
    return a+b;
}

console.log(this);
sum.bind(this)(1,2);