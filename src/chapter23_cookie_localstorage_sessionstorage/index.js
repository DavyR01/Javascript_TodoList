
// **************** 172) Accéder aux propriétés d'un table  ******************
//? Pour pouvoir stocker des objets dans un cookie, il faut les convertir en chaine de caractères car à la base des cookies sont des chaines de caractères.

console.log("COOKIE :", document.cookie); // COOKIE : name=jack; age=20; email=jack@gmail.com //! Présence de mes 3 paires clés/valeurs contenus dans les cookies du storage du navigateur.

document.cookie = "name=jack";
document.cookie = "email=jack@gmail.com";
document.cookie = "age=20";
const place = {
   country: "Italie",
   city: "Milan"
};

document.cookie = `place=${JSON.stringify(place)}`;

//? Parser les cookies
const extractCookies = () => {
   return document.cookie.split('; ').reduce((acc, iteration /* index */) => {
      // console.log(`acc : ${acc}, iteration : ${iteration}`);

      const pair = iteration.split("=");
      // console.log(pair);
      console.log("acc object :", acc); // {} à la première itération.
      acc[pair[0]] = pair[1][0] === '{' ? JSON.parse(pair[1]) : pair[1];
      console.log(`acc stringify : ${JSON.stringify(acc)} VS acc interpolation string : ${acc}`);
      // console.log(`acc : ${acc}, iteration : ${iteration}`);

      return acc;
   }, {/* valeur ou objet initiale vide */ });
};


console.log(extractCookies());


//? Supprimer un cookie : 

function delete_cookie(name) {
   document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}



//! A SAVOIR :
// console.log(`acc : ${acc}`); //? Dans une interpolation de chaîne (${...}), JavaScript tente de automatiquement de convertir l'objet en chaîne de caractères, ce qui résulte en [object Object].


// **************** 173) Propriétés des cookies ******************

//? Pour de nombreuses raisons les cookies ne sont pas du tout sécurisés, et ne doivent contenir aucune information importante.

//? Plusieurs options : 
//? httpOnly, secure, expires, maxAge, __Secure, __Host
//? domain : Un domaine ne peut être défini que pour le domaine d'origine du code JavaScript.
//? path : Si vous définissez un path par exemple /api, les cookies ne seront envoyés que lorsque les requêtes vers le domaine commencent par /api. Cette option permet de limiter la portée des cookies.


// **************** 174) First-party, third-party et propriété samesite ******************

//? Pour l'authentification nous vous conseillons d'utiliser a minima les cookies avec les options secure, httpOnly et SameSite=Lax.

// document.cookie = 'samesite=lax; test3=salut3; max-age=15';


// **************** 175) localStorage et sessionStorage ******************

//? A la différence des cookies, les données enregistrées sur le localStorage ou sessionStorage ne sont pas accessibles depuis le serveur. Le local et session storage partagent ensemble la même API donc sont similaires.

//? LocalStorage : Les données du local storage restent persistées sur le navigateur et ne sont pas envoyées à chaque requête comme les cookies. On va donc pouvoir stocker des données de plus grosses tailles (2-10Mo). Durée de vie indéfinie. Le localStorage utilise l'obligation de la même origine (same-origin policy). Les données ne peuvent donc être accédées que sur le même domaine, le même port et le même protocole.

//? SessionStorage : Disparait à la fin de la session (fermeture onglet navigateur) sauf en cas de rafraichissement de la page.

localStorage.setItem("theme", "dark");

console.log(localStorage.getItem('theme'));

console.log(localStorage.key(0));

for (let key in localStorage) {
   if (localStorage.hasOwnProperty(key)) {
      console.log(key, ':', localStorage.getItem(key));
   }
}

// for (let i = 0; i < localStorage.length; i++) {
//    const key = localStorage.key(i);
//    console.log(key, ':', localStorage.getItem(key));
// }

localStorage.setItem(
   "location",
   JSON.stringify({ country: "France", city: "Nice " })
);

console.log(JSON.parse(localStorage.getItem('location')));

// localStorage.removeItem('theme');

// localStorage.clear();

// **************** 176) Les événements storage ******************

//? L'événement storage sert à synchroniser différents localStorage sur des onglets partageant la même origine. Le local storage est lié à l'origine.

// localStorage.clear();

const button = document.querySelector("button");
const input = document.querySelector("input");

const value2 = localStorage.getItem("value");
if (value2) {
   input.value = value2;
}

button.addEventListener("click", () => {
   const value = input.value;
   localStorage.setItem("value", value);
});

window.addEventListener("storage", (event) => {
   console.log(event);
   const value = event.newValue;
   input.value = value;
});