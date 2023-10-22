/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/***/ (function() {

console.log(this); // objet vide

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ "./src/test.js");
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_test__WEBPACK_IMPORTED_MODULE_0__);
 // Sans l'import d'un autre fichier, le mode strict de webPack n'est pas pris en compte. (chapitre 53: this)

var br = function br() {
  return console.log('\n');
};

// **************** 46) Les expressions de fonction et leur déclaration **************************

// déclaration
function func() {
  console.log('func exec');
}
func();

// expression : On assigne une fonction à une variable
// => Fonction nommée :
var fn = function func2() {
  console.log('func2 exec');
};

// => Fonction anonyme : 
var fn2 = function fn2() {
  console.log('func2 exec');
};
console.log(fn.name); // Sur les objets fonction, on a une propriété name.
console.log(fn2.name); // Sur un fonction anonyme, le name prend la valeur du nom de la variable.
fn();
br();

// Vous pouvez cependant également déclarer un nom pour utiliser la récursivité. La récursivité est le fait d'invoquer la fonction dans la fonction, afin de l'exécuter jusqu'à ce qu'une condition soit remplie :
var factorielle = function f(n) {
  return n < 2 ? 1 : n * f(n - 1);
};
// La fonction s'invoquera elle-même jusqu'à ce que n soit inférieur à 2.

// **************** 47) Paramètres, arguments et paramètres par défaut **************************

function func2() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default2";
  // param = param || 'default1';
  if (param) {
    console.log(param.toUpperCase());
  }
}
func2('parametre');
func2();
br();

// **************** 48) Objet arguments et utilisation de l'opérateur Rest (...) **************************

// Avec l'objet argument : Il contient tous les arguments passés à la fonction (Old school et déprécié)
function add() {
  console.log( /* arguments */);
  // console.log(arguments[0]);
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log(total);
}

// Avec l'opérateur REST...
function add2() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  console.log(numbers);
  var total = 0;
  numbers.forEach(function (el) {
    total += el;
  });
  console.log(total);
}
function add3(operator) {
  var total = 0;
  if (operator === "+") {
    for (var _len2 = arguments.length, numbers = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      numbers[_key2 - 1] = arguments[_key2];
    }
    numbers.forEach(function (el) {
      total += el;
    });
    console.log(total);
  } else console.log('we must add numbers');
}
add(1, 2, 3, 4, 5, 6, 7, 8);
br();
add2(1, 2, 3, 4);
br();
add3("+", 1, 3, 5, 7, 9, 11, 13, 15);
add3("*", 1, 3, 5, 7, 9, 11, 13, 15);

// **************** 49) Valeur de retour des fonctions **************************

function operation() {
  var total = 0;
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  numbers.forEach(function (el) {
    total += el;
  });
  return total;
}
var total = operation(3, 6, 9, 12, 15);
console.log(total);
br();

// **************** 50) Environnement lexical et contexte d’exécution **************************

// **************** 51) La chaine de portée **************************

function a() {
  console.log(foo); // 2
}

function b() {
  var foo = 1;
  a();
}
var foo = 2;
b();

// *********

function c() {
  function d() {
    console.log(foo2); // 1
  }

  var foo2 = 1;
  d();
}
var foo2 = 2;
c();

// **************** 52) Namespace et IIFE **************************

// **************** 53) Le mot-clé this **************************

function func3() {
  console.log(this); // this fait référence à undefined en mode strict, donc lorsque l'on importe un fichier par exemple (haut de page). 
}

func3();

// **************** 54)  **************************
// **************** 55)  **************************
// **************** 56)  **************************
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map