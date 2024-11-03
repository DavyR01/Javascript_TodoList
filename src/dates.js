// **************** 131) Déclarer une date en JavaScript ****************

//? Date est un objet global JavaScript essentiel car il permet de manipuler les dates. 
//? Les objets Date ont pour départ (l'équivalent de l'an 0 pour nous avec notre calendrier grégorien) le 1er janvier 1970 minuit UTC (Universal Time Coordinated soit l'heure de Londres). Cette date initiale est appelée Epoch Unix car c'est la date initiale des systèmes d'exploitation unix.

const today = new Date();

console.log("Today is ... ", today);
console.log("Today is ... ", today.toString());

const date1 = new Date(0); //? Timestamp = durée en millisecondes qui s'est écoulée depuis la date d'origine de création 1970
console.log(date1);

const date2= new Date(2020, 0, 7, 10, 50)
console.log(date2);
