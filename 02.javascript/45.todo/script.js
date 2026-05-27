
const list = document.getElementById("list");
const createBtn = document.getElementById("create-btn");

let todos = [];
let cnt = 0;

createBtn.addEventListener("click", createNewTodo);
function createNewTodo() {
    cnt += 1;
    const item = {
        id: cnt,
        text: "",
        complete:false
    }

    todos.unshift(item);
    const {itemEl, inputEl, editBtnEl, removeBtnEl} = createTodoElement(item);

    list.prepend(itemEl);
    inputEl.removeAttribute("disabled");
    inputEl.focus();

    saveLocal();
}

function createTodoElement(item) {
    const itemEl = document.createElement("div");
    itemEl.classList.add("item");

    const checkboxEl = document.createElement("input")
    checkboxEl.type = "checkbox";
    checkboxEl.checked = item.complete;

    if (item.complete) {
        itemEl.classList.add("complete");
    }
    
    const inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.value = item.text;
    inputEl.setAttribute("disabled", "");

    const actionsEl = document.createElement("div");
    actionsEl.classList.add("actions");

    const editBtnEl = document.createElement("button");
    editBtnEl.classList.add("material-icons");
    editBtnEl.innerText = "edit";

    const removeBtnEl = document.createElement("button");
    removeBtnEl.classList.add("material-icons");
    removeBtnEl.innerText = "remove_circles";

    inputEl.addEventListener("input", () => {
        item.text = inputEl.value;
    })

    inputEl.addEventListener("blur", () => {
        inputEl.setAttribute("disabled", "");
        saveLocal();
    })

    editBtnEl.addEventListener("click", () => {
        inputEl.removeAttribute("disabled");
        inputEl.focus();
    })

    removeBtnEl.addEventListener("click", () => {
        todos = todos.filter(t => t.id !== item.id);
        itemEl.remove();
        if (!todos.length) {
            cnt = 0;
        }
        saveLocal();
    })

    checkboxEl.addEventListener("change", () => {
        item.complete = checkboxEl.checked;
        if (item.complete) {
            itemEl.classList.add("complete");
        } else {
            itemEl.classList.remove("complete");
        }
        saveLocal();
    })

    actionsEl.append(editBtnEl)
    actionsEl.append(removeBtnEl)

    itemEl.append(checkboxEl);
    itemEl.append(inputEl);
    itemEl.append(actionsEl);

    return {itemEl, inputEl, editBtnEl, removeBtnEl};
}

function saveLocal() {
    const data = JSON.stringify(todos);

    window.localStorage.setItem("todos", data);
}

function loadLocal() {
    const data = window.localStorage.getItem("todos");

    if (data) {
        todos = JSON.parse(data);
    }
}

function displayTodos() {
    loadLocal();
    for (let i = 0; i < todos.length; ++i) {
        const item = todos[i];
        const {itemEl} = createTodoElement(item);
        list.append(itemEl);
    }
    cnt = todos[0].id;
}

displayTodos()