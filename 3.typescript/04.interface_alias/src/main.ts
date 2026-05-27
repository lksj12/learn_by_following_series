interface Animal_int {
    name: string;
}

interface Bear_int extends Animal_int {
    honey: boolean;
}

const bear1: Bear_int = {
    name: 'honey bear',
    honey: true
}

type Animal_type = {
    name: string;
}

type Bear_type = Animal_type & {
    honey: boolean;
}

const bear2: Bear_type = {
    name: 'honey bear',
    honey: true
}


interface Animal_int2 {
    name: string;
}

interface Animal_int2 {
    honey: boolean;
}

const bear3: Animal_int2 = {
    name: 'honey bear',
    honey: true
}

// type Animal_type2 = {
//     name: string;
// }

// type Animal_type2 = {
//     honey: boolean;
// }