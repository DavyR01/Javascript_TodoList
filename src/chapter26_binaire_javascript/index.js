
// **************** 195) ArrayBuffer et typedArray ******************

const buffer = new ArrayBuffer(16); //? Emplacement de mémoire réservé pour le Bufffer sur 16 bytes (octet) : 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 

const typedArray = new Uint16Array(buffer);

typedArray[0] = 512;
typedArray[2] = 1024;

console.log(buffer);
console.log(typedArray);


// **************** 196) Le binaire et les chaînes de caractères ******************

//? Le textDecoder va transformer du binaire en chaine de caractères.
//? Le textEncoder va transformer une chaine de caractères en binaire.
//? Ils permettent de lire du binaire.

const buffer2 = new Uint8Array([72]);

console.log(buffer2);

const decoder = new TextDecoder();
console.log(decoder);

const result = decoder.decode(buffer2); // H
const result2 = decoder.decode(buffer2.buffer); // H

console.log(result);
const encoder = new TextEncoder();
const binary = encoder.encode(result); // 72

console.log(binary);


// **************** 197) Les Binary Large Objects (Blob) ******************

//? Les blob permettent de stocker des données en binaire. Interface bas niveau. C'est du binaire avec un type qui va être utile au navigateur pour savoir comment l'interpréter.

const blob = new Blob([buffer2, 'ello'], {
   type: 'text/plain'
});

console.log(blob);

const a = document.createElement('a');
a.download = 'myDownloadFile.txt';
a.href = URL.createObjectURL(blob);
// a.click(); //? Télécharge le fichier myDownloadFile.txt
URL.revokeObjectURL(a.href);



const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.fillRect(0, 0, 100, 200);

canvas.toBlob((blob) => {
   const a = document.createElement('a');
   a.download = 'hello.png';
   a.href = URL.createObjectURL(blob);
   // a.click();
   URL.revokeObjectURL(a.href);
}, 'image/png');


// **************** 198) Les Files et l'API FileReader ******************

const file = new File([new Uint8Array([72]), new Blob(['ello'])], 'myfile.txt',
   {
      type: 'plain/text'
   }
);
console.log("file :", file);


const a2 = document.createElement('a');
a2.download = file.name;
a2.href = URL.createObjectURL(file);
// a2.click();
URL.revokeObjectURL(a2.href);



const input = document.querySelector('input');
const img = document.querySelector('img');
const reader = new FileReader();

input.addEventListener('change', e => {
   console.log(e);
   console.log(input);
   reader.readAsDataURL(input.files[0]);
   reader.onload = () => {
      const image = reader.result;
      console.log(image);
      img.src = image;
   };
});


console.log(reader);
