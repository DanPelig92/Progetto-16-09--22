const prompt = require('prompt-sync')(); /*installlare "npm install prompt-sync"*/ /*ricordati node script.js */
let numero = prompt ("Inserisci un numero: ");

let intero = parseInt(numero);

for (let i=1; i<=intero; i++){
    if (i%2==0) {console.log(i)} else {}
};