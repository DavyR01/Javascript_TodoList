

// **************** 101) Les méthodes des promesses **************************

const p8 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve(1)
   }, 3000);
})

const p9 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve(2)
      // reject('error p9') // Injecter l'erreur pour voir les conséquences de la méthode allSettled.
   }, 2000);
})

const p10 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve(3)
   }, 1000);
}).then(result=> 'change value 3').then(result=> 'rechange value 3')

Promise.all([p8, p9, p10])
   .then(result => console.log(result))
   .catch(err => console.log('catch error :', err))


Promise.allSettled([p8, p9, p10])
   .then(result => console.log(result))
   .catch(err => console.log('catch error :', err))

Promise.race([p8, p9, p10])
   .then(result => console.log(result))
   .catch(err => console.log('catch error :', err))




// ! Promise.all()
// L'array dans le result va respecter l'ordre des promesses que l'on a passé en paramètre. Peu importe le timing.
// A partir du moment où une seul des promesses est rejeté, une erreur sera levée et on ira dans le catch directement.

// ! Promise.allSettled()
// Même si une promesse est rejetée, on récupère tout de même les autres résultats des promesses. Dans ce cas, on ne récupère pas des valeurs mais des objets.

// ! Promise.race()
// Cette méthode va traiter uniquement la 1ère promesse qui est résolue. p10 en l'occurence.


Promise.resolve('p11 ok')
   .then(result => console.log(result))

Promise.reject('p11 nok')
   .catch(result => console.log(result))

console.log('hello');


// ! Promise.resolve() ou Promise.reject() 
// On reste tout de même sur event asynchrone même si c'est instantanée et qu'il n'y a pas de timer. Donc tout événement asynchrone se déclenchera après le reste de l'exécution du script.


