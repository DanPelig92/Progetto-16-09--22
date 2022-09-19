const prompt = require('prompt-sync')();
let numero = prompt ("Inserisci un numero: ");
for (let i = parseInt(numero); i%3==0; i++){console.log(i)};