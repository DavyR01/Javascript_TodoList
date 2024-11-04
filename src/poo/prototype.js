
const br = () => console.log('\n'); br();

// **************** 151) Introduction aux prototypes **************************

// => Pour la lecture : 

const engine = {
   power: 240
};

const vehicle = {
   hasEngine: true,
   start() {
      console.log('Vroum !');
   }
};

const car = {
   brand: "renault"
};

const bus = {
   seats: 80
};

car.__proto__ = vehicle; // On remonte la chaine des prototypes avec la key proto propre à un objet.
vehicle.__proto__ = engine;
engine.__proto__ = bus;

console.log(car);
console.log(car.hasEngine);

car.start(); // La méthode start n'a pas été trouvé dans l'objet car, donc on remonte la chaine de prototype pour chercher la méthode start.

console.log(vehicle.power); // 240
console.log(car.power); // 240

// On peut de cette manière réaliser une chaine de prototype sur plusieurs niveaux.

console.log(bus);
console.log(vehicle.seats);

console.log(car.__proto__);
console.log(car.__proto__.__proto__);
console.log(car.__proto__.__proto__.__proto__);
br();





// => Pour l'écriture : 

const vehicle2 = {
   hasEngine: true,
   start() {
      console.log(this.hasEngine);
      console.log('Go ahead !');
   }
};

const car2 = {
   brand: "Ford"
};

car2.__proto__ = vehicle2;

car2.hasEngine = false;

console.log(car2);
console.log(car2.hasEngine);
car2.start();


for (let key in car2) {
   console.log(car2.hasOwnProperty(key));
   console.log('key', key);
}

br();



// **************** 152) Le pattern constructeur et la propriété prototype **************************


const vehicle3 = {
   hasEngine: true,
   start() {
      console.log('Go ahead !');
   }
};

function Car(brand) {
   this.brand = brand;
}

Car.prototype = vehicle3;
Car.prototype.constructor = Car;

const mycar = new Car("peugeot");
console.log(mycar);

// const car3 = new mycar.__proto__.constructor('Tesla')
// console.log(car3);


// console.log(mycar.__proto__.constructor === Car);





function Car2(brand) {
   this.brand = brand;
}

Car2.prototype.stop = function () {
   console.log('break');
};

const mycar2 = new Car2("toyota");
console.log(mycar2);
br();



// **************** 153) Les prototypes natifs **************************

Object.prototype = {
   constructor: Object,
   hasOwnProperty: () => {
   }
};

const foo = {};
const bar = new Object();

console.log(foo);

const date = new Date();

// Object.prototype

console.log(Date.__proto__.__proto__.constructor === Object);

console.log(Date.__proto__.__proto__ === foo.__proto__);

console.log(Function.__proto__.__proto__);



// **************** 154) Utilisation des prototypes **************************


const vehicle4 = {
   hasEngine: true
};

const car3 = Object.create(vehicle4, {
   wheels: {
      value: 4,
      writable: true,
      enumerable: true,
      configurable: true
   }
});

console.log(car3);
console.log(Object.getPrototypeOf(car3));




const car4 = { wheels: 6 };

console.log(Object.getPrototypeOf(car4));

Object.setPrototypeOf(car4, vehicle4);

console.log(Object.getPrototypeOf(car4));




// **************** 155) API d'Object **************************

// En Javascript, une fonction est un object, un objet spécial car on peut l'exécuter.

function Hello() {
   //
}

Hello.foo = () => {
   console.log('foo');
};

Hello.foo();



const blob = {
   test: 10
};

console.log(Object.entries(blob));
console.log(Object.keys(blob));
console.log(Object.values(blob));

blob.toc = 2;
Object.freeze(blob); // la key bar ne sera pas rajouté sur l'objet blob avec la méthode freeze.
blob.bar = 3;
console.log(Object.isFrozen(blob));

console.log(blob);



const pop = {
   test: 20
};

// Object.preventExtensions(pop) // Empeche l'ajout de nouvelles propriétés sur l'objet.
pop.test = 30;
pop.jazz = 40;

console.log(Object.isExtensible(pop));
console.log(pop);

Object.seal(pop); // EMpeche d'ajouter ou de supprimer une key.
pop.test = 50;
pop.funk = 60;
console.log(pop);

delete pop.test;
console.log(Object.isSealed(pop));
console.log(pop);


// **************** 156) Les Maps **************************
br(); br();
//? Un Map est une collection de données clé-valeur, similaire à un objet. La principale différence réside dans le fait que Map accepte des clés de tout type..
//! Map conserve l'ordre d'insertion, contrairement à un objet standard littéral.

const myMap = new Map();

const user = { name: 'François' };
const func = () => 'Hello !';

myMap.set('key', 'value of my key');
myMap.set(user, 'hasPaid'); //? Utilisation d'objets comme clé avec l'objet Map.
myMap.set(func, 'une fonction');
myMap.set('mykey', 'other key');

console.log("myMap :", myMap); //? Affiche l'objet map.
console.log("myMap :", myMap.entries()); //? Affiche l'objet map sous forme d'un objet itérable contenant un tableau [clé, valeur] pour chaque élément du Map.
console.log("Array.from(myMap.entries()) :", Array.from(myMap.entries()));

console.log(myMap.keys());
console.log(myMap.values());
console.log(Array.from(myMap)); //? Affiche l'objet myMap en entier en le convertissant en tableau.


console.log(myMap.get('key'));
console.log(myMap.size); //4
myMap.delete('key');
console.log(myMap.size); //3
console.log(myMap.has("key")); // false

//?????? Itérations sur un map :
for (let key of myMap.keys()) {
   console.log('boucle for key :', key);
} br();
for (let value of myMap.values()) {
   console.log('boucle for value :', value);
} br();
for (let entries of myMap.entries()) {
   console.log('boucle for entries :', entries);
} br();
for (let [key, value] of myMap.entries()) {
   console.log('key', key);
   console.log('value', value);
} br();

myMap.forEach((value, key) => {
   console.log(value);
   console.log(key);
}); br();

// myMap.clear();
// console.log(myMap.size);

const user2 = { nom: "Fred" };
console.log(typeof (user2));

const map = new Map(Object.entries(user2));
console.log(map.get("nom"));
console.log(typeof (map));


// **************** 157) Les Sets **************************

//? Un Set garde l'unicité des valeurs au sein d'une collection. Sensiblement les mêmes méthodes que pour les maps. Set est particulièrement utile pour éliminer les doublons dans une collection de données.
br(); br();

const mySet = new Set([1, 3, 3]);
console.log(mySet);

mySet.add(1);
mySet.add(3);
console.log(mySet);
mySet.add(4);
console.log(mySet);

//? Objectif : Enlever les doublons d'un tableau guess en le convertissant en objet Set puis de nouveau en un objet Array à partir de cet objet Set.
let guess = ["Marie", "Maxime", "Marie", "Pierre", "Marie", "Bernard", 'Maxime', "Pierre"];
console.log(guess);
const setGuess = new Set(guess);
console.log(setGuess);
guess = Array.from(setGuess);
console.log(guess);

const permission = new Set(["read", "write", "read"]);
console.log(permission);
console.log(permission.entries());


// **************** 158) La méthode groupBy() ****************


