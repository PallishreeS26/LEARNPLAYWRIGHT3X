
let data = "5 11 4 18 9 5";
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);


// Write your solution here
let arr1 = arr.sort((a, b) => a - b);
console.log(arr1.join(" "));