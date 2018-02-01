function onReady() {
  let toDos = [];
  let id = 0;
   const addToDoForm = document.getElementById('addToDoForm');
   const newToDoText = document.getElementById('newToDoText');
   const toDoList = document.getElementById('toDoList');

    function createNewToDo() {
      if (!newToDoText.value) {return; }
      id++;
      toDos.push({
        title: newToDoText.value,
        complete: false,
        id: id.value
      });

      newToDoText.value = '';

      renderTheUI();
    }
    function deleteToDo(id) {
      toDos = toDo.filter(item => item.id !== id);
    }
    function renderTheUI() {
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      toDos.forEach(function(toDo)) {
        const newToDo = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        const title = document.createElement('span');
        title.textContent = toDo.title;

        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        deleteButton.appendChild(newLi);
      });
    }

    addToDoForm.addEventListener('submit', event =>{
      event.preventDefault();
      createNewToDo();
      newToDoText.value = '';

    });
    addToDoForm.addEventListener('delete', event =>{
      event.preventDefault();
      deleteToDo();
      renderTheUI();
      newToDoText.value = '';

    });
    renderTheUI();
}

window.onload = function() {
  onReady();
};
