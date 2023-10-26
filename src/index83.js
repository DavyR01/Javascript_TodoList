// import './style/style.css'


/* app.innerHTML = `
<section class="container">
   <h1 id="title">Mon Application</h1>
   <p class="text-primary">
      Je suis un paragraphe
      <a href="https://dyma.fr/developer/list/chapters/core/5dfbc811c7b96a25633bce2c/lesson/javascript/5e091eb35ab87663d8d2d211/11/9">Dyma</a>
   </p>
   <p>
      <a id="id-test2">Dyma cours 83: Créer des nœuds
      </a>
   </p>
</section>
`; */


const app = document.querySelector('#app');

const section = document.createElement("section");


const image = document.createElement("img");
const imageSrc = document.createAttribute("src");
imageSrc.value = 'https://miro.medium.com/v2/resize:fit:640/1*kCD_6R3UkMHkpS_YgFoU9w.jpeg'


const paragraphe = document.createElement("p");
const paragrapheClass = document.createAttribute("class");
paragrapheClass.value = 'text-primary'
const paragrapheText = document.createTextNode("Je suis un paragraphe");


const a = document.createElement("a");
const aHref = document.createAttribute("href");
aHref.value = 'https://dyma.fr/developer/list/chapters/core/5dfbc811c7b96a25633bce2c/lesson/javascript/5e091eb35ab87663d8d2d211/11/9'
const aText = document.createTextNode("Dyma cours 83: Créer des nœuds");


const comment = document.createComment('je suis un com')

