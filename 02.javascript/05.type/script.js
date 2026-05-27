// Primitive -> call stack
// string, number, boolean, null, undefined, symbol
// fixed size, real data is assigned

// Objective -> heap
// function, array, classes, object
// flexible size, memory address is storaged

let foo = 42;
console.log(typeof foo);

foo = "A";
console.log(typeof foo);

foo = true;
console.log(typeof foo);

foo = null;
console.log(typeof foo);

foo = undefined;
console.log(typeof foo);

// String
const name = "Han";

// Number
const age = 30;

// Boolean
const hasJob = true;

// Null
const car = null;

// Undefined
let anything;

//Symbol
const sym = Symbol();

// Array
const hobbies = ["walking", "books"]

// Object literal
const address = {
    province: "경기도",
    city: "성남시"
};

console.log(typeof hobbies);
console.log(typeof address);

console.log(Array.isArray(hobbies));
console.log(Array.isArray(address));