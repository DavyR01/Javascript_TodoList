const br = () => console.log('\n'); br()


// **************** 103) Les fonctions asynchrones avec async / await  **************************

const p1 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('p1 ok');
   }, 1000);
   // reject('p1 failed')
})

async function func() {
   try {
      const value = await p1;
      console.log(value);
   } catch (error) {
      console.log('catch error async :', error);
   }
}

func()
   .then(result => console.log(result))
   .catch(err => console.log('catch error :', err))



// Traitements séquentiels

const p3 = () => new Promise(resolve => setTimeout(() => resolve(30), 1500));
const p4 = () => new Promise(resolve => setTimeout(() => resolve(10), 3000));

async function sequentiel() {
   try {
      const val1 = await p3();
      console.log(val1);
      const val2 = await p4();
      console.log(val2);
   } catch (err) { }
}
sequentiel();

//! Attention : 
// Nous n'aurons absolument pas le même résultat si nous déclarons p4 comme ceci car les promesses commencent tout de suite leur exécution avant même l'exécution de la fonction séquentiel :
// const p4 = new Promise(resolve => setTimeout(() => resolve(10), 3000));



// Traitements concurrentiels

const fp1 = () => new Promise(resolve => setTimeout(() => resolve(42), 2500));
const fp2 = () => new Promise(resolve => setTimeout(() => resolve(12), 2000));

async function concurrent() {
   try {
      const p1 = fp1();
      const p2 = fp2();
      const val1 = await p1;
      console.log("fp1 :", val1);
      const val2 = await p2;
      console.log("fp2 :", val2);
      //  toggleLoader();
      //  clearTimer();
   } catch (err) { }
}
concurrent();



// Traitements parallèles

const fp3 = () => new Promise(resolve => setTimeout(() => resolve(52), 3500));
const fp4 = () => new Promise(resolve => setTimeout(() => resolve(22), 3000));

const parrallel = async () => {
   try {
      const [val1, val2] = await Promise.all([fp3(), fp4()]);
      console.log("fp3 :", val1);
      console.log("fp4 :", val2);
      //  toggleLoader();
      //  clearTimer();
   } catch (err) {
      console.log(err);
   }
}
parrallel();

// ! Possibilité d'utiliser une arrow function pour déclarer une fonction asynchrone utilisant la syntaxe async/await.