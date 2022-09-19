const prompt = require('prompt-sync')(); /*installlare "npm install prompt-sync"*/ /*ricordati node script.js */
let numero = prompt ("Inserisci un numero: ");

let intero = parseInt(numero);

let somma = 0;

for (let i=0; i<=intero; i++){
    if (i%3==0) {somma = somma + i} else {}
};
console.log(somma);