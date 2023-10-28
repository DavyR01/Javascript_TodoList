
// **************** 98) Introduction à l'asynchrone et timers **************************

console.log('async');

const timeoutId = setTimeout(() => {
   console.log('timer done');
}, 3000);

console.log(timeoutId);
// timeoutId
clearTimeout(timeoutId)


let index = 0;

const intervalId = setInterval(() => {
   console.log('interval done');
   index++;
   // if (index === 5) {
   //    clearInterval(intervalId)
   //    console.log('finish');
   // }
}, 1000);

console.log(intervalId);

clearInterval(intervalId)


// **************** 99) Les promesses **************************

const promesse1 = new Promise((resolve, reject) => {
   // resolve("Promesse ok !")
   reject('promesse 1 failed')
});

promesse1
   .then(result => console.log(result))
   .catch(err => console.log(err))

// promesse1
// .then(result => console.log(result), err => console.log(err)) 

console.log(promesse1);


const promesse2 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('timer promesse2 finished')
   }, 3000);

});

promesse2
   .then(result => console.log(result))
   .catch(err => console.log(err))

console.log(promesse2);

// On peut passer une 2eme fonction de callback en 2eme paramètre du then qui représente le catch. Les 2 façons de faire sont identiques pour la gestion d'erreur. Cependant, cette notation est très rare et non recommandée.
