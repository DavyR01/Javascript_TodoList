
console.log('object2');

// **************** 145) Objectifs et description des propriétés d'un objet **************************

const obj = {
   key: 'value'
};

Object.defineProperty(obj, 'key', {
   writable: false, // To protect a property
   enumerable: false, // To prevent display enumeration.
   configurable: false // To prevent to modify property characteristics.
})

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
      [this.firstname, this.lastname] = value.split(" ")
   }
}

console.log(user.fullname1);
console.log(user.fullname2());

user.fullname1 = 'Freedy Mercury';
console.log(user.fullname1);



// Other way : 

const user2 = {
   firstname: "Robert",
   lastname: 'DENIRO',
}

Object.defineProperty(user2, "fullname1", {
   get: function() {
      return this.firstname + " " + this.lastname;
   },
   set() {
      [this.firstname, this.lastname] = value.split(" ")
   },
   enumerable: true,
   configurable: true
})

const descriptor2 = Object.getOwnPropertyDescriptor(user2, 'fullname1')

console.log(descriptor2);
console.log(user2.fullname1);