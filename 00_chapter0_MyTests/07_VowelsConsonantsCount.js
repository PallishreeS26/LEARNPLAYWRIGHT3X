//const data = require('fs').readFileSync(0, 'utf8');

let data = "Hello World";
const str = data.split('\n')[0].toLowerCase();
// Write your solution here

let Vowels = 0;
let Consonants = 0;
const vowels = "aeiou";

for (i = 0; i < str.length; i++){

    if (vowels.includes(str[i])) {        
        Vowels++;    
    } else if (str[i] >= 'a' && str[i] <= 'z') {
        Consonants++;
    }else{
        // do nothing
    }
}

console.log(`Vowels: ${Vowels}`);
console.log(`Consonants: ${Consonants}`);

//console.log("Vowels: " + Vowels + " " + "Consonants: " + Consonants);
    

