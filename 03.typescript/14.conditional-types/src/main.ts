// type SomeType = T extends U ? X : Y;

type SomeType = string;
type SomeType2 = number;

type ConditionalType = SomeType extends string ? string : null;
type ConditionalType2 = SomeType2 extends string ? string : null;

function fn1<T>(value: T) {
    const fn2 = (
        arg: T extends boolean ? 'A' : 'B'
    ) => {};
    return fn2;
}

const result = fn1("foo");
const result2 = fn1(true);

type StringOrNot<T> = T extends string ? string : never;

type AUnion = string | boolean | never;

// const A: StringOrNot<number> = 'string';
const A: StringOrNot<string> = 'string';

// type Exclude<T, U> = T extends U ? never : T;
type ResultType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;

// 'a' extends 'a' | 'b'  ? never : 'a'  ==> never
// 'b' extends 'a' | 'b'  ? never : 'b'  ==> never
// 'c' extends 'a' | 'b'  ? never : 'c'  ==> c


type AType1<T> = T extends string | number ? T : never;
type AType2<T> = (() => T) extends (() => string | number) ? T : never;
type AType3<T> = [T] extends [string | number] ? T : never;

type MyResult = AType1<string | number | boolean>;
type MyResult2 = AType1<string | number>;

type MyResult3 = AType2<string | number | boolean>;
type MyResult4 = AType2<string | number>;

type MyResult5 = AType3<string | number | boolean>;
type MyResult6 = AType3<string | number>;