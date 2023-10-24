// import "./lib"
import obj, { lib5 } from "./lib"
import { foo, libNewName1 } from "./lib" // import nommé


// **************** 72) Les modules : Exporter **************************

const lib = 'Ma constante lib dans index.js'
console.log(lib);
console.log(libNewName1);

console.log(lib5);
console.log(foo);
console.log(obj);