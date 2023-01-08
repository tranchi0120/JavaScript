// localStorage

// 1. localStorage.setItem("key", "value")
// localStorage.setItem('name', 'tran chi');

// 2. localStorage.getItem("key")
// console.log(localStorage.getItem('name', "tran chi"));

// 3. localStorage.removeItem("key");
// localStorage.removeItem('name', 'tran chi');

// 4. localStorage.clear();
// localStorage.clear();

// ---- ex localStorage -----------
// let arr = [1,2,3,4,5, {
//     name: 'tran chi',
//     age: 36
// }];
// localStorage.setItem('list', JSON.stringify(arr));

// const newArr = JSON.parse(localStorage.getItem('list'))
// console.log(newArr);

// --------------------- TODOLIST -------------------------------

window.addEventListener("load", function () {
    const form = document.querySelector(".container");
    const group = document.querySelector(".group");
    let todos = JSON.parse(localStorage.getItem("todoList")) || [];
    // console.log("todos: ", todos);
    // console.log("localStorage: ", localStorage);

    if (Array.isArray(todos) && todos.length > 0) {
        [...todos].forEach((item) => createItem(item));
    }

    function createItem(title) {
        const template = `
        <div class="box">
        <p>${title}</p>
        <span class="delete"> &times;</span>
      </div>`;
        group.insertAdjacentHTML("beforeend", template);
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const total = this.elements["todo"].value;
        console.log(total);
        // main code
        createItem(total);
        todos.push(total);

        localStorage && localStorage.setItem("todoList", JSON.stringify(todos));
        this.elements["todo"].value = "";
    });

    // handleRemoveItem
    group.addEventListener("click", function (e) {

        if (e.target.matches(".delete")) {
            // console.log("delete")
            // remove todo in DOM
            const todo = e.target.parentNode;
            todo.parentNode.removeChild(todo);
            // remove todo in localStorage
            const todoText = e.target.previousElementSibling.textContent;
            // console.log(todoText);
            const index = todos.findIndex((item) => item === todoText);
            todos.splice(index, 1);
            localStorage.setItem("todoList", JSON.stringify(todos));
            localStorage.setItem("todoList", JSON.stringify(newTodos));
        }
    });
});
