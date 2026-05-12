// var: funcion level scope
function func() {
    if (true) {
        var a = "a"
        console.log(a);
    }
    console.log(a);
}

func();
// console.log(a);

// let, const: block level scope
function func1() {
    if(true) {
        let a1 = "a1";
        console.log(a1);
    }
    console.log(a1);
}
func1();
console.log(a1);