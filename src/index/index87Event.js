
import '../functions.js'

// **************** 87) Utilisation des propriétés du DOM on* **************************

import '../style/style2.css'
// import '../functions'

const square = document.querySelector("div")

console.log(square);
// console.log(window);

square.onmouseover = () => {
   square.classList.toggle('blue')
   // square.classList.add('blue') // Se réfère à la classe blue
   // square.style.backgroundColor = 'blue' // Valeur blue de la propriété style
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


// **************** 90) Le bouillonnement et la capture**************************

const square4 = document.querySelector(".container4")
const span = document.querySelector('span')

square4.addEventListener('click', () => {
   console.log('click on div');
}, {
   capture: true
})

span.addEventListener('click', () => {
   console.log('click on span');
}, {
   capture: true
})

// Par défaut, on sera en mode bubbling et pour passer en mode capturing, on rajouter en 3eme paramètre du event listener, la propriété, l’option capture.


// Le pattern de la délégation d'événement

const ancetre = document.querySelector("#container5");
ancetre.addEventListener("click", event => {
   if (event.target.className != "bouton-supprimer") {
      return null;
   }
   const panneau = event.target.closest(".panneau");
   return panneau ? panneau.remove() : null;
});


// **************** 91) Empêcher le comportement par défaut et l'objet event en détails **************************

const form3 = document.querySelector('#form3')
const input3 = document.querySelector('#input3')

const form4 = document.querySelector('#form4')
const input4 = document.querySelector('#input4')

form3.addEventListener('submit', (event) => {
   console.log(event);
   event.preventDefault()
})

form4.addEventListener('submit', (event) => {
   event.preventDefault()
})

input3.addEventListener('keydown', (e) => {
   console.log('keydown', e)
   if (e.key === 'r') {
      input3.style.backgroundColor = 'black'
      input3.style.borderColor = 'red'
      input3.style.color = 'white'
   }
})

// input3.addEventListener('keyup', (e)=>console.log('keyup',e))
// input3.addEventListener('keypress', (e)=>console.log('keypress', e))

form4.addEventListener('click', () => {
   console.log(('click form'));
})

input4.addEventListener('click', (event) => {
   event.stopPropagation()
   console.log(('click input'));
   // input4.classList.add('border-red')
   input4.style.borderColor = 'red'
})

document.addEventListener('click', (event) => {
   console.log(event);
   if (!input4.contains(event.target) && !form4.contains(event.target)) {
      console.log('click outside input4');
      // input4.classList.remove('border-red')
      input4.style.borderColor = 'black'
   }
})