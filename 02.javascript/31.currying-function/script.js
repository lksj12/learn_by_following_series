const sum = (x,y) => x+y;

const curriedSum = x => y => x+y;

console.log(sum(10,20));
console.log(curriedSum(10)(20));


const makeFood = (ingredient) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient} ${ingredient2} ${ingredient3}`
        }
    }
}

const hamburger = makeFood("Bread")("Ham")("Tomato");
console.log(hamburger);

const hambur = makeFood("Bread")("Ham");
console.log(hambur);

const cleanMakeFood = ingredient => ingredient2 => ingredient3 =>
    `${ingredient} ${ingredient2} ${ingredient3}`;

const newhamburger = cleanMakeFood("Bread")("Ham")("Tomato");
console.log(newhamburger);


function log(date, importance, message) {
    alert(`[${date.getHours()} : ${date.getMinutes()}] : [${importance}] ${message}`);
}

// log(new Date(), "DEBUG", "some bugs");

function curry(f) {
    return function (a) {
        return function (b) {
            return function (c) {
                return f(a,b,c);
            }
        }
    }
}

// const curriedLog = curry(log);
// curriedLog(new Date())("DEBUG")("some bugs");

function curry(f) {
    return function curried(...args) {
        if (args.length >= f.length) {
            return f.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

const sum2 = (w,x,y,z,a) => w+x+y+z+a;
const curriedSum2 = curry(sum2);
console.log(curriedSum2(1)(2)(3)(4))