

/*
let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);

// Optional: Wrap in a Set to remove duplicate-duplicates
let uniqueDuplicates = [...new Set(duplicates)];

console.log(uniqueDuplicates.join(" ")); // Output: 2, 4, 5
*/
let arr = [1, 2, 3, 2,4,1];


let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
// console.log(duplicates); 
for (let i = 0; i < duplicates.length; i++) {
    console.log(duplicates[i]);
}
