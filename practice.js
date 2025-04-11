// alert('i am reachable');

// console.log("hello + how do u do");

// let firstName = "John";
// let lastName = "Doe";
// let fullName = `${firstName}.${lastName}`; //templateliteral
// console.log(fullName);

let x = 5;
let y = x++; // y = 5, x = 6

let a = 5;
let b = ++a; // a = 6, b = 6

// Post-increment is commonly used in loops:
const A =(Math.PI * 5).toFixed(3);
const B = Number(A)
console.log(typeof(B));

let num = 10.346;

num.toFixed(0);  // "10" (rounds to nearest integer)
num.toFixed(1);  // "10.3" (rounds to 1 decimal place)
num.toFixed(2);  // "10.35" (rounds to 2 decimal places - notice the rounding up)
num.toFixed(4);  // "10.3460" (adds zeroes if needed to match specified decimal places)

let num2 = 0.5;
num2.toFixed(0);  // "1" (rounds up since it's 0.5)

let num3 = 0.49;
num3.toFixed(0);  // "0" (rounds down)



for(let i=0;i<10;i++){
    let age = (prompt("Enter your age"));
    if(age === null){
        break;
    }
}

