
// **************** 113) XMLHttpRequest **************************


// Requête GET : 

const xhr = new XMLHttpRequest();
console.log(xhr);

xhr.open('GET', "https://jsonplaceholder.typicode.com/todos")

xhr.responseType = 'json';

xhr.send();

xhr.addEventListener('load', res => {
   console.log(res);
   const result = xhr.response
   console.log(result);
})

xhr.addEventListener('error', err => {
   console.log(err);
})

xhr.addEventListener('progress', progress => {
   console.log(progress);
})



// Requête POST : 

const todo = {
   userId: 6,
   title: "Salut",
   completed: false
}

const xhr2 = new XMLHttpRequest();

console.log(xhr2);

console.log(xhr2.readyState);
xhr2.open('POST', "https://jsonplaceholder.typicode.com/todos")
console.log(xhr2.readyState);

xhr2.responseType = 'json'; // Préciser le type de la réponse attendue

xhr2.setRequestHeader('Content-type', 'application/json')

xhr2.send(JSON.stringify(todo));

xhr2.addEventListener('load', res => {
   console.log(res);
   console.log(xhr2);
   const result = xhr2.response
   console.log(result);
})

xhr2.addEventListener('error', err => {
   console.log(err);
})

xhr2.addEventListener('progress', progress => {
   console.log(progress);
})

xhr2.addEventListener('readystatechange', event => {
   console.log(event);
   console.log(xhr2.readyState);
})