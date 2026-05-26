"use strict";
// variables
let bool;
// bool = "string";
bool = false;
let number = 6;
number = 1.12345;
let string = "Doe";
//Array
let names1 = ["John", "Kim"];
let names2 = ["John", "Kim"];
let array1 = ["John", 1, 2];
let array2 = ["John", 1, 2];
let somearr = ["John", 1, 2, true, [], {}];
//Read onlhy
let strarr = ["A", "B"];
let numarr = [1, 2, 3];
// strarr.push("X");
// numarr[0] = 2;
//Tuple
let tuple1 = ["A", 1];
// tuple1 = ["A", 1, "B", 2];
// tuple1 = [1, "A"];
let tuple2 = [["A", 1], ["B", 2]];
// tuple2 = ["B",2];
let tuple3 = [...tuple1];
tuple3.push(3);
// tuple3.push(false);
console.log(tuple1);
console.log(tuple3);
//Any
let any1 = "ab";
any1 = 1;
//Unknown
let unk = 1;
// let num: number = unk;
let num = unk;
//Object
let obj = {};
let arr = [];
// let nul: object = null; //strict true 모드 사용시 에러
let nul = null;
let date = new Date();
const obj1 = {
    id: 1,
    title: "title1"
};
//Union
let union;
union = 1;
union = "2";
// union = [];
//Function
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2;
func2 = function () {
    const x = "hi";
    //     return x; // 에러 안남
};
// let a = func2();
// console.log(a);
// function func2(): void {
//     const x = "hi";
//     return x;
// }
// // Null, Undefined
// let number1: number = undefined
// let string9: string = null;
// let object: { a: 10, b: false } = undefined;
// let array: any[] = null;
// let undefined1: undefined = null;
// let null1: null = undefined;
// let void1: void = null;
let void2 = undefined;
// void
function greeting() {
    console.log('hi');
}
const hi = greeting();
console.log(hi); // undefined
// never
function throwError() {
    throw new Error('error');
}
function keepProcessing() {
    while (true) {
        console.log('hi');
    }
}
const never = [];
// never.push(1)
