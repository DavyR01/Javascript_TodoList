

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
