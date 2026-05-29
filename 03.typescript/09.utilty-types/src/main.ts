// Partial

interface Address {
    email: string;
    address: string;
}

const me: Partial<Address> = {};
const you: Partial<Address> = { email: 'john@abc.com' };
const all: Address = { email: 'john@abc.com', address: 'john' };

// Pick

interface Todo1 {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview1 = Pick<Todo1, "title" | "completed">;

const todo1: TodoPreview1 = {
    title: "Clean Room",
    completed: false
}

// Omit
interface Todo2 {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreview2 = Omit<Todo2, "description">;

const todo2: TodoPreview2 = {
    title: "clean room",
    completed: false,
    createdAt: 124324234,
}

// Exclude
type myUnion = "strawberry" | "apple" | "lemon" | "grape";
let lemon: myUnion = "lemon";

let nolemon: Exclude<myUnion, "lemon"> = "strawberry";
let noapple_lemon: Exclude<myUnion, "lemon" | "apple"> = "strawberry";
let onlygrape: Exclude<myUnion, "lemon" | "apple" | "strawberry"> = "grape";

// Required

type User = {
    firstName: string,
    lastName?: string //있어도 되고 없어도 되는 속성
}

let firstUser: User = {
    firstName: "john"
}

// let secondUser: Required<User> = {
//     firstName: "John"
// }


//  Record

interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: 'persian' },
    boris: { age: 5, breed: 'maine coon' },
    mordred: { age: 16, breed: "british shorthair" }
}


// ReturnType 

type T0 = ReturnType<() => string>
type T1 = ReturnType<(s: string) => void>

function fn(str: string) {
    return str;
}

const a: ReturnType<typeof fn> = 'Hello';
// const b: ReturnType<typeof fn> = true;