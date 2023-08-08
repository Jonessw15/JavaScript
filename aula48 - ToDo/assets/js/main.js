const textInput = document.querySelector('.input-new-task')
const btn = document.querySelector('.btn-add-task')
const tasks = document.querySelector('.tasks')

function criaLi() {
    const li = document.createElement('li')
    return li
}

textInput.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!textInput.value) return
        criaTarefa(textInput.value)    
    }
})

function clearInput() {
    textInput.value = ''
    textInput.focus()
}

function clearButton(li) {
    li.innerText += ' '
    const btnClear = document.createElement('button')
    btnClear.innerText = '✔'
    btnClear.setAttribute('class', 'apagar')
    btnClear.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(btnClear)
}

function criaTarefa(inputText) {
    const li = criaLi()
    li.innerText = inputText
    tasks.appendChild(li)
    clearInput()  
    clearButton(li)  
    saveTasks()
}

btn.addEventListener('click', function(e) {
    if (!textInput.value) return
    criaTarefa(textInput.value)
})

document.addEventListener('click', function(e) {
    const el = e.target

    if (el.classList.contains('apagar')) {
/*      console.log("Apagar clicado")
        console.log(el.parentElement) */
        el.parentElement.remove()
        saveTasks()
  }
})

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li')
    const tasksList = []

    for (let task of liTasks) {
        let textTask = task.innerText
        textTask = textTask.replace('✔', '').trim()
        tasksList.push(textTask)
    }

    const tasksJSON = JSON.stringify(tasksList)
    localStorage.setItem('tarefas', tasksJSON) // LOCALSTORAGE: é global do navegador, posso usar em qualquer lugar da aplicação
}

function addSaveTasks() {
    const tarefas = localStorage.getItem('tarefas')
    const tasksList = JSON.parse(tarefas)
    for (let tarefa of tasksList) {
        criaTarefa(tarefa)
    }
}
addSaveTasks()