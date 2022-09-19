const prompt = require('prompt-sync')(); /*installlare "npm install prompt-sync"*/ /*ricordati node script.js */
let utente = prompt ("Crea il tuo nome utente: ");
let password = prompt ("Crea la tua password: ");
console.log("Per effettuare il login, fornisci nome utente e password: ");
let InsUtente = prompt ("Inserisci il nome utente: ");
let InsPassword = prompt ("Inserisci la tua password: ");

if (InsUtente == utente && InsPassword == password) {console.log("Login effettuato con successo!")}
else {
    if (InsUtente != utente) {console.log("Nome utente sbagliato, inserire nuovamente i dati.")}
    else {}
    if (InsPassword != password) {console.log("Password sbagliata, inserire nuovamente i dati.")}
    else {}};
