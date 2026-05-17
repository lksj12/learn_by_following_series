const arr1 = [1,4, 9, 16];
let map1 = arr1.map(x => x*2);

console.log(map1);

map1 = arr1.map(function (item, index, array) {
    console.log(item, index, array, this);
    return (item*2);
}, {a:"a"});

console.log(map1);



const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

let res = words.filter(word => word.length > 6);
console.log(res);

res = words.filter( function (word, index, array) {
    console.log(word, index, array, this);
    return word.length > 6;
}, {a:"a"});

console.log(res);



let x = [0,1,2,3,4].reduce(function (accumulator, currentValue, currentIndex, array) {
    console.log(accumulator, currentValue, currentIndex, array);
    return accumulator + currentValue;
});

console.log(x);

x = [0,1,2,3,4].reduce(function (accumulator, currentValue, currentIndex, array) {
    console.log(accumulator, currentValue, currentIndex, array);
    return accumulator + currentValue;
}, 10);

console.log(x);