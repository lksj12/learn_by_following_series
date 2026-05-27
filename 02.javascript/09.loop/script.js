// for
for (let i = 0; i < 10; ++i) {
    if(i === 3) {
        console.log("It is 3");
        continue;
    }

    if(i === 5) {
        console.log("5 Stop the loop");
        break;
    }
    console.log(`Number ${i}`);
}

// for in
const user = {
    name: "미수",
    province: "경기",
    city: "광주"
}

for (let x in user) {
    console.log(`${x}: ${user[x]}`);
}

// while
let i = 0;

while (i < 10) {
    console.log(`Number ${i}`);
    ++i;
}

// do while
i = 100;

do {
    console.log(`Number: ${i}`);
    ++i;
}

while (i < 10);

const locations = ["A", "B", "C", "D", 'E'];

for (let i = 0; i < locations.length; ++i) {
    console.log(locations[i]);
}

locations.forEach(function(value, index, array) {
    console.log(`${index} : ${value}`);
    console.log(array);
});

locations.map(function(value) {
    console.log(value);
})