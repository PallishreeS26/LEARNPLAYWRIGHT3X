

 let str= "Hello World"; 

let vowels = 0;
let consonants = 0;

for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            vowels++; break;
        default: {
            if (str[i] >= 'a' && str[i] <= 'z') {
                consonants++;
            }
        }
    }
}

console.log(`Vowels: ${vowels}`);
console.log(`Consonants: ${consonants}`); 