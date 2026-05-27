"use strict";
function add(a, b) {
    return a + b;
}
add("hello", "world");
add(1, 1);
function saySomething(word) {
    if (typeof word === "string") {
        return word;
    }
    else if (Array.isArray(word)) {
        return word.join(" ");
    }
    throw new Error("unable to say something");
}
saySomething(['hello', 'world']); //'hello world';
