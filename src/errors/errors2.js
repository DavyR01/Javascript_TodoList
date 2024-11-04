
// **************** 161) Etendre l'objet Error **************************

class ValidationError extends Error {
   constructor(message) {
      super(message);
      this.name = this.constructor.name;
      this.message = message;
   }
}

function getTransaction() {
   const data = {
      name: 'euro',
      amount: 123
   };

   if (!data.amount) {
      const e = new ValidationError('need amount');
      throw e;
   }

   throw new Error('Unexpecteeeeed errooor');
}

function initApp() {
   try {
      getTransaction();
   } catch (e) {
      if (e.name === 'ValidationError') {
         console.log('you should retry');
      } else {
         throw e; // Si l'on rencontrer une erreur intattendue, que l'on ne connait pas, on utilise un throw de l'erreur, on la réexpédie. On ne va pas gérer ces erreurs. On va va l'étendre en espérant qu'un autre try catch intercepte l'erreur quelque part.
      }
   }
}

try {
   initApp();
} catch (e) {
   console.log(e); // On effectue ici une chaine de gestion d'erreurs au cas où une erreur au préalable n'ait pas été traité.
}






// On crée une classe personnalisée et on n'a pas besoin de réassigner this.name dans toutes les classes d'erreurs.

class ValidationAmountError extends ValidationError {
   constructor(message) {
      super(message);
      this.message = message;
   }
}


function getTransaction2() {
   const data = {
      name: 'euro',
   };

   if (!data.amount) {
      const e = new ValidationError('need amount');
      throw e;
   }

   throw new Error('Unexpected error 2');
}

function initApp2() {
   try {
      getTransaction2();
   } catch (e) {
      if (e instanceof ValidationError) {
         console.log('you should retry');
      } else {
         throw e; 
      }
   }
}

try {
   initApp2();
} catch (e) {
   console.log(e);
}
