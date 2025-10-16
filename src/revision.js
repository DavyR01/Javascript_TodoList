
// **************** Callback synchrone **************************


// 1er exemple :
function processWithCallback(callback) {
   console.log("Début du traitement") ;
	callback ("Première étape") ;
	// Appel au milieu de la fonction
	console.log("Traitement en cours") ;
	callback ("Deuxieme étape") ;
	// Autre appel
	console.log("Fin du traitement") ;
}

processWithCallback((step) => console.log(`Callback appelé: ${step}`)) ;



// 2 eme exemple :
function doSomething(callback) {
   console.log("Avant le callback");
   callback(); // <-- le callback est exécuté ici
   console.log("Après le callback");
}

doSomething(() => console.log("Je suis le callback !"));


// **************** Callback asynchrone **************************


setTimeout(() => {
  console.log("Callback exécuté !");
}, 5000);

console.log("Code synchrone exécuté avant !");




// **************** Les fermetures (closures) **************************



function fetchDataWithDelay(url, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // closure ici : la fonction dans setTimeout garde accès à `url` et `resolve`
      resolve(`Données récupérées depuis ${url}`);
    }, delay);
  });
}

fetchDataWithDelay("https://api.example.com/data", 2000)
  .then((data) => console.log(data)); 





