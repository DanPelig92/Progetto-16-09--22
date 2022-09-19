const prompt = require('prompt-sync')(); /*installlare "npm install prompt-sync"*/ /*ricordati node script.js */
let numero = prompt ("Inserisci un numero: ");
let intero = parseInt(numero)
let somma = intero+1
console.log ("La somma richiesta è: " + somma);