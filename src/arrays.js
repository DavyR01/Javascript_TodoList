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
console.log(arr14);


// **************** 63) Supprimer des éléments dans un tableau  **************************

const arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr15.shift();
arr15.pop();

const [, ...arr16] = arr15
arr16.splice(2, 2)

// console.log(arr15);
console.log(arr16);


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
console.log(elem);


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
console.log("copyDeep", copyDeep);

// **************** 66) Fusionner des tableaux **************************

const arr20 = [1, 2, 3]
const arr21 = [4, 5, 6]
const arr22 = [7, 8, 9]

const merge1 = [...arr20, ...arr21]
const merge2 = arr20.concat(arr21).concat(arr22)

console.log(merge1);
console.log(merge2);


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

console.log(arr23, arr24, arr25, arr26, arr27, arr28, arr29);

// **************** 68)  **************************


// **************** 69)  **************************


// **************** 70)  **************************
