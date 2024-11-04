
// **************** 113) XMLHttpRequest **************************


// Requête GET : 

const xhr = new XMLHttpRequest();
console.log(xhr);

xhr.open('GET', "https://jsonplaceholder.typicode.com/todos");

xhr.responseType = 'json';

xhr.send();

xhr.addEventListener('load', res => {
   console.log(res);
   const result = xhr.response;
   console.log(result);
});

xhr.addEventListener('error', err => {
   console.log(err);
});

xhr.addEventListener('progress', progress => {
   console.log(progress);
});



// Requête POST : 

const todo = {
   userId: 6,
   title: "Salut",
   completed: false
};

const xhr2 = new XMLHttpRequest();

console.log(xhr2);

console.log(xhr2.readyState);
xhr2.open('POST', "https://jsonplaceholder.typicode.com/todos");
console.log(xhr2.readyState);

// xhr2.timeout = 1000;

xhr2.responseType = 'json'; // Préciser le type de la réponse attendue

xhr2.setRequestHeader('Content-type', 'application/json');

xhr2.send(JSON.stringify(todo));

// xhr2.addEventListener('timeout', e => {
//    console.log(e);
// })

xhr2.addEventListener('load', res => {
   console.log(res);
   console.log(xhr2);
   const result = xhr2.response;
   console.log(result);
});

xhr2.addEventListener('error', err => {
   console.log(err);
});

xhr2.addEventListener('progress', progress => {
   console.log(progress);
});

xhr2.addEventListener('readystatechange', event => {
   console.log(event);
   console.log(xhr2.readyState);
});



// **************** 114) Utilisations avancées de XMLHttpRequest **************************

// Uniquement possible avec xhr et non avec fetch pour l'upload de fichiers.

const xhr3 = new XMLHttpRequest();
const form = document.querySelector('#form3');

form.addEventListener('submit', event => {
   event.preventDefault();
   const formData = new FormData(form);

   xhr3.open('POST', "https://restapi.fr/upload");

   // xhr3.withCredentials = true; // Requête CORS pour envoyer des credentials qui correspond à des cookies et entêtes d'authenfication.

   xhr3.upload.addEventListener('loadstart', () => {
      console.log('load started');
   });

   xhr3.upload.addEventListener('progress', event => {
      // console.log(event);
      const pourcentage = (event.loaded / event.total * 100).toFixed(0);
      console.log(pourcentage, '%');
   });

   xhr3.upload.addEventListener('loadend', () => {
      console.log('load ended');
   });

   xhr3.upload.addEventListener('error', () => {
      console.log('error');
   });

   xhr3.send(formData); // J'envoie au serveur un encodage multipart/formdata pour l'envoi de fichiers
});

