// **************** 136) La Web API Location ****************

//? location est un objet global qui fait partie des Web API du navigateur. Il contient des informations relatives à l'URL du document de la page et permet l'utilisation de méthodes afin d'interagir avec cette URL.

console.log(location)
console.log(location.href) // http://localhost:4005/

const url = new URL(location.href)
console.log(url); //? Nous avons ici une option en + : le Search Param qui permet d'interagir avec les paramètres de l'URL sans se soucier des encodages.
console.log(url.searchParams.get('sort'));

const searchParams = new URLSearchParams(location.search)
console.log(searchParams.get('sort'));



// **************** 137) Les méthodes de l'objet location ****************

setTimeout(() => {
   // location.assign('https://dyma.fr')
   // location.href = "https://dyma.fr"
   // location.replace("https://dyma.fr")
   // location.reload()
}, 3000);

console.log(location.toString()); // http://localhost:4005/
console.log(location.href); // http://localhost:4005/



// **************** 138) La Web API history ****************

//? L'objet global history permet d'agir sur l'historique de navigation du navigateur.Il permet d'agir sur les pages visitées dans l'onglet en cours en utilisant du JavaScript.

console.log(history);
console.log(history.length);

const back = document.querySelector('#back')
const next = document.querySelector('#next')

back.addEventListener('click', () => {
   history.back()
})
next.addEventListener('click', () => {
   history.forward()
})

// history.go(-5)


// **************** 139) L'objet state d'history ****************

console.log(history);

let inputStateValue;
let inputValue;
const input = document.querySelector('input')

if (history.state) {
   inputStateValue = history.state.input
   inputValue = inputStateValue
   input.value = inputValue
}

setInterval(() => {
   const value = input.value
   if (value != inputValue) {
      inputValue = value
      history.replaceState({ input: value }, '') //? Remplace l'entrée de l'historique de navigation.
      // history.pushState({ input: value }, '') //? Ajoute une entrée dans l'historique de navigation.
   }
}, 3000)

window.addEventListener('popstate', event => {
   console.log(event);
}) //? L'événement popstate est émis sur l'objet window à chaque fois que l'historique change

console.log(history.state);
