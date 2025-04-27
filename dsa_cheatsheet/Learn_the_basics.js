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
// let n=Number(prompt("Enter a number"));
// let isNegative = n<0;
// n = Math.abs(n);
// let reverse = Number(String(n).split('').reverse().join(''));
// if(reverse > Math.pow(2,31)-1) console.log(0);
// else {reverse = isNegative ? -reverse : reverse;
// console.log('reverse',reverse);
// }

// 3.Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.
//  solve it without converting the integer to a string

// let n = Number(prompt('Enter a number'));
// let r,rev=0,temp=n;
// if(n<0) console.log('Not a palindrome');
// else{
//     while(n>0){
//         r = n%10;
//         rev= rev*10 + r;
//         n = Math.floor(n/10);
//     }
//     if(rev===temp) console.log('A palindrome number');
//     else console.log('Not a palindrome');
// }


// 4.GCD of Two Numbers
// You are given two integers n1 and n2. You need find the Greatest Common Divisor (GCD) of the two given numbers. 
// Return the GCD of the two numbers.
// The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both of the integers.

// let n1 = Number(prompt('Enter a number'));
// let n2 = Number(prompt("Enter a second number"));
// let temp;
// while(n2>0){
// temp = n2;
// n2 = n1%n2;
// n1 = temp;
// }
// console.log('gcd',n1);


// 5.Check if the Number is Armstrong
// You are given an integer n. You need to check whether it is an armstrong number or not. Return true if it is an armstrong number, otherwise return false.
// An armstrong number is a number which is equal to the sum of the digits of the number, raised to the power of the number of digits.


// let n = 153;
// let temp=n,r,sum=0,digits;
// digits = String(n).length;
// while(n>0){
//     r = n%10;
//     sum +=Math.pow(r,digits);
//     n = Math.floor(n/10);
// }
// if(sum===temp) console.log('Armstrong Number');
// else console.log('Not a armstrong number');


// 6. Divisors of a Number
// You are given an integer n. You need to find all the divisors of n. Return all the divisors of n as an array or list in a sorted order.


const n = 96,arr=[];
for(let i=1;i<=Math.sqrt(n);i++){
    if(n%i===0){
        arr.push(i);
        if(i!==n/i){
            arr.push(n/i);
        }
    }
}
arr.sort((a,b)=>a-b);
console.log('arr',arr);




 



