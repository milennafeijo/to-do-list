const buttonAdd = document.getElementById('add-button');
const textInput = document.getElementById('text-input');
const todoList = document.getElementById('todo-list');


buttonAdd.addEventListener('click', function() {
    const text = textInput.value.trim();
    if (!text) return;

    const item = document.createElement('label');
    item.classList.add('todo-item');
    item.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span class="task-text">${text}</span>
        <button class="delete-button">Excluir</button>
    `;

    const deleteButton = item.querySelector('.delete-button');

    deleteButton.addEventListener ('click', function () {
        todoList.removeChild(item);
    });

    todoList.appendChild(item);
    textInput.value = '';
    textInput.focus();
});

textInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        buttonAdd.click();
    }
});

