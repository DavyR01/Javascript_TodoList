
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