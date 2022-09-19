const prompt = require('prompt-sync')(); /*installlare "npm install prompt-sync"*/ /*ricordati node script.js */
let input1= prompt ("Scrivi un numero: ");
let numero1 = parseInt(input1);
let input2= prompt ("Scrivi un altro numero: ");
let numero2 = parseInt(input2);
let operatore = prompt ("Scrivi l'operatore desiderato (+ - * /)");
if (operatore == "+") {
    let operazione = numero1 + numero2; console.log(operazione);
} else {};

if (operatore == "-") {
    let operazione = numero1 - numero2; console.log(operazione);
} else {};

if (operatore == "*") {
    let operazione = numero1 * numero2; console.log(operazione);
} else {};

if (operatore == "/") {
    let operazione = numero1 / numero2; console.log(operazione);
} else {};
