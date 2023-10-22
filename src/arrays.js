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

arr12.pop();
arr12.shift();

arr12.splice(1, 0, 12.5); // Méthode splice

console.log(arr11);
console.log(arr12);
console.log(arr13);
console.log(arr14);


// **************** 63)  **************************


// **************** 64)  **************************


// **************** 65)  **************************


// **************** 66)  **************************


// **************** 67)  **************************


// **************** 68)  **************************


// **************** 69)  **************************


// **************** 70)  **************************
