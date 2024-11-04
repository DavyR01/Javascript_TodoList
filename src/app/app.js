// **************** 74) Réexporter et les imports dynamiques **************************


import {login, logout} from './features/authentification/index.js'; 
// On a agrégé les modules. Si on enlève le index.js, par défaut, le système d'import de module va aller chercher le fichier index.js.

const auth = import ('./features/authentification/'); // Import dynamique 


console.log('app');

login();
logout();


console.log(auth); // opération asynchrone car le fichier ne va pas être instantanément disponible.


auth.then(m => {
   console.log(m);

   m.login();
   m.logout();
});
// Le then signifie que la promesse généré par le contenu avant le then (auth) est résolue.
// Dans le then, j'ai accès à toutes les méthodes que j'ai importé via mon import dynamique.
// 