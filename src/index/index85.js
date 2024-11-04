import '../style/style.css';

const p = document.querySelector(".text-primary");

console.log(p);

// p.parentElement.removeChild(p);
// p.remove(); // Idem mais Recommandé !!

const span = document.createElement('span');
span.innerHTML = '<h1>Salut !!!</h1>';

// p.parentElement.replaceChild(span, p)
p.replaceWith(span); // Idem mais Recommandé !