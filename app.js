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
        id: id
      });

      newToDoText.value = '';

      renderTheUI();
    }

    function deleteToDo(id) {
      toDos = toDos.filter(item => item.id !== id);
      return toDos;
    }

    function renderTheUI() {
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      toDos.forEach(function(toDo) {
        const newToDo = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        //const title = document.createElement('span');
        newToDo.textContent = toDo.title;

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = `<span>Delete To Do </span>`

        toDoList.appendChild(newToDo);
        newToDo.appendChild(checkbox);
        newToDo.appendChild(deleteButton);

        deleteButton.addEventListener('click', () =>{
          //event.preventDefault();
          toDos = deleteToDo(toDo.id);
          renderTheUI();
          //newToDoText.value = '';

        });
      });
    }

    addToDoForm.addEventListener('submit', event =>{
      event.preventDefault();
      createNewToDo();
      newToDoText.value = '';

    });

    renderTheUI();
}

window.onload = function() {
  onReady();
};
