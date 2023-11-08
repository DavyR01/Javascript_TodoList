
// **************** 148) Introduction aux prototypes **************************

// => Pour la lecture : 

const engine = {
   power: 240
}

const vehicle = {
   hasEngine: true,
   start() {
      console.log('Vroum !');
   }
}

const car = {
   brand: "renault"
}

const bus = {
   seats: 80
}

car.__proto__ = vehicle; // On remonte la chaine des prototypes avec la key proto propre à un objet.
vehicle.__proto__ = engine;
engine.__proto__ = bus;

console.log(car);
console.log(car.hasEngine);

car.start() // La méthode start n'a pas été trouvé dans l'objet car, donc on remonte la chaine de prototype pour chercher la méthode start.

console.log(vehicle.power); // 240
console.log(car.power); // 240

// On peut de cette manière réaliser une chaine de prototype sur plusieurs niveaux.

console.log(bus);
console.log(vehicle.seats);

console.log(car.__proto__);
console.log(car.__proto__.__proto__);
console.log(car.__proto__.__proto__.__proto__);








// => Pour l'écriture : 

const vehicle2 = {
   hasEngine: true,
   start() {
      console.log(this.hasEngine);
      console.log('Go ahead !');
   }
}

const car2 = {
   brand: "Ford"
}

car2.__proto__ = vehicle2;

car2.hasEngine = false;

console.log(car2);
console.log(car2.hasEngine);
car2.start()


for (let key in car2) {
   console.log(car2.hasOwnProperty(key))
   console.log('key', key);
}




// **************** 149) Le pattern constructeur et la propriété prototype **************************


const vehicle3 = {
   hasEngine: true,
   start() {
      console.log('Go ahead !');
   }
}

function Car(brand) {
   this.brand = brand;
}

Car.prototype = vehicle3;
Car.prototype.constructor = Car;

const mycar = new Car("peugeot")
console.log(mycar);

// const car3 = new mycar.__proto__.constructor('Tesla')
// console.log(car3);


// console.log(mycar.__proto__.constructor === Car);