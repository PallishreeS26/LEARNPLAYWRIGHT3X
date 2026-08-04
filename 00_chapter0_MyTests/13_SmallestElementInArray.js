
let data = "5 0 4 18 9 1";
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

let minElement = arr[0] ;  

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minElement) {
        minElement = arr[i];
    }   
}
console.log(`${minElement}`);