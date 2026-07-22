
const data = require('fs').readFileSync(0, 'utf8');
// Write your solution here
 let sides = data.trim().split(" ");
 let side1 = sides[0];
 let side2 = sides[1];
 let side3 = sides[2];

 //let side1 = 5;
 //let side2 = 6;
 //let side3 = 5;

 //console.log(side1, side2, side3);

if (side1 !== 0 && side1 !== null && side2 !== 0 && side2 !== null && side3 !== 0 && side3 !== null) {
    if(side1 === side2 && side2 === side3){ 
        console.log("Equilateral");
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        console.log("Isosceles"); 
    } else {
        console.log("Scalene"); 
    }    
}