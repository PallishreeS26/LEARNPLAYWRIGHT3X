
let str = "hello";

//let reversedStr = str.split('').reverse().join('');

let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log(reversedStr);
