// const sym1 = Symbol();
// const sym2 = Symbol();

// const sym3 = Symbol("hi");

// console.log(sym1 === sym2);

// console.log(sym3)
// console.log(sym3.description)

// let carA = {
//     id: 1,
//     name: "morning",
//     brand: "KIA",
//     price: 1000
// }

// const idSym = Symbol("id");
// carA[idSym] = 300;

// // console.log(carA);

// console.log(Object.getOwnPropertyNames(carA));

// for (const key in carA) {
//     console.log(key);
// }

// console.log(Object.getOwnPropertySymbols(carA));


// const sym1 = Symbol("sym1");
// const sym2 = Symbol("sym1");

// console.log(sym1 === sym2)

// const sym3 = Symbol.for("sym1");
// const sym4 = Symbol.for("sym1");

// console.log(sym3 === sym4)

// console.log(Symbol.keyFor(sym3));
// console.log(Symbol.keyFor(sym4));


// const red = Symbol("red");
// const orange = Symbol("orange");
// const yellow = Symbol("yellow");
// const blue = Symbol("blue");
// const dog = "blue";

// function getImportantLevel(color) {
//     switch (color) {
//         case red:
//             return "very important";
//         case orange:
//             return "important";
//         case yellow:
//             return "little important";
//         case blue:
//             return "not important";
//         default:
//             console.log(`${color} is not included`);
//     }
// }
// // getImportantLevel(blue)
// // getImportantLevel(dog)

// console.log(getImportantLevel(blue));
// console.log(getImportantLevel(dog));

const length = Symbol("length");

class Car {
    constructor() {
        this[length] = 0;
    }

    add(brand, name) {
        this[brand] = name;
        ++this[length];
    }
}

let myCars = new Car();
myCars.add("KIA", "morning");
myCars.add("HYUNDAI", "tucson");
myCars.add("GENESIS", "gv80");

for (const car in myCars) {
    console.log(car, myCars[car])
}