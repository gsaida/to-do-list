let allItemsIncomplete = true;
const pageTitle = 'My To-Do List';
const toDos = [
  { id: 1, name: 'Get groceries', completed: false },
  { id: 2, name: 'Write a poem', completed: false },
  { id: 3, name: 'Go for a walk', completed: false },
  { id: 4, name: 'Eat strawberries', completed: false },
  { id: 5, name: 'Do some work', completed: false },
  { id: 6, name: 'Read', completed: false },
  { id: 7, name: 'Watch a nature documentary', completed: false },
  { id: 8, name: 'Pay bills', completed: false },
  { id: 9, name: 'Play with dog', completed: false },
  { id: 10, name: 'Sing', completed: false }
];

// Set page title

document.addEventListener('DOMContentLoaded', () => {
  setPageTitle();
  displayToDoList();

  const items = document.querySelectorAll('li');

  items.forEach((item) => {

    item.addEventListener('click', () => {
      if (!item.classList.contains('completed')) {
        item.classList.add('completed');
        item.querySelector('i').classList.add('completed');

      }
      else {
        item.classList.remove('completed');
        item.querySelector('i').classList.remove('completed');
      }
    });
  });


  const toggleAll = document.getElementById('toggleAll');

  toggleAll.addEventListener('click', (event) => {
    event.preventDefault();
    if (allItemsIncomplete) {
      items.forEach((item) => {
        item.classList.add('completed');
        item.querySelector('i').classList.add('completed');

      });
      allItemsIncomplete = false;
      console.log('Turning everything off')
      console.log(allItemsIncomplete);
      event.target.innerText = "Mark All Incomplete";

    } else {
      items.forEach((item) => {
        item.classList.remove('completed');
        item.querySelector('i').classList.remove('completed');
      });

      allItemsIncomplete = true;
      console.log('Turning everything on')
      console.log(allItemsIncomplete);

      event.target.innerText = "Mark All Complete";
    }
  });

});


function setPageTitle() {
  const title = document.getElementById('title');
  title.innerText = pageTitle;
}


 // Loop over the array of to-dos that was set above and add them to the DOM.

function displayToDoList() {
  const ul = document.querySelector('ul');
  toDos.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item.name;
    const checkCircle = document.createElement('i');
    checkCircle.setAttribute('class', 'far fa-check-circle');
    li.appendChild(checkCircle);
    ul.appendChild(li);
  });
}

