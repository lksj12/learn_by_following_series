console.log(document);
console.log(document.baseURI);
console.log(document.head);
console.log(document.body);
console.log(document.forms);
console.log(document.forms[0].id);
console.log(document.forms[0].classList);
console.log(document.forms[0].className);

console.log(document.scripts);
console.log(document.scripts[0].getAttribute("src"));
console.log(document.scripts[1].getAttribute("src"));
console.log(document.scripts[2].getAttribute("src"));

// 단일 선택
// document.getElementBy(Id, Name, Class ...)()
// document.querySelector()

const headerContainer = document.getElementById("header-container")
console.log(headerContainer);
// headerContainer.style.display = "none";
headerContainer.textContent = "Text Content";
headerContainer.innerText = "Inner Text";
headerContainer.innerHTML = "<span>Inner HTML</span>";

console.log(document.querySelector("#form-first-div"));
console.log(document.querySelector(".form-container"));
console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "blue";
document.querySelector("ul li").style.color = "red";

document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "orange";
document.querySelector("li:nth-child(4)").textContent = "Hello World";
document.querySelector("li:nth-child(odd)").style.background = "gray";
document.querySelector("li:nth-child(even)").style.background = "lightgray";


// 여러요소 접근
// document.getElement"s"By[TagName, ClassName, ...]()
// document.querySelectorAll()

const items = document.getElementsByClassName("list-group-item");
console.log(items)

items[0].style.color = "blue";
items[3].textContent = "Hi";

const lists = document.getElementsByTagName("li");
lists_arr = Array.from(lists);

// lists.forEach()


console.log(lists);
console.log(lists_arr);

lists_arr.forEach((list, index) => {
    console.log(`${index}: ${list}`);
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");
console.log(liOdd);

liOdd.forEach(element => {
    element.style.background = "gray"
});

liEven.forEach(element => {
    element.style.background = "lightgray"
});