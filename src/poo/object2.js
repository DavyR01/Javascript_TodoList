
console.log('object2');

// **************** 145) Objectifs et description des propriétés d'un objet **************************

const obj = {
   key: 'value'
};

Object.defineProperty(obj, 'key', {
   writable: false, // To protect a property
   enumerable: false, // To prevent display enumeration.
   configurable: false // To prevent to modify property characteristics.
});

// Object.defineProperty(obj, 'key', {
//    writable: true
// })

obj.key = 'value2';

const descriptor = Object.getOwnPropertyDescriptor(obj, 'key');

console.log(descriptor);

for (let key in obj) {
   console.log(key);
}



// **************** 146) Les accesseurs et les mutateurs **************************

const user = {
   firstname: "roger",
   lastname: 'rabbit',
   get fullname1() {
      return this.firstname + " " + this.lastname;
   },
   fullname2: function () {
      return this.firstname + " " + this.lastname;
   },
   set fullname1(value) {
      [this.firstname, this.lastname] = value.split(" ");
   }
};

console.log(user.fullname1);
console.log(user.fullname2());

user.fullname1 = 'Freedy Mercury';
console.log(user.fullname1);



// Other way : 

const user2 = {
   firstname: "Robert",
   lastname: 'DENIRO',
};

Object.defineProperty(user2, "fullname1", {
   get: function () {
      return this.firstname + " " + this.lastname;
   },
   set() {
      [this.firstname, this.lastname] = value.split(" ");
   },
   enumerable: true,
   configurable: true
});

const descriptor2 = Object.getOwnPropertyDescriptor(user2, 'fullname1');

console.log(descriptor2);
console.log(user2.fullname1);



// **************** 147) La POO et les constructeurs **************************

// const tesla = {
//    brand: 'tesla',
//    roues: 4,
//    hasEngine: true
// };

// const renault = {
//    brand: 'renaults',
//    roues: 4,
//    hasEngine: true
// };


// function Car(brand) {
//    this.brand = brand;
//    this.roues = 4;
//    this.hasEngine = true;
// }

function Car(brand) {
   // this = {};
   this.brand = brand;
   this.roues = 4;
   this.hasEngine = true;
   this.start = () => {
      console.log('Vroum');
   };
   this.stop = function () {
      console.log('Break');
   };

   // return this // Par défautl le this est retourné, sinon on peut retourner un objet comme un objet vide. C'est cette objet vide qui sera pris en compte.
}

const tesla = new Car('tesla');
const renault = new Car("renault");

console.log(tesla);
console.log(renault);

tesla.start();
tesla.stop();