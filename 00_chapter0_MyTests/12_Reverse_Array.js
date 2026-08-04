
let data = "5 11 4 18 9 5";
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

console.log(n);
console.log(tokens);
console.log(arr);   

// Write your solution here
let arr1 = arr.reverse();
//arr1.push(n);

console.log(arr1.join(" "));