// function makeIterator (numbers) {
//     let nextIndex = 0;

//     return {
//         next: function() {
//             return nextIndex < numbers.length ?
//                 {value: numbers[nextIndex++], done: false}:
//                 {value: undefined, done: true}
//         }
//     }
// }

// const numbersArray = [1,2,3];
// const numiter = makeIterator(numbersArray);

// console.log(numiter.next())
// console.log(numiter.next())
// console.log(numiter.next())
// console.log(numiter.next())

// const numiter2 = numbersArray[Symbol.iterator]();

// console.log(numiter2.next())
// console.log(numiter2.next())
// console.log(numiter2.next())
// console.log(numiter2.next())

// // const numbernotiter = {a: 1, b: 2};
// // for (const n of numbernotiter) {
// //     console.log(numbernotiter);
// // }

// const set = new Set([1,2,3,4]);
// for (const s of set) {
//     console.log(s);
// }

// const map = new Map([["a",1], ["b",1]])
// console.log(map[Symbol.iterator]());

// function* sayNumbers() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const number = sayNumbers();

// console.log(number.next());
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());

// function* generatorFunction() {
//     yield 1;
// }

// const generator = generatorFunction();
// console.log(generator === generator[Symbol.iterator]())

// function* createIDs() {
    // let index = 0;
    // while(true) {
        // yield ++index;
    // }
// }

// const gen = createIDs();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.return(10).value);
// console.log(gen.next().value);

function* generatorFunction () {
    yield* [1,2,3];
}

const generator = generatorFunction();
// for (const number of generator) {
//     console.log(number);
// }

console.log(generator.next());