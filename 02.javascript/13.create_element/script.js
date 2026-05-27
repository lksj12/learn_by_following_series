const li = document.createElement("li");
li.className = "list-group-item";
li.id = "new-item";
li.innerText = "New Item";
li.setAttribute("name", "new list item");

const link = document.createElement("a");
link.className = "alarm-item";
link.innerHTML = "<i class=bi-alarm></a>"

li.appendChild(link);

document.querySelector("ul.list-group").appendChild(li);

