//Call()
// const fullName = function (city, country) {
//     console.log(`${this.firstName} ${this.lastName} ${city} ${country}`)
// }

// const p1 = {
//     firstName: "John",
//     lastName: "Smith"
// };

// const p2 = {
//     firstName: "Paul",
//     lastName: "Berry"
// };

// fullName.call(p1, "Oslo", "Norway");

//bind
function func(lang) {
    if (lang === "kor") {
        console.log(`lang: ${this.korGreeting}`);
    } else {
        console.log(`lang: ${this.engGreeting}`);
    }
}

const greeting = {
    korGreeting: "안녕",
    engGreeting: "Hello"
};

// const boundFunc = func.bind(greeting);
// boundFunc("eng");

let boundFunc = func.bind(greeting)("kor");
boundFunc = func.bind(greeting)("eng");


// //apply
// const fullName = function (city, country) {
//     console.log(`${this.firstName} ${this.lastName} ${city} ${country}`)
// }

// const p1 = {
//     firstName: "John",
//     lastName: "Smith"
// };

// const p2 = {
//     firstName: "Paul",
//     lastName: "Berry"
// };

// fullName.apply(p1, ["Oslo", "Norway"]);