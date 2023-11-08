
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
