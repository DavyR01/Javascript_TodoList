const br = () => console.log('\n'); br()

// **************** 58) Introduction aux tableaux  **************************

const arr1 = [1, 'deux', { foo: "bar" }, [1, 2, 3]]
const arr2 = Array(1, 2, 3)
const arr3 = new Array(2, 3, 4)
const arr4 = Array.from('hello')
const arr5 = Array.from([1, 2, 3], nbr => nbr * 2);
const arr6 = Array.of(true, 'foo', 'bar')


console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(typeof (arr5));
console.log(Array.isArray(arr5)); // Permet de tester si la variable est un array ou non, retourne un boolean
console.log(arr6);
br()


// **************** 59) Accéder aux propriétés d'un tableau  **************************

let arr7 = ["soleil", "terre", 'lune']

console.log((arr7));
console.log(arr7[0]);
console.log(arr7[arr7.length - 1]);

arr7.length = 0 // Reset un tableau sans modifier sa référence.
console.log(arr7);

// **************** 60) Imbrication de tableaux **************************

const arr8 = [["terre", "lune"], "soleil"]

console.log(arr8[0][0]);
console.log(arr8[0][arr8[0].length - 1]);
console.log(arr8);
br()


// **************** 61) Décomposition de tableaux et opérateur rest **************************

const arr9 = [1, 2, 3, 4, 5]
const arr10 = [[1, 2, 3], 4, 5]

const [a, b] = arr9; // Ici, on décompose notre array en récupérant les 2 premiers éléments.
const [c, ...rest] = arr9; // Ici, on décompose notre array en récupérant les 2 premiers éléments.

console.log(a);
console.log(b);
console.log(rest); // Opérateur rest

const [[d, e], f] = arr10
const [, , g] = arr10 // On saute les 2 premiers éléments et on récupère le 3eme élément.

console.log(d, e, f);
console.log(g);

let h = 'h';
let i = 'i';

// const tmp = h; // Old school
// h=i;
// i=tmp;

[h, i] = [i, h]; // Permet de switcher le contenu (valeurs) de 2 variables.

console.log("h : ", h);
console.log("i : ", i);

const tableau = [1];
const [j = 0, k = 2] = tableau;
console.log('value j :', j); // 1
console.log('value k :', k); // 2
br()

// **************** 62) Ajouter des éléments à un tableau  **************************

const arr11 = [1, 2, 3]
const arr12 = [11, 12, 13, 14, 15]

arr11[0] = "1"
arr11.unshift(-1, 0)
arr11.push(4, 5)
const arr13 = [...arr11, 6];
const arr14 = [-2, ...arr11];

arr12.splice(1, 0, 12.5); // Méthode splice

console.log(arr11);
console.log(arr12);
console.log(arr13);
console.log(arr14); br()


// **************** 63) Supprimer des éléments dans un tableau  **************************

const arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr15.shift();
arr15.pop();

const [, ...arr16] = arr15
arr16.splice(2, 2)

// console.log(arr15);
console.log(arr16); br()


// **************** 64) Trouver des éléments dans un tableau **************************

const arr17 = ['un', '2', 'trois'];

console.log(arr17.indexOf('deux'));
console.log(arr17[arr17.indexOf('deux')]); // indexOf ne fonctionne qu'avec des primitives dans le tableau.
console.log(arr17.indexOf(2)); // indexOf ne fonctionne qu'avec des primitives dans le tableau (avec une comparaison stricte ===). Si retourne -1, il n'y a aucune valeur 2 dans le tableau.
console.log(arr17.includes(2));  // retourne un boolean. includes ne fonctionne qu'avec des primitives aussi.

const arr18 = [
   {
      name: 'terre'
   },
   {
      name: 'lune'
   },
   {
      name: 'soleil'
   }
]


const index = arr18.findIndex(elem => elem.name === 'soleil') // Fonction de callback = fonction de rappel
const elem = arr18.find(elem => elem.name === 'soleil') // Fonction de callback 
console.log(index);
console.log(elem); br()


// **************** 65) Copier un tableau **************************

const arr19 = [1, 2, 3, { name: 'soleil' }]

// Copie par référence inutile:
const copyByRef = arr19; // Inutile car il est très rare que l'on ait besoin de plus d'une référence sur un même tableau (objet)

copyByRef.push(4)
console.log(arr19);

const b1 = (arr) => {
   arr19.push(6)
}

b1(arr19)
console.log(arr19);

// Copie par valeurs => copyShallow :

const copyShallow = arr19.slice() // Shallow copy (Ne fonctionne qu'avec les primitives car les objets pour rappel vot garder la même référence). Sans paramètres sur le slice, cela copie l'intégralité du paramètre dans un nouveau tableau.
const copyShallow2 = [...arr19]
const copyShallow3 = Array.from(arr19)

copyShallow[3].name = 'lune';
copyShallow.push(7);

console.log("arr19", arr19);
console.log("copyShallow", copyShallow);
console.log("copyShallow2", copyShallow2);
console.log("copyShallow3", copyShallow3);

// Copie par valeurs => copyDeep :

const copyDeep = JSON.parse(JSON.stringify(arr19));

copyDeep[3].name = "mars";

console.log("arr19", arr19);
console.log("copyDeep", copyDeep); br()

// **************** 66) Fusionner des tableaux **************************

const arr20 = [1, 2, 3]
const arr21 = [4, 5, 6]
const arr22 = [7, 8, 9]

const merge1 = [...arr20, ...arr21]
const merge2 = arr20.concat(arr21).concat(arr22)

console.log(merge1);
console.log(merge2); br()


// **************** 67) Trier un tableau **************************

const arr23 = [2, 10, 3, 15, 4]
const arr24 = ["Orange", 'banana', 'apple']
const arr25 = ["Orange", 'banana', 'apple']
const arr26 = [2, 10, 3, 15, 4]
const arr27 = [2, 10, 3, 15, 4]
const arr28 = [
   { quantity: 30 }, { quantity: 10 }, { quantity: 40 }, { quantity: 20 },
]
const arr29 = [2, 10, 3, 15, 4]


arr23.sort(); // [10, 15, 2, 3, 4] => Comparaison des modes ASCII des strings selon les valeurs UTF-16 des caractères.

// arr24.sort();
arr24.sort((a, b) => a.localeCompare(b)); // Ne prend pas en compte la casse.
arr25.sort((a, b) => a.localeCompare(b) * -1);
arr26.sort((a, b) => a - b); // Bonne méthode avec les nombres
arr27.sort((a, b) => b - a);
arr28.sort((a, b) => a.quantity - b.quantity); // Comparaison avec des objets.
arr29.reverse()

console.log(arr23, arr24, arr25, arr26, arr27, arr28, arr29); br()

// **************** 68) Itérer sur un tableau **************************

const arr30 = [11, 12, 13, 14, 15];

// for (let i = 0; i < arr30.length; i++) {
//    console.log(arr30[i]);
// }

for (const i of arr30) {
   if (i == 12) continue; // Instructions de controle
   if (i == 14) break;
   console.log(i);
}

// Ne pas utiliser for...in... pour les tableaux. Cela n'a aucun intérêt.
// for (const i in arr30) {
//    console.log(i);
// }

arr30.forEach((el, index) => {
   console.log(`value: ${el}, index: ${index}`);
});
br()

// **************** 69) Introduction à la programmation fonctionnelle **************************

const arr31 = ['UN', 'DEUX', 'TROIS', 'QUATRE', 'CINQ']
const arr32 = arr31.map(el => el.toLowerCase())
const arr33 = new Array
arr31.forEach(el => arr33.push(el.toLowerCase())) // Identique au map

const arr34 = [
   { quantity: 5, name: 'CHAUSSURES' },
   { quantity: 10, name: 'CHEMISES' },
   { quantity: 15, name: 'PANTALONS' },
]
const arr35 = arr34.map(el => {
   return el.name;
})

const arr36 = arr34.filter(el => el.quantity > 5)
const arr37 = arr34.filter(el => el.quantity > 8).map(el => {
   return {
      ...el,
      name: el.name.toLowerCase() // On opère des transformations directement sur ce nouvel array. Cette key name va être prioritaire et va écraser l'ancienne valeur.
   }
})

const arr38 = ["12", "111", "4", "56", "42"];
const arr39 = arr38.map(Number).filter(el => el > 20);

console.log('arr31 :', arr31);
console.log('arr32 :', arr32);
console.log(arr31 == arr32);
console.log('arr33 :', arr33); // forEach arr31
console.log('arr34 :', arr34);
console.log('arr35 :', arr35); // map
console.log('arr36 :', arr36); // filter
console.log('arr37 :', arr37); // 
console.log('arr39 :', arr39); // 
br();

// **************** 70) D'autres méthodes de programmation fonctionnelle **************************

const panier = [
   { quantity: 1, name: 'CHAUSSURES', price: 50 },
   { quantity: 1, name: 'CHEMISES', price: 75 },
   { quantity: 2, name: 'PANTALONS', price: 60 },
];

const total = panier.reduce((acc, value, index) => {
   console.log(`acc : ${acc}, value : ${value}, index : ${index}`);
   acc += value.price * value.quantity
   return acc;
}, 0);

// total refactorisé : 
const total2 = panier.reduce((acc, value) => (acc += value.price * value.quantity), 0); // 0 sera la valeur initiale.
// const total2 = panier.reduce((fonction de rappel), (valeur intiale)); 

console.log(total);
console.log(total2);

// Méthode flat() :
const tableau0 = [1, 2, [3, 4], [[5], [6,7]]];
const tableau2 = tableau0.flat();
const tableau3 = tableau0.flat(2);

console.log(tableau0); // [1, 2, 3, 4, [5], [6, 7]]
console.log(tableau2); // [1, 2, 3, 4, [5], [6, 7]]
console.log(tableau3); // [1, 2, 3, 4, 5, 6, 7]