let input = document.querySelector(".text-content");
let add = document.querySelector("#add");
let tasks = document.querySelector(".todo-text")



// if user clicked check button put text-decoration on to-do
add.addEventListener("click", ()=> {
    if(input.value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('items');
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="todo-btn">
        <button class="btn btn-default btn-1"><i class="fa-solid fa-check text-success"></i></button>
        <button class="btn btn-default btn-2"><i class="fa-solid fa-trash text-danger"></i></button>
        </div>`

        tasks.appendChild(newItem);
        input.value = '';
    } else {
        alert("Add your task")
    }
});

tasks.addEventListener("click", (e) => {
    if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.parentElement.parentElement.remove()
    }
});

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains("fa-check")) {
        e.target.parentElement.parentElement.parentElement.classList.add('completed')
    }
})