

let test = '123';

console.log(test);

// console.log($);

//? Ouvrez la console Chrome en faisant CTRL + MAJ + I ou clic droit dans la fenêtre blanche puis inspecter puis onglet console.
console.info("test");
console.warn("test");
console.error("test");
console.log("test");

//? On peut afficher le temps passé entre l'exécution de la ligne suivante et de l'exécution de la ligne d'après :
console.time();
console.timeEnd();

//? Affichage d'un tableau, nous verrons en détails les tableaux dans les leçons suivantes :
console.table(["chat", "chien", "koala"]);
console.table({ animal: "lama", animal2: "dromadaire", animal3: "chameau" });


//? Affichera une erreur pour le deuxième car l'assertion est fausse :
console.assert(true, "Bonjour 1 !");
console.assert(false, "Bonjour 2 !");

//? Compter le nombre d'exécution : Nous étudierons les boucles en détails plus tard également.
for (let i = 0; i < 5; i++) {
	console.count();
}


// **************** 17) Les opérateurs et les notions de précédence et d'associativité ****************

//! https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Operator_precedence

//? Lorque 2 opérateurs ont le même précédence, on prend en considération l'associativité pour déterminer l'ordre d'exécution de l'opération.

const trial = undefined || 1; //? 1 car l'opérateur || a une précédence supérieure (4) au signe = (3). La valeur 1 est une valeur truthy donc prioritaire à la valeur falsy de "undefined"


// **************** 21) Opérateur de coalescence des nuls ****************


const user = {};
let username = user.username || "John Doe";
let username3 = 1 || "John Doe";
let username2 = "" || "John Doe";
console.log(username, username2, username3);

let username4 = 0 ?? "Jane";
let username5 = 1 ?? "Jane";
let username6 = undefined ?? "Jane";
console.log(username4, username5, username6);

