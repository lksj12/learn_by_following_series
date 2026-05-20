console.log(foo());
function foo() {return 5;}

// console.log(bar());
// var bar = function() {return 5};

//IIFE(Imediately Invoked Function Expression)
// (
//     function () {
//         //Do fun stuff
//     }
// )()

// (
//     function (){
//         var name1 = "Barry";
//         console.log(name1);
//     }
// )();

// console.log(name1);

var res = (
    function (){
        var name1 = "Barry";
        return name1;
    }
)();


console.log(res);

const minus = function (a,b) {
    return a - b;
}

console.log(minus(1,2));

(
    function (a,b) {
        console.log(a-b);
}) (1,2);


!function() {console.log("hi")}();
void function() {console.log("hi")}();
+function() {console.log("hi")}();
-function() {console.log("hi")}();
~function() {console.log("hi")}();
1*function() {console.log("hi")}();
2^function() {console.log("hi")}();
3&function() {console.log("hi")}();

// const score = () => {
//     let count = 0;
//     return {
//         current: () => {return count;},
//         increment: () => {return ++count},
//         reset: () => {return count = 0}
//     };
// };

// console.log(typeof score);
// console.log(score);

// console.log(score().increment());
// console.log(score().increment());
// console.log(score().reset());

const score = (() => {
    let count = 0;
    return {
        current: () => {return count;},
        increment: () => {return ++count},
        reset: () => {return count = 0}
    };
})();

console.log(typeof score);
console.log(score);
score.increment();
console.log(score.current());
score.increment();
console.log(score.current());
score.reset();
console.log(score.current());


// const increment = () => {
//     let counter = 0;
//     console.log(counter);
//     const number = (num) => console.log(`it is  ${num}`);
//     return () => {++counter; number(counter)};
// }

// increment()
// increment()

const increment = () => {
    let counter = 0;
    console.log(counter);
    const number = (num) => console.log(`it is  ${num}`);
    return () => {++counter; number(counter)};
}

increment()
increment()