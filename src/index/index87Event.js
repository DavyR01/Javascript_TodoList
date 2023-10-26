
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
input2.onclick = function () {
   console.log(this);
};


// **************** 88) La méthode addEventListener() **************************

const square2 = document.querySelector(".container2")
const bouton = document.querySelector("#bouton1");

square2.addEventListener('mouseover', () => {
   square2.classList.add('red')
}, {
   once: true // permet d'exécuter l'event handler une seule fois
})

square2.addEventListener('mouseover', () => {
   square2.style.width = '250px'
   square2.style.height = '250px'
})

square2.addEventListener('mouseout', () => {
   square2.classList.remove('red')
})

square2.addEventListener('mouseout', () => {
   square2.style.width = '200px'
   square2.style.height = '200px'
})


const gestionnaireComplexe = {
   handleEvent(event) {
      switch (event.type) {
         case "mousedown":
            bouton.innerHTML = "Le bouton est pressé";
            break;
         case "mouseup":
            bouton.innerHTML += "...puis relâché.";
            break;
      }
   }
};

bouton.addEventListener("mousedown", gestionnaireComplexe);
bouton.addEventListener("mouseup", gestionnaireComplexe);

// **************** 89) Supprimer un gestionnaire d'événement et déclencher un événement **************************

const square3 = document.querySelector(".container3")
const bouton2 = document.querySelector("#bouton2")
const evenment = new MouseEvent("click", {
   bubbles: true,
   clientX: 550,
   clientY: 550
 });

function becomeGreen() {
   square3.style.backgroundColor = 'green'
}

square3.addEventListener('mouseover', becomeGreen)

square3.addEventListener('mouseout', () => {
   square3.style.backgroundColor = '#eee'
   square3.removeEventListener('mouseover', becomeGreen)
})

bouton2.addEventListener('click', () => {
   square3.dispatchEvent(new Event('mouseover')) // Permet de simuler un événement natif.
})
