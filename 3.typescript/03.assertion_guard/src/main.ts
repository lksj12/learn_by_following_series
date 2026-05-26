// let foo = {};
// foo.bar = 123;
// foo.bas = "hello";

interface Foo {
    bar: number,
    bas: string,
}

let foo = {} as Foo;
foo.bar = 123;
foo.bas = "hello";

//Error!!
// const bodyElement = document.querySelector('body');
// bodyElement.innerText = "Hello";

// Avoiding Error
const bodyElement1 = document.querySelector('body') as HTMLBodyElement;
bodyElement1.innerText = "Hello";

const bodyElement2 = document.querySelector('body');
bodyElement2!.innerText = "Hello";

const bodyElement3 = document.querySelector('body');
if (bodyElement3) {
    bodyElement3.innerText = "Hello";
}

// Wrong assertion case
// function func(arg: string | null) {
//         return (arg as string).toLowerCase();
//     }
// }

function func(arg: string | null) {
    if(arg) {
        return arg.toLowerCase();
    }
}

func('hello');
func(null);