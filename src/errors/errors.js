

// **************** 160) Introduction à la gestion d'erreur **************************


const rightjson = `{"test":1}`;

const parsedJSON = JSON.parse(rightjson);
console.log(parsedJSON);

try {
   getData();
} catch (error) {
   console.error('error fetch data :', error);
} finally {
   console.log('in finally');
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
   console.log('click');
});

console.log('Bonjour');






const wrongjson2 = `{test:1}`;

try {
   const wrongjson = `{'test':1}`;
   JSON.parse(wrongjson);
} catch (error) {
   console.error('error on JSON :', error);
}





try {
   setTimeout(() => {
      try {
         console.log(data);
      } catch (error) {
         console.error(error);
      }
   }, 1000);
} catch (error) {
   console.error(error);
}




window.addEventListener('error', e => {
   console.log(e);
});

// getData()



function getTransaction() {
   const data = {
      name: 'euro'
   };

   if (!data.amount) {
      const e = new Error('need amount');
      throw e;
   }
}

try {
   getTransaction();
} catch (error) {
   console.log('name :', error.name);
   console.log('message :', error.message);
   console.log('stack :', error.stack);
   console.log('error on transaction : ', error);
}



// On injecte une erreur volontairement. Comme il s'agit d'une ReferenceError, l'erreur n'est pas simplement affichée mais elle est rethrow

// const data = '{ "prenom": "Jean" }';
// try {
//   const utilisateu = JSON.parse(data);

//   if (!utilisateur.age) {
//     throw new SyntaxError("Il manque le paramètre âge !");
//   }
// } catch(e) {
//   if (e instanceof SyntaxError) {
//     console.log(e.message); // Il manque le paramètre âge !
//   } else {
//     throw e;
//   }
// }




