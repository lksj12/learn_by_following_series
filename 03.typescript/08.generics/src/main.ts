function getArrayLength_union(arr: number[] | string[] | boolean[]): number {
    return arr.length;
}

function getArrayLength<T>(arr: T[]): number {
    return arr.length;
}

const array1: number[] = [1, 2, 3];
const array2: string[] = ["a", "b", "c"];
const array3: boolean[] = [true, false, true];

getArrayLength_union(array1);
getArrayLength_union(array2);
getArrayLength_union(array3);

getArrayLength<number>(array1);
getArrayLength<string>(array2);
getArrayLength<boolean>(array3);


// interface Vehicle_any {
//     name: string;
//     color: string;
//     option: any;
// }

interface Vehicle<T> {
    name: string;
    color: string;
    option: T;
}

const car: Vehicle<{ price: number }> = {
    name: 'Car',
    color: 'red',
    option: {
        price: 1000
    }
}

const bike: Vehicle<boolean> = {
    name: 'Bike',
    color: 'green',
    option: true
}

const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
    return [x, y];
}

const array4 = makeArr<number, number>(4, 5);
const array5 = makeArr<string, string>("a", "b");


const makeArr1 = <X, Y = string>(x: X, y: Y): [X, Y] => {
    return [x, y];
}

const array6 = makeArr1<string>("a", "b");


const makeFullName = <T extends { firstName: string, lastName: string }>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName
    }
}

makeFullName({ firstName: "John", lastName: "Doe", location: 'Seoul' })
makeFullName({ firstName: "John", lastName: "Doe", hello: 'Greeting' })
