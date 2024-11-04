
// **************** 72) Les modules : Exporter **************************

console.log('LIB');

const objDefault = {name: "object"};

const lib = 'Ma constante lib dans lib.js';
const lib2 = 'Ma constante lib2';
const lib3 = 'Ma constante lib3';
const lib4 = 'Ma constante lib4';

const h = {
   foo: 'bar'
};

const z = 'world !';
export function hello() {
   console.log('Hello', z);
}


export { lib as libNewName1, lib2, lib3, lib4, objDefault }; 
// Possibilité d'exporter plusieurs identifiants dans un seul objet. Possibilité de mettre un alias, de renommer les identifiants pour exporter un élément qui a le même nom par exemple dans l'autre fichier où l'on veut l'exporter. (lib dans index.js par exemple)

export const lib5 = 'Ma constante lib5 importé depuis lib.js';
export const lib6 = 'Ma constante lib6';

export const { foo } = h; // export nommé


// On ne peut exporter qu'un seul élement par défaut par fichier. Ici obj ou function : 

export default function exportDefault() {console.log('export par défaut');}
// export {objDefault as default}