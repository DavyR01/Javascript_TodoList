import '../style/style.css';

const br = () => console.log('\n'); br();

// **************** 104) Les fonctions asynchrones avec async / await  **************************

const button1 = document.querySelector("#button1");

button1.addEventListener('click', () => {
   br();

   console.log("début");

   setTimeout(() => {
      console.log('timeout 2000');
   }, 2000);

   const promesse = new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 4000);
   });

   promesse.then(() => console.log('promesse 4000'));

   Promise.resolve().then(() => {
      console.log('promesse 0');
   });

   setTimeout(() => {
      console.log('timeout 0');
   }, 0);

   console.log("fin");
});

//! Notes : 
// Tout le code associé au setTimeout qui est positionné dans la fonction de callback va être passé à la callback queue. Et la callback queue ne va être vidé que si la stack est vide et disponible. 
// Au moment où le script est exécuté, la stack n'est pas vide, il reste des instructions et notamment des instructions synchrones ('début' et 'fin').
// Les événements que l'on écoute depuis le DOM vont être aussi passé dans la callback queue.



const button2 = document.querySelector("#button2");

button2.addEventListener('click', () => {
   br();

   setTimeout(() => console.log("Le timeout"), 0);

   Promise.resolve().then(() => console.log("La promesse 1"));

   requestAnimationFrame(() => console.log("L'animation"));

   Promise.resolve().then(() => console.log("La promesse 2"));

   console.log("Le code synchrone"); // 1
});




const button3 = document.querySelector("#button3");

button3.addEventListener("click", () => {
   br();
   Promise.resolve().then(() => console.log("La promesse 1"));
   console.log("Le clic 1");
});
button3.addEventListener("click", () => {
   Promise.resolve().then(() => console.log("La promesse 2"));
   console.log("Le clic 2");
});