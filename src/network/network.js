
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

