// variables
let bool: boolean;
// bool = "string";
bool = false;

let number: number = 6;
number = 1.12345;

let string: string = "Doe";

//Array
let names1: string[] = ["John", "Kim"];
let names2: Array<string> = ["John", "Kim"];

let array1: (string | number)[] = ["John", 1, 2];
let array2: Array<string | number> = ["John", 1, 2];

let somearr: any[] = ["John", 1, 2, true, [], {}]

//Read onlhy
let strarr: readonly string[] = ["A", "B"];
let numarr: ReadonlyArray<number> = [1,2,3];
// strarr.push("X");
// numarr[0] = 2;


//Tuple
let tuple1: [string, number] = ["A", 1];
// tuple1 = ["A", 1, "B", 2];
// tuple1 = [1, "A"];

let tuple2: [string, number][] = [["A", 1], ["B",2]];
// tuple2 = ["B",2];

let tuple3: [string, number] = [...tuple1]
tuple3.push(3);
// tuple3.push(false);
console.log(tuple1);
console.log(tuple3);


//Any
let any1: any = "ab";
any1 = 1;


//Unknown
let unk: unknown = 1;
// let num: number = unk;
let num: number = unk as number;


//Object
let obj: object = {};
let arr: object = [];
// let nul: object = null; //strict true 모드 사용시 에러
let nul: null = null;
let date: object = new Date();

const obj1: {id: number, title:string} = {
    id: 1,
    title: "title1"
}

//Union
let union: (string | number);
union = 1;
union = "2";
// union = [];


//Function
let func1: (arg1: number, arg2: number) => number;
func1 = function (x,y) {
    return x*y;
}

let func2: ()=>void;
func2 = function() {
    const x = "hi";
//     return x; // 에러 안남
}

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

let void2: void = undefined;

// void
function greeting(): void {
    console.log('hi')
}

const hi: void = greeting()
console.log(hi)  // undefined


// never
function throwError(): never {
    throw new Error('error');
}

function keepProcessing(): never {
    while (true) {
        console.log('hi');
    }
}

const never: [] = []
// never.push(1)