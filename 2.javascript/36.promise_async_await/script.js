// function fetchData() {
//     return new Promise((resolve, reject) => {
//         const success = false;
//         if (success) {
//             resolve("성공");
//         } else {
//             reject("실패")
//         }
//     })
// }

// fetchData()
//     .then((response) => {
//         console.log(response);
//     })
//     .catch ((error) => {
//         console.log("error");
//     })


// fetch("http://jsonplaceholder.typicode.com/todos/1")
//     .then(response1 => response1.json())
//     .then(j => console.log(j))
//     .then(() => fetch("http://jsonplaceho.typicode.com/todos/2")
//                     .then(response2 => response2.json() )
//                     .then(j2 => console.log(j2))
//             )
//     .catch((error) => {
//         console.error("error");
//     })
//     .finally(() => {console.log("task end")})

async function makeRequests() {
    try {
        // const resp1 = await fetch("http://jsonplaceholder.typicode.com/todos/1");
        const resp1 = await fetch("http://jsonplacehol.typicode.com/todos/1");
        const jsresp1 = await resp1.json();
        console.log(jsresp1);

    } catch (error) {
        console.error("error")

    } finally {
        console.log("all tasks end")
    }
}
makeRequests();