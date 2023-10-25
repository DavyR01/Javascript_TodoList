
// **************** 76) Le DOM: Le DOM HTML **************************


// console.log("Noeuds enfants :");
// console.log(document.body.childNodes);

// console.log("Eléments enfants :");
// console.log(document.body.children);

// console.log("Premier noeud enfant :");
// console.log(document.body.firstChild);

// console.log("Premier élément enfant :");
// console.log(document.body.firstElementChild);

// console.log("Dernier noeud enfant :");
// console.log(document.body.lastChild);

// // Le noeud parent est le document
// console.log("Node parente :");
// console.log(document.body.parentNode);

// console.log("Noeud frère antérieur :");
// console.log(document.body.previousSibling);

// console.log("Noeud frère postérieur :");
// console.log(document.head.nextSibling);

// console.log("Elément frère postérieur :");
// console.log(document.head.nextElementSibling);


// **************** 77) Sélectionner des éléments du DOM **************************

console.log(document);
console.log(window.document === document); // true
console.log(window);

const elem = document.getElementById('title')
console.log(elem);

const elem2 = document.getElementsByClassName('class-test')
console.log(elem2);

const elem3 = document.getElementsByTagName('img')
console.log(elem3);


// -----------------------------------------------
const elem4 = document.querySelector('#id-2')
console.log(elem4);

const elem5 = document.querySelector('img')
console.log(elem5);

const elem6 = document.querySelectorAll('img')
console.log(elem6);

const elem7 = document.querySelector('img[alt=random2]')
console.log(elem7);


// -----------------------------------------------
const paul = document.querySelector(".employe");

console.log(paul.closest(".liste-employes")); // ul
console.log(paul.closest(".employes")); // div


// -----------------------------------------------

console.log(divsLive);
console.log(divsStatiques);
// divsLive contiendra une div puis deux. Alors que divsStatiques contiendra toujours une seule div. La différence est que les collections live se mettent à jour automatiquement lorsqu'il y a des changements dans le document, alors que les collections statiques non.  Dans la grande majorité des cas vous n'aurez besoin que de collections statiques pour effectuer vos manipulations.

HTMLInputElement


// **************** 78) Modifier des éléments du DOM **************************

const p = document.querySelector("p")
const section = document.querySelector("section")
const img = document.querySelector("img")
const a = document.querySelector("#id-test2")
const input = document.querySelector("input")

console.log(section.childNodes[1]);
console.log(p.childNodes);
console.log(p.childNodes[0]);
console.log(p.childNodes[0].nodeValue = "Salut !!");

p.innerHTML = "<strong>HELLO !</strong>" // HELLO !
p.innerText = "<strong>Helloooooo !</strong>" // <strong>Helloooooo !</strong>

console.log(img.childNodes); // Node attributes
console.log(img.attributes);


img.src = "https://miro.medium.com/v2/resize:fit:640/1*kCD_6R3UkMHkpS_YgFoU9w.jpeg";
// img.attributes[0].nodeValue = "https://miro.medium.com/v2/resize:fit:640/1*kCD_6R3UkMHkpS_YgFoU9w.jpeg"; // Idem
img.alt = "image ES6" 

a.href = "https://dyma.fr/developer/list/chapters/core/5dfbc811c7b96a25633bce2c/lesson/javascript/5e091deac4752e64ce912788/11/4"

const maDiv = document.getElementById("ma-div");
console.log(maDiv.outerHTML);

document.getElementById("ma-div").innerText; // Ceci est un test de text

document.getElementById("ma-div").textContent;


// **************** 79) Attributs et propriétés **************************

console.log(img.attributes);
console.log(img.hasAttribute('test1')); // Check l'existence d'un attribut et retourne un boolean.
console.log(img.setAttribute('test1', 'autre chose'));
console.log(img.getAttribute('test1'));
img.removeAttribute('test1');
console.log(img.getAttribute('test1'));

console.log(input.dataset.test2) // dataset utilisé par Bootstrap notamment.