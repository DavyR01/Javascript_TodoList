
// **************** 106) Première requête HTTP avec fetch **************************


const promesse1 = fetch('https://jsonplaceholder.typicode.com/users')
   .then((result) => console.log(result))

console.log(promesse1);


// With then / catch

fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => {
      const promesseUsers = response.json()
      promesseUsers.then(users => {
         console.log(users);
      })
   })
   // .then(response => response.text())
   // .then((result) => console.log(result))
   .catch(err => console.log(err))




fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response => response.json())
   // .then(response => response.text())
   .then((result) => console.log(result))
   .catch(err => console.log(err))




// With async / await & bloc try / catch

fetch('https://jsonplaceholder.typicode.com/users')
   .then(async response => {
      try {
         const users = await response.json()
         console.log(users);
      } catch (error) {
         console.log(error);
      }
   })
   .catch(err => console.log(err))




// With response.text instead of json 

fetch('https://jsonplaceholder.typicode.com/users/1')
   .then(async response => {
      try {
         const users = await response.text()
         // console.log(users);
         console.log(JSON.parse(users));
      } catch (error) {
         console.log(error);
      }
   })
   .catch(err => console.log(err))











const button1 = document.querySelector('button');
const startTime = new Date().getTime();
const timer = document.querySelector("#timer");


function afficherLeResultat(data) {
   const ul = document.createElement("ul");
   data.forEach(d => {
      const li = document.createElement("li");
      li.innerText = d.name;
      li.classList.add("item");
      ul.append(li);
   });
   document.querySelector("#app").append(ul);
}

function toggleLoader() {
   const loader = document.querySelector(".loader");
   loader.style.display = loader.display === "none" ? "" : "none";
}

button1.addEventListener('click', () => {

   async function envoyerRequete() {

      const timerId = setInterval(() => refreshTimer(), 5);

      function refreshTimer() {
         timer.innerText = `En cours depuis : ${new Date().getTime() -
            startTime} millisecondes`;
      }

      function clearTimer() {
         clearInterval(timerId);
         timer.remove();
      }

      try {
         const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
         console.log(reponse.ok);
         console.log(reponse.status);
         console.log(reponse.statusText);
         console.log(reponse.redirected);
         console.log(reponse.type);
         console.log(reponse.url);
         for (const [cle, valeur] of reponse.headers) {
            console.log(`${cle} : ${valeur}`);
         }
         const json = await reponse.json();
         afficherLeResultat(json);
      } catch (err) {
         console.error(err);
      } finally {
         toggleLoader();
         clearTimer();
      }
   }
   // setTimeout(() => {
   envoyerRequete()
   // }, 2000);
})






// **************** 107) Effectuer une requête POST **************************


const user = {
   name: 'tintin',
   email: 'tintin@gmail.com'
}

const promesse2 = fetch("https://jsonplaceholder.typicode.com/users", {
   method: 'POST',
   body: JSON.stringify(user),
   headers: {
      'Content-Type': 'application/json'
   },
   // mode: "cors",
   // cache: "default",
   // credentials: 'include'
})
promesse2.then(async response => {
   try {
      console.log(response);
      const body = await response.json()
      console.log(body);
   } catch (error) {
      console.log(error);
   }

})



// **************** 108) Les CORS **************************


// **************** 109) Options avancées des requêtes fetch **************************


// **************** 110) Annuler des requêtes en cours **************************

const controller = new AbortController();

console.log(controller);

controller.signal.addEventListener('abort', (event) => {
   console.log(event);
})


const promesse3 = fetch("https://jsonplaceholder.typicode.com/users", {
   signal: controller.signal
})

const promesse4 = fetch("https://jsonplaceholder.typicode.com/todos", {
   signal: controller.signal
})

controller.abort()

promesse3
   .then(response => console.log(response))
   .catch(e => console.log('The fetch has been aborted : ', e))

promesse4
   .then(response => console.log(response))
   .catch(e => console.log('The fetch has been aborted : ', e))




// **************** 111) Les objets FormData **************************

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
   e.preventDefault()

   const formData = new FormData(form); // Permet d'extaire toutes les informations d'un formulaire facilement.

   console.log(formData);

   formData.append('name', '123');
   formData.set('email', 'tintin@gmail.fr')
   formData.set('email', 'tintin2@gmail.fr')
   formData.set('email', 'tintin3@gmail.fr')
   console.log(formData.get('email'));

   for (let pair of formData) {
      console.log(pair);
   }

   const fetchData = async () => {
      await fetch('/test', {
         method: 'POST',
         body: formData
      })
   }
   fetchData()
})




// Exemple

const ul = document.createElement("ul");

function afficherLeResultat2(data) {
   const li = document.createElement("li");
   li.innerText = data;
   li.classList.add("item");
   ul.append(li);
   document.querySelector("#app2").append(ul);
}

const form2 = document.querySelector("#monForm");

form2.onsubmit = e => {
   e.preventDefault();
   const data = new FormData(form2);
   for (const [nom, valeur] of data) {
      afficherLeResultat2(`${nom} : ${valeur}`);
   }
};