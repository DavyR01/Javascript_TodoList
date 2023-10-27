
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

const displayTodos = (/* todosArray */) => {
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
   const buttonDelete = document.createElement("button")
   buttonDelete.innerHTML = `Supprimer`;
   buttonDelete.addEventListener('click', (event) => {
      console.log(event);
      console.log('index : ', index);
      deleteTodo(index) // closure avec index, La valeur de l'index passé est ainsi liée à l'environnement lexical et non au contexte d'exécution.
      console.log(todos);
   })
   li.innerHTML = `
      <span class="todo ${todo.done ? 'done' : ''}"></span>
      <p>${todo.text}</p>
      <button>Editer</button>
   `;
   li.appendChild(buttonDelete)
   return li;
}

displayTodos(todos)



// **************** 94) Ajouter une todo **************************

const form = document.querySelector('form');
const input = document.querySelector('form > input'); // Pour sélectionner uniquement le champ input contenu dans le form en lui indiquant que l'on veut récupérer l'enfant direct de form.

console.log(form, input);

form.addEventListener('submit', (e) => {
   e.preventDefault()
   // console.log(input);
   const value = input.value
   console.log(value);
   input.value = '' // Permet de vider le champ
   addTodo(value)
   console.log(todos);
   displayTodos(todos); // On réinvoque la méthode en rafraichissant la liste des todos.
})

const addTodo = (text) => {
   todos.push(
      {
         text, // text: text
         done: false
      }
   )
}

console.log('One time');

// displayTodos(todos);


// **************** 95) Supprimer une todo **************************

const deleteTodo = (index) => {
   todos.splice(index, 1)
   displayTodos(/* todosArray */)
}
