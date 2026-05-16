const list = document.querySelector("ul.list-group");
const listItem = document.querySelector("li.list-group-item");
const listItem2 = document.querySelector("li.list-group-item").nextElementSibling;

console.log(list);
console.log(listItem);


console.log(list.childNodes); // Node List 반환, line break 포함
console.log(list.childNodes[0]);
console.log(list.childNodes[0].nodeName);
console.log(list.childNodes[3]);
console.log(list.childNodes[3].nodeName);
console.log(list.childNodes[3].nodeType);

// nodeType
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 4 - Cdata_selection node(xml)
// 5 - Entity reference node (deprecated)
// 6 - Enitity node (deprecated)
// 7 - Processing instruction node (deprecated)
// 8 - Comment node
// 9 - Document itself
// 10 - Doctype

console.log(list.children); // return HTML Collection, line break is not included.

list.children[1].textContent = "Hi";
console.log(list.firstChild);

console.log(list.firstElementChild);
console.log(list.lastChild);
console.log(list.lastElementChild);

console.log(list.childElementCount);
console.log(listItem.parentNode);
console.log(listItem.parentElement);
console.log(listItem.parentNode.parentElement);

console.log(listItem.nextSibling);
console.log(listItem.nextElementSibling);

console.log(listItem2.nextSibling);
console.log(listItem2.nextElementSibling);

console.log(listItem.previousSibling);
console.log(listItem.previousElementSibling);

console.log(listItem2.previousSibling);
console.log(listItem2.previousElementSibling);


console.log("Start for")
for (let node of list.childNodes) {
    console.log(node);
}