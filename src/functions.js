const br = () => console.log('\n');

// **************** 46) Les expressions de fonction et leur déclaration **************************

// déclaration
function func() {
   console.log('func exec');
}

func();

// expression : On assigne une fonction à une variable
   // => Fonction nommée :
const fn = function func2() {
   console.log('func2 exec');
}

   // => Fonction anonyme : 
const fn2 = function () {
   console.log('func2 exec');
}

console.log(fn.name); // Sur les objets fonction, on a une propriété name.
console.log(fn2.name); // Sur un fonction anonyme, le name prend la valeur du nom de la variable.
fn();

// Vous pouvez cependant également déclarer un nom pour utiliser la récursivité. La récursivité est le fait d'invoquer la fonction dans la fonction, afin de l'exécuter jusqu'à ce qu'une condition soit remplie :
const factorielle = function f(n) { return n < 2 ? 1 : n * f(n - 1) };
// La fonction s'invoquera elle-même jusqu'à ce que n soit inférieur à 2.


// **************** 47) Paramètres, arguments et paramètres par défaut **************************

function func2 (param = "default2") {
   // param = param || 'default1';
   if(param) {
      console.log(param.toUpperCase());
   }
}

func2('parametre')
func2()


// **************** 48)  **************************



// **************** 49)  **************************




// **************** 50)  **************************
// **************** 51)  **************************
// **************** 52)  **************************
// **************** 53)  **************************
// **************** 54)  **************************
// **************** 55)  **************************
// **************** 56)  **************************

