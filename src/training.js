//* Différence méthodes Javascript qui créent un nouvel élément(immutables) et celles qui modifient un élément (mutables) :

//? sort() VS concat() 

let myArray1 = [3, 1, 4, 1, 5, 9];
const myArray2 = myArray1.sort();

console.log(myArray1);   // [1, 1, 3, 4, 5, 9]
console.log(myArray2);  // [1, 1, 3, 4, 5, 9]
console.log(myArray1 === myArray2);


let myArray3 = [3, 1, 4];
const myArray4 = myArray3.concat(',');


console.log(myArray3);
console.log(myArray4);
console.log(myArray3 === myArray4);