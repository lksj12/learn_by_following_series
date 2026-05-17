const arr1 = [1,2,3];

const arr2 = [...arr1, 4];

console.log(arr1, arr2);
console.log(arr1 === arr2);

const arr3 = Object.assign([], arr2);
console.log(arr2, arr3);
console.log(arr2 === arr3);

arr3.push([5,6,7]);
console.log(arr3);

const arr4 = [...arr3, 10];
console.log(arr4);

arr4[4].push(8);
console.log(arr3, arr4);


const obj1 = {
    a: "a",
    b: "b",
    objin: {
        a: "A",
        b: "B"
    }
};

Object.freeze(obj1);
obj1.a = "c";
console.log(obj1);

obj1.objin.a = "C";
console.log(obj1);



const newobj1 = JSON.parse(JSON.stringify(obj1));
newobj1.objin.a = 3;

console.log(obj1);
console.log(newobj1)

const newobj2 = {...obj1,objin: {...obj1.objin}}

newobj2.objin.a = 4;

console.log(obj1);
console.log(newobj2)

const newobj3 = _.cloneDeep(obj1);
newobj3.objin.a = 10;

console.log(obj1);
console.log(newobj3)

const mushroom1 = {
    amanita: ["muscaria", "virosa"],
};

const mushroom2 = structuredClone(mushroom1);

mushroom2.amanita.push("pantherina");
mushroom1.amanita.pop();

console.log(mushroom1);
console.log(mushroom2);