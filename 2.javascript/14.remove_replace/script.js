const parent = document.querySelector("ul");
const list = document.querySelectorAll("li");

// parent.removeChild(list[0]);
// parent.removeChild(list[1]);

const oldElement = document.getElementById("A");
const newElement = document.createElement("span");

newElement.textContent = "Hi";
oldElement.parentNode.replaceChild(newElement, oldElement);