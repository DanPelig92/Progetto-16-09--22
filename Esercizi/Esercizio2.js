const prompt = require('prompt-sync')(); /*installlare "npm install prompt-sync"*/ /*ricordati node script.js */
let nome = prompt ("Inserisci il tuo nome: ");
let età = prompt ("Inserisci la tua età (in valori numerici): ");
let cabina = (Math.floor(Math.random()*50)+1);
console.log(nome + " " + età);
if (età<18) {console.log("Sei troppo giovane per votare.")
} else {console.log("Raggiungere la cabina " + cabina)};
