//1. You are given an integer n. You need to return the number of digits in the number.
// let count = 0;
// let n=Number(prompt("Enter a number"));
// if(n===0) console.log('no_of_digits',1);;
// n=Math.abs(n)
// while(n>0){
//     count++;
//     n=Math.floor(n/10);
// }
// console.log('no_of_digits',count);


//2. Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
let n=Number(prompt("Enter a number"));
let isNegative = n<0;
n = Math.abs(n);
let reverse = Number(String(n).split('').reverse().join(''));
if(reverse > Math.pow(2,31)-1) console.log(0);
else reverse = isNegative ? -reverse : reverse;
console.log('reverse',reverse);

