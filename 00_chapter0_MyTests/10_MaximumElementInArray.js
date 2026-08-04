

//let array = [3, 5, 19, 2, 8, 1];
//let maxElement = array[0];  

// for (let i = 1; i < array.length; i++) {
//     if (array[i] > maxElement) {
//         maxElement = array[i];
//     }   
// }
//console.log(maxElement);


//-------------------------------------------------
// Alternate way to find the maximum element in an array

let data = "5 11 4 18 9 5";
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

let maxElement = arr[0] ;  

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
        maxElement = arr[i];
    }   
}
console.log(`${maxElement}`);
