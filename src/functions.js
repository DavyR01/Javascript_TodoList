// import './test' // Sans l'import d'un autre fichier, le mode strict de webPack n'est pas pris en compte. (chapitre 53: this)

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

function func2(param = "default2") {
   // param = param || 'default1';
   if (param) {
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
   if (operator === "+") {
      numbers.forEach(el => {
         total += el
      });
      console.log(total);
   } else console.log('we must add numbers');
}

add(1, 2, 3, 4, 5, 6, 7, 8); br()
add2(1, 2, 3, 4); br()
add3("+", 1, 3, 5, 7, 9, 11, 13, 15);
add3("*", 1, 3, 5, 7, 9, 11, 13, 15)

// **************** 49) Valeur de retour des fonctions **************************

function operation(...numbers) {
   let total = 0;
   numbers.forEach(el => {
      total += el
   });
   return total
}

const total = operation(3, 6, 9, 12, 15)
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
c();
br();


// **************** 52) Namespace et IIFE **************************



// **************** 53) Le mot-clé this **************************

function func3() {
   console.log(this); // this fait référence à undefined en mode strict, donc lorsque l'on importe un fichier par exemple (haut de page). 
}

func3();
br()

// **************** 54) Définir ou lier this **************************

const d3 = {
   foo: "not bar"
};

const c2 = {
   foo: "bar",
   fn() {
      function d2() {
         console.log(this);
      }
      d2() // Fait référence à l'objet window en l'absence du mode strict (sans import ou export fichier ou de notification "use strict" en haut de fichier)
      d2.call(this); // call permet de spécifier le this. call est une méthode des fonctions. this fait référence à l'objet c2.
      d2.call(d3)
   }
};

c2.fn();

function a2() { }

a2.foo = "bar";

console.log(a2);
console.log(a2.foo);


const c3 = {
   name: 'Jean',
   lastName: 'Louis'
};

function bonjour(lang) {
   if (lang === 'fr') {
      console.log(`bonjour ${this.name} ${this.lastName}`);
   } else {
      console.log(`hello ${this.name + this.lastName}`);
   }
}

bonjour.call(c3, 'fr'); // Ici, on passe une liste de paramètres.
bonjour.apply(c3, ['fr']); // Pareil que call sauf qu'on lui passe un tableau qui va contenir l'ensemble des paramètres.
const bindC3 = bonjour.bind(c3); // La méthode bind() permet de créer un clone d'une fonction en liant définitivement la valeur de this à l'argument passé en premier paramètre.
bindC3("en")

function multiplier(nombre) {
   return this * nombre;
}

const doubler = multiplier.bind(2); // définir this comme étant la valeur 2
console.log(doubler(4));  //  8
br();

// **************** 55) Les fonctions fléchées **************************

// On déclare un objet : 
const a4 = (a, b) => ({
   a, b, total: a + b
})

console.log(a4(2, 3));

// On déclare une fonction :

const a5 = () => {
   console.log(this);
}
// function a5() {
//    console.log(this);
// }

a5();
const b5 = {
   foo: "bar"
}

a5.call(b5)
a5(b5) // Lorsque l'on déclarer une arrow function, le this est toujours le this du contexte de l'environnement lexical du parent.

// On déclare une méthode avec les functions pour que le this fasse référence  l'objet parent et non l'objet global :  

const a6 = {
   foo: "bar",
   fn: () => {
      console.log(this); // Ici le this fait référence à l'objet global (arrow function). On déclare notre fonction lorsque l'on déclare l'objet. Et l'environnement lexical est l'objet global.
   }
   // fn: function () {
   //    console.log(this); // Ici le this fait référence à l'objet parent.
   // }
}

a6.fn() // Correspond à l'objet global

const a7 = {
   foo: "bar",
   fn () {
      const fn2 = () => {
         console.log(this); 
      }
      fn2()
   }
}

a7.fn() // Correspond à l'objet a7


// **************** 56)  **************************

