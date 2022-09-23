const prompt = require('prompt-sync')(); /*installlare "npm install prompt-sync"*/ /*ricordati node script.js */
console.clear()
let lettereIndovinate = "";
console.log("Player 1: Scegli una parola da fare indovinare\nLa prima lettera deve essere maiuscola.\n\n");
let parola = prompt(" ---> ");
console.clear()
let countIndovinate = 0;

parolaImpiccato = parola.split('');
let letteraPlayer;
let parolaDaIndovinare = [];

for(let i = 0; i < parolaImpiccato.length; i++){
    parolaDaIndovinare[i] = " _ ";
}

let count = parolaImpiccato.length;
let life = 3;

//Questo for è per stampare l'array senza le virgole
for(const x of parolaDaIndovinare){
    lettereIndovinate += x + " ";
}

console.log("Hai 3 vite e la parola ha questa lunghezza:\n")
console.log(" ---> " + lettereIndovinate + "\n\n");

while(count > 0){
    console.log("Player 2: Indovina una lettera:\n");
    letteraPlayer = prompt(" ---> ");
    console.clear();
    let i = parolaImpiccato.indexOf(letteraPlayer);
    lettereIndovinate = "";
    for(let i = 0; i < parolaDaIndovinare.length; i++){
        if(parolaImpiccato[i] == letteraPlayer)
            countIndovinate++;
    }
    while(countIndovinate > 0){
        parolaDaIndovinare[i] = parolaImpiccato[i];
        parolaImpiccato[i] = '$';
        countIndovinate--;
        count--;    
        if(countIndovinate > 0){
            i = parolaImpiccato.indexOf(letteraPlayer);
        }
    }
    
    if(i == -1){
        life--;
    }
    
    for(const x of parolaDaIndovinare){
        lettereIndovinate += x + " ";
    }

    console.log("\n\n ---> " + lettereIndovinate + "\n");

    if(life == 0){
        console.log("Player 2 muore\n\n");
        break;
    }

    console.log("Hai " + life + " vite rimanenti.\n");
}

if(life > 0)
    console.log("Player 2 sopravvive\n\n")