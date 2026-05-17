function buildAnimal (animalData) {
    let {accesory, animal, color, hairType} = animalData;
    console.log(`${accesory}, ${animal}, ${color}, ${hairType}`);
}

let obj = {
    accesory: "horn",
    animal: "horse",
    color: "purple",
    hairType: "curly"
};

buildAnimal(obj);


let p = {
    name: "Maya",
    age: 30,
    phone: "123",
    address: {
        zipcode: 1234,
        street: "rainbow",
        number: 42
    }
};

let {address: {zipcode, street, number}, name, age, phone} = p;
console.log(zipcode, street, number, name, age, phone)

let a,b,rest;
[a,b] = [10, 20];
console.log(a,b);

[a,b,...rest] = [10,20,30,40,50];
console.log(a,b);
console.log(rest);

const week = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const [d1, d2, d3,d4,d5] = week;

console.log(d1,d2,d3,d4,d5);

const numbers = [1,2,3,4,5,6];
const [,,three,,five] = numbers;
console.log(three, five);

const studentDetail = {
    firstName: "John",
    lastName: "Marry"
};

const studentDetail2 = {
    // firstName: "John",
    lastName: "Marry"
};

let {firstName: fName = "not given", lastName} = studentDetail;
console.log(fName, lastName);

({firstName: fName = "not given", lastName} = studentDetail2);
console.log(fName, lastName);

var people = [
    {
        name: "Mike Smith",
        family: {
            mother: "Jane Smith",
            father: "Harry Smith",
            sister: "Smantha Smith"
        },
        age: 35,
    },
    {
        name: "Tom James",
        family: {
            mother: "Norah James",
            father: "Richard James",
            brother: "Howard James"
        },
        age: 25,
    }
];

for (var {name: n, family: {father: f}} of people) {
    console.log(`Name:${n}, Father: ${f}`);
}