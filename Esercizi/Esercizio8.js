const prompt = require('prompt-sync')(); /*installlare "npm install prompt-sync"*/ /*ricordati node script.js */

let k = parseInt(prompt(""));
let corr;
let check;
let count = 0;

while(2 <= k){
    corr = k - 1;
    check = true;
    while(1 < corr){
        if(k % corr == 0){
            check = false;
            break;
        }
        corr--;
    }

    if(check == true){
        count++;
        console.log(k + " è un numero primo " + count);
    }
    
    k--;
}