"use strict"
// class Person {
//     constructor(name, email, birthday) {
//         this.name = name;
//         this.email = email;
//         this.birthday = new Date(birthday);
//     }

//     introduce() {
//         return `Helo my name is ${this.name} and my birthday is ${this.birthday}`;
//     }

//     static multipleNumbers(x,y) {
//         return x*y;
//     }
// }

// const john = new Person("John", "john@abc.com", "10-3-98");
// let greet = john.introduce();
// console.log(greet);
// console.log(john);

// console.log(Person.multipleNumbers(10,20));
// // console.log(john.multipleNumbers(10,20));

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    introduce () {
        return `Helo my name is ${this.name}`
    }
}

class Client extends Person {
    constructor(name, email, phone, address) {
        super(name, email);
        this.phone = phone;
        this.address = address;
    }
}

const john = new Client("John", "john@abc.com", "010-0000-0000", "Seoul");
console.log(john.introduce());
console.log(john);