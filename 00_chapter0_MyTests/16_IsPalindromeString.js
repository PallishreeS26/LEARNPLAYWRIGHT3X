
let str = "MadamPalli";

let palindrome = "NO";

let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

if (cleanedStr === cleanedStr.split('').reverse().join('')) {
    palindrome = "YES";
}

console.log(`${palindrome}`);
