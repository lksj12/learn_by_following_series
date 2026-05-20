//Impure
// let x = 0;
// const numberUp = () => x+=1;

// console.log(numberUp());
// console.log(x);

//Pure
// let x = 0;
// const pureNumberUp = (num) => num+=1;

// console.log(pureNumberUp(x));
// console.log(x);

//Impure
// const alphArray = ["A", "B"];

// const addItemArray = (originalArray, newItem) => {
//     originalArray.push(newItem);
//     return originalArray;
// }

// console.log(addItemArray(alphArray, "C"));
// console.log(alphArray);

//Pure
const alphArray = ["A", "B"];

const pureAddItemArray = (originalArray, newItem) => {
    return [...originalArray, "C"];
}

console.log(pureAddItemArray(alphArray, "C"))
console.log(alphArray);
