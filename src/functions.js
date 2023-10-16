const br = () => console.log('\n');

// **************** 46) Les expressions de fonction et leur déclaration **************************

// déclaration
function func() {
   console.log('func exec');
}

func();

// expression : On assigne une fonction à une variable
   // => Fonction nommée :
const fn = function func2() {
   console.log('func2 exec');
}

   // => Fonction anonyme : 
const fn2 = function () {
   console.log('func2 exec');
}

console.log(fn.name); // Sur les objets fonction, on a une propriété name.
console.log(fn2.name); // Sur un fonction anonyme, le name prend la valeur du nom de la variable.
fn(); br()

// Vous pouvez cependant également déclarer un nom pour utiliser la récursivité. La récursivité est le fait d'invoquer la fonction dans la fonction, afin de l'exécuter jusqu'à ce qu'une condition soit remplie :
const factorielle = function f(n) { return n < 2 ? 1 : n * f(n - 1) };
// La fonction s'invoquera elle-même jusqu'à ce que n soit inférieur à 2.


// **************** 47) Paramètres, arguments et paramètres par défaut **************************

function func2 (param = "default2") {
   // param = param || 'default1';
   if(param) {
      console.log(param.toUpperCase());
   }
}

func2('parametre')
func2()
br()

// **************** 48) Objet arguments et utilisation de l'opérateur Rest (...) **************************

// Avec l'objet argument : Il contient tous les arguments passés à la fonction (Old school et déprécié)
function add() {
   console.log(/* arguments */);
   // console.log(arguments[0]);
   let total = 0;
   for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
   }
   console.log(total);
}

// Avec l'opérateur REST...
function add2(...numbers) {
   console.log(numbers);
   let total = 0;
   numbers.forEach(el => {
      total += el
   });
   console.log(total);
}

function add3(operator, ...numbers) {
   let total = 0;
   if (operator === "+"){
      numbers.forEach(el => {
         total += el
      });
      console.log(total);
   } else console.log('we must add numbers');
}

add(1,2,3,4,5,6,7,8); br()
add2(1,2,3,4); br()
add3("+",1,3,5,7,9,11,13,15)
add3("*",1,3,5,7,9,11,13,15)

// **************** 49) Valeur de retour des fonctions **************************

function operation(...numbers) {
   let total = 0;
   numbers.forEach(el => {
      total += el
   });
   return total
}

const total = operation(3,6,9,12,15)
console.log(total); br()

// **************** 50) Environnement lexical et contexte d’exécution **************************

// **************** 51) La chaine de portée **************************

function a() {
   console.log((foo)); // 2
}
function b() {
   let foo = 1;
   a()
}
let foo = 2;
b();

// *********

function c() {
   function d() {
      console.log(foo2); // 1
   }
   let foo2 = 1;
   d();
}

let foo2 = 2
c()


// **************** 52)   **************************
// **************** 53)  **************************
// **************** 54)  **************************
// **************** 55)  **************************
// **************** 56)  **************************

