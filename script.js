// array para armazenar as tarefas

const tarefas = [];

// variáveis para acessar os elementos do DOM

const buttonAdd = document.getElementById('add-button');
const textInput = document.getElementById('text-input');
const todoList = document.getElementById('todo-list');

// função para criar um item da lista de tarefas

function criarItem(text) {

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

    // Adiciona os elementos ao item da lista

    item.appendChild(checkbox);
    item.appendChild(taskText);
    item.appendChild(button);

    // Adiciona o evento de clique ao botão de excluir

    button.addEventListener('click', function () {
        todoList.removeChild(item);
        tarefas.splice(tarefas.indexOf(text), 1);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    });

    // Adiciona o item à lista de tarefas

    todoList.appendChild(item);

}

// Evento de clique para o botão de adicionar tarefa

buttonAdd.addEventListener('click', function () {
    const text = textInput.value.trim();
    if (!text) return;

    criarItem(text);

    tarefas.push(text);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    textInput.value = '';
    textInput.focus();

});

// Carrega as tarefas salvas no localStorage ao carregar a página

localStorage.getItem('tarefas') && JSON.parse(localStorage.getItem('tarefas')).forEach(function (text) {
    criarItem(text);
    tarefas.push(text);
});


// Permite adicionar a tarefa pressionando a tecla Enter

textInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        buttonAdd.click();
    }
});

