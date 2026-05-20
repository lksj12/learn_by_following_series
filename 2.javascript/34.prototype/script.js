"usestrict"

let user = {
    name: "John",
    age: 45,
};

console.log(user.name);
console.log(user.hasOwnProperty("email"));

// function Person (name, email, birthday) {
//     this.name = name;
//     this.email = email;
//     this.birthday = new Date(birthday);
// }

// Person.prototype.calculateAge = function () {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear()-1970);
//     }

// const john = new Person("john", "john@abc.com", "7-19-91");
// const han = new Person("han", "han@abc.com", "2-8-91");

// console.log(john);
// console.log(han);

// console.log(john.calculateAge());
// console.log(han.calculateAge());



function Person (name, email, birthday) {
    const person = Object.create(personPrototype);
    person.name = name;
    person.email = email;
    person.birthday = new Date(birthday);
    return person;
}

const personPrototype = {
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);
    }
}


const john2 = new Person("john", "john@abc.com", "7-19-91");
const han2 = new Person("han", "han@abc.com", "2-8-91");

console.log(john2);
console.log(han2);

console.log(john2.calculateAge());
console.log(han2.calculateAge());