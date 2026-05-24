const tarefas = []


const buttonAdd = document.getElementById('add-button');
const textInput = document.getElementById('text-input');
const todoList = document.getElementById('todo-list');


buttonAdd.addEventListener('click', function () {
    const text = textInput.value.trim();
    if (!text) return;

    const item = document.createElement('label');
    item.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = text;

    const button = document.createElement('button');
    button.classList.add('delete-button');
    button.innerHTML = '🗑 &nbsp; Excluir';

    item.appendChild(checkbox);
    item.appendChild(taskText);
    item.appendChild(button);

    button.addEventListener('click', function () {
        todoList.removeChild(item);
    });


    todoList.appendChild(item);
    textInput.value = '';
    textInput.focus();
});

textInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        buttonAdd.click();
    }
});

