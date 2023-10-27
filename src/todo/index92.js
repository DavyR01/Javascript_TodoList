
// **************** 92) Présentation du projet Todo **************************

import './style92.css'

// **************** 93) Affichage des todos **************************

const ul = document.querySelector('ul')

const todos = [
   {
      text: 'Première todo',
      done: false
   },
   {
      text: 'Faire du javascript',
      done: true
   }
]

const displayTodos = (todos) => {
   const todosNode = todos.map((todo, index) => {
      return createTodoElement(todo, index)
   })
   console.log(todosNode);
   ul.innerHTML = ''; // on vide le HTML éventellement contenu dans ul.
   ul.append(...todosNode) // On chercher à avoir une liste de node. Actuellement, on a un tableau d'éléments HTML. L'opérateur spread va permettre de convertir le tableau de nodes en une liste de nodes HTML séparés par des virgules. Cette conversion est nécessaire, en effet, append() prend une liste de noeuds séparés par des virgules et non un tableau.
   console.log(...todosNode);
}

const createTodoElement = (todo, index) => {
   const li = document.createElement("li");
   li.innerHTML = `
      <span class="todo ${todo.done ? 'done' : ''}"></span>
      <p>${todo.text}</p>
      <button>Editer</button>
      <button>Supprimer</button>
   `;
   return li;
}

displayTodos(todos)