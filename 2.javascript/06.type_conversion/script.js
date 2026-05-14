let val;

val = 111;
console.log(val);
console.log(typeof val);

val = String(111);

console.log(val);
console.log(typeof val);

val = String(8+4);
console.log(val);
console.log(typeof val);

console.log(val.length);

val = false;
console.log(val);
console.log(typeof val);

console.log(val.length);

val = String(false);
console.log(val);
console.log(typeof val)

console.log(val.length);

val = new Date();
console.log(val);
console.log(typeof val)

console.log(val.length);

val = String(new Date());
console.log(val);
console.log(typeof val);

console.log(val.length);

val = [1,2,3,4,5];
console.log(val);
console.log(typeof val);

val = String([1,2,3,4,5]);
console.log(val);
console.log(typeof val);

console.log(val.length)

val = (5).toString();
console.log(val);
console.log(typeof val);

console.log(val.length);

val = Number("1");
console.log(val);
console.log(typeof val);

console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number([1,2,3,4,5]));

console.log(parseInt("111.40"))
console.log(Number("111.40"))
console.log(parseFloat("111.40"))

console.log("1" + 1)
console.log(1 + Number("1"))