
// **************** 87) Utilisation des propriétés du DOM on* **************************

import '../style/style2.css'

const square = document.querySelector("div")

console.log(square);
// console.log(window);

square.onmouseover = () => {
   square.classList.toggle('blue')
   // square.classList.add('blue')
   // square.style.backgroundColor = 'blue'
   console.log('over !');
}

// square.onmouseover = null; // Permet d'arrêter l'écouteur d'événement si plus besoin. Cela libère de la mémoire (garbage collector) et ne consomme plus de ressources inutilement.

square.onmouseleave = () => {
   square.classList.toggle('blue')
   // square.classList.remove('blue')
   // square.style.backgroundColor = '#eee'
   console.log('don\'t over !');
}

// Différence fonction fléchée et fonction standard
const input1 = document.querySelector("#fonction-flechee");
const input2 = document.querySelector("#fonction");
input1.onclick = () => console.log(this);
input2.onclick = function() {
  console.log(this);
};