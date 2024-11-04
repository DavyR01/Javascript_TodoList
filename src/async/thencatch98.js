
// **************** 98) Introduction à l'asynchrone et timers **************************

console.log('async');

const timeoutId = setTimeout(() => {
   console.log('timer done');
}, 3000);

console.log(timeoutId);
// timeoutId
clearTimeout(timeoutId);


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

clearInterval(intervalId);


// **************** 99) Les promesses **************************

const promesse1 = new Promise((resolve, reject) => {
   // resolve("Promesse ok !")
   reject('promesse 1 failed');
});

// const promesse1 = Promise.reject("promesse 1 failed");


promesse1
   .then(result => console.log(result))
   .catch(err => console.error(err));

// promesse1
// .then(result => console.log(result), err => console.log(err)) 

const promesse2 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('timer promesse2 finished');
   }, 1000);
});

promesse2
   .then(result => console.log(result))
   .catch(err => console.error(err));

// On peut passer une 2eme fonction de callback en 2eme paramètre du then qui représente le catch. Les 2 façons de faire sont identiques pour la gestion d'erreur. Cependant, cette notation est très rare et non recommandée.


// **************** 100) Chaîner les promesses **************************



const promesse3 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('timer promesse3 finished');
   }, 2000);
});

promesse3.then(result => {
   console.log('then 1 :', result);
});

promesse3.then(result => {
   console.log('then 2 :', result);
});





const promesse4 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('timer promesse4 finished');
   }, 3000);
});

promesse4
   .then(result => {
      console.log('then 3 :', result);
      // throw new Error('throw error 4'); //** Tester d'injecter une erreur */
      return 'new value 3';
   })
   .then(result => (
      console.log('then 4 :', result),
      console.log('between result then 4 & 5'),
      'new value 4'
   ))
   .catch(err => console.error('catch error 4 :', err))
   .then(result => {
      // throw new Error('throw error 4 after catch') // Non protégé par le catch 
      console.log('then 5 affiché :', result);
   });

// le 1er then retourne une nouvelle promesse. Donc c'est sur cette nouvelle promesse que l'on va positionner le then. Et la 1ere promesse retourne 'new value 3' donc aura cette valeur dans la nouvelle promesse.

// ! Le catch doit être positionné à la fin d'une chaine de promesses afin de pouvoir gérer l'ensemble des potentiels erreurs des then. Cependant, il récupère l'erreur en amont mais n'interrompt pas la chaine





const promesse5 = new Promise((resolve, reject) => {
   // setTimeout(() => {
   //    resolve('timer promesse5 finished')
   // }, 4000);
   reject('promesse 5 failed');
});

promesse5
   .then(result => {
      console.log('then 6 :', result);
      // throw new Error('throw error 5') // * En l'absence de catch, le second callback du then ne catch pas la throw error contenue dans le then à lui seul. Il gère uniquement la potentiel erreur généré par la promesse avec reject.
   }, err => console.error('an error promesse 5 :', err))
   // .catch(err => console.error('catch error 5'))
   .finally(() => console.log('finally promesse 5'));





const promesse6 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('timer promesse6 finished');
   }, 5000);
   // reject('promesse 6 failed')
});

promesse6
   .then(result => {
      throw new Error('throw error 6');
      console.log('then 7 :', result);
   }/* , err => console.error('an error promesse 6') */)
   .catch(err => console.error('catch error 6 :', err))
   .finally(() => console.log('finally promesse 6'));





   // Ici nous allons utiliser sur la même promesse plusieurs méthodes, mais sans les chaîner :

const promesse7 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('timer promesse7 finished');
   }, 6000);
   // reject('promesse 7 failed')
}).then(result => {
   throw new Error('throw error 7');
   console.log('then 8 :', result);
});


promesse7.catch(err => console.error('errrorrrr : ', err));
promesse7.catch(err => console.error('ERRRROR : ', err));


console.log('promesse 1 :', promesse1);
console.log('promesse 2 :', promesse2);
console.log('promesse 3 :', promesse3);
console.log('promesse 4 :', promesse4);
console.log('promesse 5 :', promesse5);
console.log('promesse 6 :', promesse6);