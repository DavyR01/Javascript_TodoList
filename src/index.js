let test = '123'

console.log(test);

// console.log($);

// Ouvrez la console Chrome en faisant CTRL + MAJ + I
// ou clic droit dans la fenêtre blanche puis inspecter puis onglet console.
console.info("test");
console.warn("test");
console.error("test");
console.log("test");

// On peut afficher le temps passé entre l'exécution de la ligne suivante
// et de l'exécution de la ligne d'après :
console.time();
console.timeEnd();

// Affichage d'un tableau, nous verrons en détails les tableaux dans les
// leçons suivantes :
console.table(["chat", "chien", "koala"]);
console.table({animal:"lama", animal2:"dromadaire", animal3:"chameau"});


// Affichera une erreur pour le deuxième car l'assertion est fausse :
console.assert(true, "Bonjour 1 !");
console.assert(false, "Bonjour 2 !");

// Compter le nombre d'exécution :
// Nous étudierons les boucles en détails plus tard également.
for (let i = 0; i < 5; i++) {
  console.count();
}