

// **************** 153) Les accesseurs et les mutateurs **************************

// Notation avec une fonction constructor
function Bar(name) {
   this.name = name
}

Bar.prototype.hello = function () {
   console.log('hello');
}

Bar.prototype.hi = function () {
   console.log('hi');
}

const bar = new Bar('bar')
console.log(bar);

for (let prop in bar) {
   console.log(prop);
} // Les méthodes de la fonction constructeur sont parcourues.L'attribut enumerable est défini à true par défaut.








// Notation avec une class
class Foo {
   maProp = 123; // Impossible de déclarer une propriété dans une classe, il faudra le déclarer via le constructor avec le this.

   constructor(name, surname) {
      this.name = name
      this.maProp = 456
      this.surname = surname
   }

   get doubleName() {
      // return this.name + this.name
      return `${this.name} ${this.name}`
   }

   set changeName(newName) {
      this.name = newName
   }
   hola() {
      console.log('hola !');
   }
   buenos() {
      console.log('buenos dias !');
   }
}

// const Foo = class {}; // Expression de class en stockant la class dans une variable.


const foo = new Foo('foo')
console.log(foo);

// foo.hola();
// foo.buenos();

for (let prop in foo) {
   console.log(prop);
}  // Les méthodes de la class constructeur (hola et buenos) ne sont pas parcourues.L'attribut enumerable est défini à false.


console.log(foo.doubleName);
foo.changeName = "foo2" // On ne l'invoque pas comme une fonction, c'est un setter donc cela reste une propriété. Donc on n'écrira pas foo.changeName("Jean").
console.log(foo.doubleName);
console.log(foo.maProp)





// **************** 154) L'héritage avec les classes **************************

// ! façon OLD SCHOOL : 

function Vehicle() {
   this.hasEngine = true
}

Vehicle.prototype.stop = function () {
   console.log('engine stop');
}

function Car() {
   Vehicle.call(this);
   this.wheels = 4
}

Car.prototype = Object.create(Vehicle.prototype) // Permet de créer un nouvel objet et de définir le prototype de cet objet comme étant = à l'objet en paramètre donc Vehicle.prototype. Bien le positionner juste avant que l'on ajoute la fonction start sur le prototype sinon cela écrase la fonction start.
Car.prototype.constructor = Car

Car.prototype.start = function () {
   console.log('car start');
}


const car = new Car();

console.log(car);
console.log(car.hasEngine);






// ! façon NEW AGE : 


class Vehicle2 {
   constructor() {
      this.hasEngine = true;
   }
   stop() {
      console.log('engine stop');
   }
   start() {
      console.log('engine start');
   }
}

class Car2 extends Vehicle2 {
   constructor() {
      super() // Le keyword super fait toujours référence à la classe que l'on a extend soit Vehicle2. On va exécuter également son constructor. Le this fera donc référence au même objet que dans le constructeur de la class Car2.
      this.wheels = 4
   }
   start() {
      super.start() // Si je souhaite, je peux invoque la fonction start de la class parente.
      // console.log('car start');
   }
}

const car2 = new Car2;
console.log(car2);
car2.start()







// Autre exemple : 

class Voiture {

   constructor(sieges) {
      this.sieges = sieges;
   }

   rouler() {
      return 'Je roule.';
   }
}

class Sportive extends Voiture {

   constructor(sieges, chevaux) {
      super(sieges);
      this.chevaux = chevaux;
   }

   faireLaCourse() {
      console.log(`${super.rouler()} Et je fais la course.`);
   }

}
const monBolide = new Sportive(4, 960);

console.log(monBolide);// {sieges: 4, chevaux: 960}
monBolide.faireLaCourse(); // Je roule. Et je fais la course.
console.log(monBolide.sieges);



// **************** 155) Les méthodes statiques **************************

// Les fonctions statiques ont plus de sens d'être positionnées, associées sur la classe elle-même plutôt que sur une instance de la classe. Nous y accédons donc depuis la classe et non les instances.

// Avec une fonction constructeur considéré comme un objet : 

function Truck() { }

Truck.description = function () {
   console.log('Sert à construire un camion');
};

Truck.description();

const truck = new Truck();
console.log(truck);

// truck.description() // La fonction n'existe pas car on ne récupère pas la proriété sur l'instance. N'a pas vocation à être présent sur toutes les instances de la class Truck.




// Avec une classe : 

class MotorBike {
   constructor() { }
   static description() {
      console.log('je décris ma moto !');
   }
   static compareCar(car1, car2) { }
}

MotorBike.description()

const motorbike = new MotorBike();

MotorBike.compareCar(/** */)

// motorbike.description(); // erreur car on tente d'accéder à une méthofe static à partir d'une instance de class.






class Vehicle3 {
   constructor() { }
   static description() {
      console.log('je décris mon véhicule ! ');
   }
}


class Bike extends Vehicle3 {
   static compareCar(car1, car2) { }
}

Bike.description();

console.log(Bike.__proto__ === Vehicle3);

const bike = new Bike();

console.log(bike.__proto__ === Bike.prototype);

console.log(bike.__proto__.__proto__ === Vehicle3.prototype);




// **************** 156) Les propriétés privées **************************

class Plane {
   constructor() {
      this.key = false;
      this._gas = 80;
   }

   set gas(value) {
      if (value > 0) {
         this._gas = value;
      }
   }

   get gas() {
      return this._gas
   }

   putKey() {
      this.key = true;
   }

   start() {
      console.log('the plane start');
      if (this.key) {
         this.#startEngine()
      } else {
         console.log('should have keys');
      }
   }

   #startEngine() {
      console.log('the plane engine start');
   }

}

const plane = new Plane();

plane.putKey()
plane.start()
// plane.startEngine()

plane.gas = 40
plane.gas = -20;

console.log(plane);
console.log(plane.gas);



// **************** 157) Etendre les objets natifs avec extends **************************


class ExtendedArray extends Array {
   random() {
      const length = this.length;
      let i = 0;
      while (i < length) {
         this[i] = Math.round(Math.random() * 10)
         i++;
      }
   }
}

console.log(new Array(1, 2, 3));

const arr = new ExtendedArray(1, 2, 3)

arr.random()
console.log(arr);

// Array.prototype.random = function(){} // Pas la meilleur pratique