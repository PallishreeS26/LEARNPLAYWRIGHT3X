
let data= "17";
//const num = parseInt(data.trim(),10);
const num = parseInt(data.trim(),10);

console.log(`Input number: ${num}`);
let isPrime = "YES";

    if (num <= 1) isPrime = "NO";
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = "NO";
        } 
    }    

 console.log(`${isPrime}`);   