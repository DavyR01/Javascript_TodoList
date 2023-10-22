const br = () => console.log('\n'); br()

// **************** 58) Introduction aux tableaux  **************************

const arr1 = [1, 'deux', {foo: "bar"}, [1,2,3]] 
const arr2 = Array(1,2,3)
const arr3 = new Array(2,3,4)
const arr4 = Array.from('hello')
const arr5 = Array.from([1,2,3], nbr => nbr * 2); 
const arr6 = Array.of(true, 'foo', 'bar')


console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(typeof(arr5));
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

// **************** 60)  **************************


// **************** 62)  **************************


// **************** 63)  **************************


// **************** 64)  **************************


// **************** 65)  **************************


// **************** 66)  **************************


// **************** 67)  **************************


// **************** 68)  **************************


// **************** 69)  **************************


// **************** 70)  **************************
