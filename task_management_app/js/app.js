document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form')
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
  })

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
  
    const taskListItem = createTaskListItem(event.target);
    const taskList = document.querySelector('#task-list');
    taskList.appendChild(taskListItem);
  
    event.target.reset();
  }

const createTaskListItem = function (form) {
    const taskListItem = document.createElement('li');
    taskListItem.classList.add('task-list-item');

    const description = document.createElement('h2');
    description.textContent = form.description.value;
    taskListItem.appendChild(description);


    if (form.time_15.checked) {
        const time = document.createElement('p');
        time.textContent = form.time_15.value;
        taskListItem.appendChild(time);
    }
    if (form.time_30.checked) {
        const time = document.createElement('p');
        time.textContent = form.time_30.value;
        taskListItem.appendChild(time);
    }
    if (form.time_60.checked) {
        const time = document.createElement('p');
        time.textContent = form.time_60.value;
        taskListItem.appendChild(time);
    }
    else {
        const other = document.createElement('p')
        other.textContent = form.other.value;
        taskListItem.appendChild(other)
    }

    const completed = document.createElement('span');
    completed.textContent = checkBox()
    taskListItem.appendChild(completed);

    return taskListItem;
}

const handleDeleteAllClick = function (event) {
    const taskList = document.querySelector('#task-list');
    taskList.innerHTML = '';
}

const checkBox = function () {
    const checkBox = document.querySelector("#completed");
    if (checkBox.checked == true){
        return 'Completed'
    }
    else{
        return 'Incomplete'
    };
}