<!-- Pour tester la position d'un noeud avec les méthodes suivantes : -->

<!-- HTML :  -->
<h3>Test position noeuds</h3>


<!-- Javascript :  -->
const h3 = document.querySelector("h3");

h3.prepend("Je suis avant le début du contenu => ");
h3.append("  <= Je suis après le début du contenu");

h3.before("Je suis avant le noeud");
h3.after("Je suis après le noeud");