
// **************** 199) Introduction au drag and drop ******************

import "@/chapter27_drag&drop/style.css";
// import "src/chapter27_drag&drop/style.css";
// import "./style.css";


// **************** 200) API HTML5 : la gestion du glisser ******************

const rigthList = document.querySelector('.list-right');
const leftList = document.querySelector('.list-left');

document.addEventListener('dragstart', (e) => {
   console.log('dragStart :', e);
   // draggable = e.target; //? Stocke l'élément faisant l'objet du drag and drop.
   console.log(e.target);
   e.dataTransfer.setData('id', e.target.id);
   
   e.target.classList.add('drag');
   setTimeout(() => {
      e.target.classList.remove('drag');
   }); //? Souvent utilisé pour différer l'exécution d'un code jusqu'à la fin du cycle d'événements actuel, permettant au navigateur de terminer d'autres opérations (comme le rendu) avant d'exécuter la fonction.
});

document.addEventListener('drag', (e) => {
   // console.log('drag :', e);
});

document.addEventListener('dragend', (e) => {
   console.log('dragEnd :', e);
});


// **************** 201) API HTML5 : la gestion du déposer ******************

//? Définir l'élément en train d'être déplacé en pointant sur une référence de l'élément avec l'event.target et le déplacer sur un autre noeud parent avec la méthode appendChild qui ajoute une node dans le noeud ciblé.

rigthList.addEventListener('dragenter', e => {
   e.target.classList.add('drop');
   console.log('dragenter :', e);
});

rigthList.ondragenter = (e) => {
   console.log('dragenter with a proprerty onevent : ',e);
}; //? Il est préférable d'utiliser un addEventListener() plutôt que les propriétés (onEvent) d'un élément pour écouter des événements tu DOM car on peut en déclarer plusieurs et il y a un risque d'écraser un autre écouteur si on en déclare un autre quelque part.

rigthList.addEventListener('dragleave', e => {
   e.target.classList.remove('drop');
   console.log('dragleave :', e);
});

rigthList.addEventListener('dragover', e => {
   e.preventDefault(); //? Par défaut, le drop est désactivé sur tous les éléments du DOM, d'où l'intérêt d'ajouter ce code.
   // console.log('dragover :', e);
});

rigthList.addEventListener('drop', e => {

   const id = e.dataTransfer.getData('id');
   const li = document.getElementById(id);
   e.target.appendChild(li);
   console.log('drop :', e);
});


// leftList.addEventListener('dragover', e => {
//    e.preventDefault();
//    // console.log('dragover :', e);
// });

// leftList.addEventListener('drop', e => {
//    e.target.appendChild(draggable);
//    console.log('drop :', e);
// });


// **************** 202) L'objet DataTransfer ******************

