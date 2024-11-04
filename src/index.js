import './app/app.js';
// import './style/style.css'
// import './dom/dom.js'

const br = () => console.log('\n');

// **************** 73) Les modules : Importer **************************

import "./lib.js"; //Permet d'exécuter le module lib mais on a besoin de récupérer aucun module.
import * as all from "./lib.js"; // Permet de tout exporter le module d'un seul coup 

import exportDefault from './lib.js'; // Pour les exports par défaut, on n'utilise pas d'accolades.
import objDefault from "./lib.js"; // Lorsque export par défault, pas d'import nommé.

import { foo, libNewName1, lib2 as libNewName2, lib5 } from "./lib.js"; // imports nommés en un seul objet

const lib = 'Ma constante lib dans index.js';
const lib2 = 'Ma constante lib2 dans index.js';

console.log(lib);
console.log(libNewName1);br();
console.log(lib2);
console.log(libNewName2); br();

console.log(lib5);
console.log(foo);

console.log(all.foo); 
all.hello();

exportDefault();
// console.log(objDefault);