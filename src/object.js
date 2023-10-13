const a = {}
const b = Object()
const c = new Object;
// const d = Object.create();
// const e = Object.assign();
// const f = Object.fromEntries();

console.log(a, b, c);
// console.log(d, e, f);

const terre = {
      population: 7e7,
      satellite: 'Lune',
      temperature: {
            min: -70,
            max: 60,
            current: {
                  min: 10,
                  max: 30
            }
      },
      isOld: false,
      getTemperature(){
            return (this.temperature["min"])
      },
      getTemperature2: function() {
            console.log(this.temperature["max"])
      }
}

console.log("terre :", terre);
console.log(terre.temperature); // without brackets with dot
console.log(terre["temperature"]); // the same output than previous using brackets without dot

console.log(terre["satellite"]); // Lune
console.log(terre.getTemperature());
terre.getTemperature2();


/********* Ici, nous allons faire une référence à nos variables dans l' objet terre2 ********/

const population= 8e7;
const satellite= 'Lune';
const temperature= {
      min: -80,
      max: 50,
};
const pop = "population"

const terre2 = {
      [pop]: population, 
      satellite : satellite, // : satellite n'est plus nécessaire depuis ES6 car on suppose qu'on a déclaré une variable au dessus qui a le même nom que la key.
      temperature,
      isOld: false
}

// terre2[pop] = population;

console.log(terre2);

/********* La décomposition d'objet ********/

const resident = 50

const terre3 = {
      resident: 9e7,
      satellite3: 'Lune',
      temperature3: {
            min: -75,
            max: 65,
      },
      isOld3: false,
};

// const {resident: residentTerre, satellite3, temperature3, isOld3} = terre3
const {resident: residentTerre, satellite3 = "Valeur par défaut", ...rest} = terre3 // satellite3 a une valeur par défaut si aucune valeur ne lui est affecté dans l'objet terre3. Ici, on donne un alias qu'on va extirper depuis l'objet terre3.

// console.log(resident, satellite3, temperature3);
// console.log(residentTerre, satellite3, temperature3);
console.log("With spread operator :", resident, residentTerre, satellite3, rest); // Avec le spread operator rest, on récupère toutes les propriétés qui n'ont pas été explicitement affectés à des variables provenant de l' objet en question, ici terre3.


/************************** Tester l'existence et la valeur d'une propriété ************************/

if ("resident" in terre3 && terre3.hasOwnProperty('resident')) {
      console.log('the key resident is present in the object terre3');
} else {
      console.log('the key resident is absent here');
}


(terre3['isOld3'] === false) 
? console.log('the key isOld3 has a value false in the object terre3') 
: console.log('the key isOld3 is true');

/************************** Supprimer ou écarter des propriétés ************************/

console.log(terre3);
// delete terre3.satellite3
terre3.satellite3 = null // Utiliser null et non undefined pour assigner de manière déclarative une propriété à l'absence de valeur. Nous savons de cette façon que c'est volontaire.
console.log(terre3);

const {resident : toDelete, ...copyTerre3} = terre3 // On souhaite récupérer toute les props de terre3 mais sans la population. On déclare donc population et on crée un objet avec le reste qui sera copyTerre3.

console.log(copyTerre3); // De cette manière, copyTerre3 est une copie de terre3 sans la propriété population.

copyTerre3['exemple'] = 'add exemple'
console.log(copyTerre3);


/************************** Fusionner des objets ****************************/

const terre4 = {
      population: 10e7,
      satellite: 'Spoutnik',
      ["surface ocean"]: '72%'
}

const terre5 = {
      population: 11e7,
      satellite: 'Lune',
      temperature: {
            min: -30,
            max: 40,
      },
      isOld: false,
}

const terreAssign = Object.assign({}, terre4, terre5)
console.log(terreAssign); // assign() permet de merger 2 objets en créant un autre objet à partir d'un objet vide. Si on ne place pas {}, terre4 sera écrasé et prendra la valeur de terreAssign, ce n'est donc pas ce que l'on souhaite avoir. Les valeurs fusionnées vont de la droite vers la gauche.

console.log(terre4);
// Autre solution avec le Spread...: 
const terreSpread = { ...terre4, ...terre5 } // Permet de copier un ou plusieurs objet dans un nouvel objet

console.log(terreSpread);
console.log(terre4 === terreSpread); // false


/************************** Comparer des objets ****************************/

const d = {a: 1}
const e = {a: 1}
const f = e

console.log( d === e ); //false car pas la même référence. On compare les références et non le contenu. Ce sont 2 références d'objet différentes. La référence à un objet correspond à son adresse dans la mémoire. 
console.log( f === e ); //true car dans ce cas, on aura la même adresse sur la heap, elles contiennent la même référence. Ces 2 objets pointent sur le même objet de la heap donc si on modifien l'un, l'autre sera modifié.


/************************** Itérer sur des objets ****************************/

const obj = {
      a: "un",
      b: "deux",
      c: "trois",
      d: "quatre",
      e: "cinq",
}

for (prop in obj) {
      // console.log(prop);
      console.log(obj[prop]);
}

console.log(Object.keys(obj)); // On extrait les différentes keys en renvoyant un tableau.
console.log(Object.values(obj)); // On extrait les différentes valeurs de l'objet en renvoyant un tableau
console.log(Object.entries(obj)); // On extrait les différentes propriétés de l'objet en renvoyant un tableau contenant des tableaux.


/************************** Le format JSON != XML ****************************/

const obj2 = {
      firstname: 'Jean',
      lastName: 'Louis',
      age: 15
}

const stringify = JSON.stringify(obj2, null, 3) // Le 3eme argument permet de gérer les espaces pour l'affichage
console.log("format JSON:", stringify);

const parse = JSON.parse(stringify)
console.log("format object :", parse);

/***** FORMAT JSON très similaire à un objet Javascript *******/
// Tous les noms de propriétés devront être entourés de double quotes en JSON. Ce format retourne une chaine de caractères exploitable côté serveur.

// '{
//       "firstname": 'Jean',
//       "lastName": 'Louis',
//       "age": 15
// }'
      
/***** FORMAT XML *******/

{/* <object>
      <firstname>Jean</firstname>
      <lastname>Jean</lastname>
      <age>Jean</age>
</object> */}