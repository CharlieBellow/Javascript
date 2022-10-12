/*
  Crie um campo de input de texto e um botão para adicionar a tarefa à lista;
Quando o botão for pressionado, o texto deve aparecer na lista com um checkbox ao lado;
Quando o usuário selecionar o checkbox, o item correspondente deve ficar com o texto riscado. (ex.: tarefa completa. dica: você pode resolver isso facilmente com CSS)
*/

//como a Stephany fez:

const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

//const Tasks = {
const taskContainer = document.createElement('div');
const newTask = document.createElement('input');
const taskLabel = document.createElement('label');
const taskDescriptionNode = document.createTextNode(description);

function addTask(description) {
	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);
	
	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}

/*}

}*/
/*button = document.createElement('button.remove'),
  buttonRemove = document.removeElement('.remove'),
  //removeTask = document.removeElement('button')
  removeTask() {
    taskLabel.removeChild(taskDescriptionNode);
    taskContainer.classList.remove('task-item');
    taskContainer.removeChild(newTask);
    taskConstainer.removeChild(taskLabel);
    task.list.removeChild(taskContainer);*/
// fazer a opção de excluir a tarefa
//addTask(task);

// Minha tentativa de fazer:
/*<div class="checkbox active">
       <input type="checkbox" name="tarefa()" id="checkbox" onclick="check()"> ${tarefa}
      </div> 
     </div>*/

/*const CheckTask = {
  checkTask() {
    // vai adicionar a classe active no 
    {/*<tbody>
          <tr> <!-- linha -->
            <td class="checkbox active">
              <input type="checkbox" name="" id="checkbox" onclick="check()">
            </td>}
    document.querySelector('.checkbox').classList.add('active')
  },
}*/

/*const Storage = {
  get() {
    return JSON.parse(localStorage.getItem("minhas.tarefas:tarefa")) || []
  },

  set(tasks) {
    localStorage.setItem("minhas.tarefas:tarefa", JSON.stringify(tasks));
  }
}



const Task = {
  all: Storage.get(),

  add(task) {
    Task.all.push(task)
  },

}

const DOM = {
  tanksContainer: document.querySelector('#data-table tbody'),

  addTask(task, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTask(task, index)
    tr.dataset.index = index

    DOM.tasksContainer.appendChild(tr)
  },

  innerHTMLTask(task, index) {
    const addTr = `
    <td class="checkbox">
      <input type="checkbox" name="" id="checkbox" onclick="check()">
    </td>
    <td id="nomeDaTafera">
    ${task.taskname}
    </td>
    `
    return addTr
  }
} 

const Table = {
  taskname: document.querySelector('input#checkbox'),

  getValues() {
    return {
      taskname: Table.taskname.value
    }
  },
  
  formatValues() {
    let taskname = Table.getValues()
    
    return taskname
  },
  
  submit(event) {
    try {
      Task.add(task)
    } catch (error) {
      alert(error.message)
    }
  }
  
}


const InitTask = {
  init() {
    Task.all.forEach(DOM.addTask)
  },

}

InitTask.init()*/
