const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];

const arrWrap1 = arr1.concat(arr2, arr3);
const arrWrap2 = [...arr1, ...arr2, ...arr3];

console.log(arrWrap1, arrWrap2);

let arr4 = [1,2,3];
const arr5 = [4,5];

Array.prototype.push.apply(arr4,arr5);
console.log(arr4);

arr4 = [1,2,3];
arr4.push(...arr5);
console.log(arr4);


const obj1 = {
    a: "A",
    b: "B"
};

const obj2 = {
    c: "C",
    d: "D"
};

const objWrap1 = {obj1, obj2};
console.log(objWrap1);

const objWrap2 = {...obj1, ...obj2};
console.log(objWrap2);


let arr6 = [1,2,3];
let arr7 = arr6.reverse();
console.log(arr6);
console.log(arr7);

arr6 = [1,2,3];
arr7 = [...arr6].reverse();
console.log(arr6);
console.log(arr7);