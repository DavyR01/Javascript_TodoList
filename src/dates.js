const br = () => console.log("");

// **************** 131) Déclarer une date en JavaScript ****************

//? Date est un objet global JavaScript essentiel car il permet de manipuler les dates. 
//? Les objets Date ont pour départ (l'équivalent de l'an 0 pour nous avec notre calendrier grégorien) le 1er janvier 1970 minuit UTC (Universal Time Coordinated soit l'heure de Londres). Cette date initiale est appelée Epoch Unix car c'est la date initiale des systèmes d'exploitation unix.

const today = new Date();

console.log("Today is ... ", today);
console.log("Today is ... ", today.toString());

const date1 = new Date(0); //? Timestamp = durée en millisecondes qui s'est écoulée depuis la date d'origine de création 1970
console.log(date1); // Thu Jan 01 1970 01:00:00 GMT+0100 (heure normale d’Europe centrale)

const date2 = new Date(2020, 0, 7, 10, 50)
console.log(date2);


// **************** 132) Les formats des Dates en chaîne de caractères ****************

//? Le z à la fin du format ISO JavaScript, signifie que le fuseau horaire est celui de Greenwich
br()
const today2 = new Date();
const today3 = new Date().toString();
// const today3 = new Date("2024-11-03T18:54:16.747Z");

console.log(typeof (today2));
console.log(typeof (today3));


console.log(today2); // Sun Nov 03 2024 19:54:16 GMT+0100 (heure normale d’Europe centrale)
console.log(today2.toISOString()); // 2024-11-03T18:54:16.747Z //? On convertit le date en string format ISO pour pouvoir le stocker dans d'autres environnements comme les bases de données afin de le standardiser au fuseau horaire de Greenwich. Utile pour la manipulation.
console.log(today2.toUTCString()); // Sun, 03 Nov 2024 18:54:16 GMT
console.log(today2.toDateString()); // Sun Nov 03 2024


// **************** 133) Manipuler des timestamps ****************
//? Préférer faire des calculs directements sur des timestamps si l'on a pas besoin d'exploiter les dates mais que l'on souhaite juste mesurer le temps écoulé entre 2 dates. Donc inutile de créer des objets dates en créant des variables.

br()
const today4 = new Date()
const date4 = Date.parse(today4)
const todayTimeStamp = Date.now() //? Affiche le timestamp à l'instant t
const date5 = new Date(1730661103864)

console.log(today4); // Sun Nov 03 2024 20:11:43 GMT+0100 (heure normale d’Europe centrale)
console.log(date4); // 1730661103000
console.log(todayTimeStamp); /* 1730661103864 */
console.log(date5) // Sun Nov 03 2024 20:08:23 GMT+0100 (heure normale d’Europe centrale)

const date6 = new Date("2024-11-03T18:54:16.747Z")
console.log((todayTimeStamp - date6.getTime()) / 1000 / 60); // 26 minutes écoulées entre les 2 dates.


