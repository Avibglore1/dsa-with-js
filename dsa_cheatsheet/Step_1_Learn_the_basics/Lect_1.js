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


// const n = 96,arr=[];
// for(let i=1;i<=Math.sqrt(n);i++){
//     if(n%i===0){
//         arr.push(i);
//         if(i!==n/i){
//             arr.push(n/i);
//         }
//     }
// }
// arr.sort((a,b)=>a-b);
// console.log('arr',arr);


// 7.Check for Prime Number
// You are given an integer n. You need to check if the number is prime or not. Return true if it is a prime number, otherwise return false.

// const n=91;
// let isPrime = true;
// if(n<=1) isPrime=false;
// else{
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             isPrime = false;
//             break;
//         }
//     }
    
//     console.log(isPrime ?'prime number':'Not a prime Number');    
// }


/*********************************revision****************** */

// countdigitsofanumber:
// let n=Number(prompt('Enter a number'));
// if(n===0) console.log('digits',1)
// let count=0;
// n=Math.abs(n);
// while(n>0){
//     count++;
//     n=Math.floor(n/10);
// }
// console.log('digits',count);


// reverseInteger:
// let n = -546;
// let rev=0,r;
// const isPositive = n>0;
// n = Math.abs(n);
// while(n>0){
//     r = n%10;
//     rev =rev*10 + r;
//     n = Math.floor(n/10);
// }
// if(rev>Math.pow(2,31)-1) console.log(0);
// rev = isPositive ? rev : -rev;
// console.log('reverse',rev);


// Palindrome:
// let x = -121;
// if(x===0) console.log('Palindrome');
// else if(x<0) console.log('Not a Palindrome');
// else{
//         x = Math.abs(x);
//     let r,rev=0,temp=x;
//     while(x>0){
//         r = x % 10;
//         rev = rev*10+r;
//         x = Math.floor(x/10);
//     }
//     if(rev===temp) console.log('palindrome');
//     else console.log('Not a palindrome');
// }


// GCD
// let n1=8,n2=14,temp;
// while(n2>0){
// temp = n2;
// n2 = n1%n2;
// n1 = temp;
// }
// console.log('gcd',n1);


// ArmstrongNumber:
// let n = 145;
// let temp=n,sum=0,r;
// let digits = String(n).length;
// while(n>0){
//     r = n%10;
//     sum += Math.pow(r,digits);
//     n = Math.floor(n/10);
// }
// if(sum===temp)console.log('Armstrong Number');
// else console.log('Not a armstrong number');


// factorsofanumber:
// let n=98;
// let arr=[];
// for(let i=1;i<=Math.sqrt(n);i++){
//     if(n%i===0){
//         arr.push(i);
//         if(i!==n/i){
//             arr.push(n/i);
//         }
//     }
// }
// arr.sort((a,b)=>a-b);
// console.log('sortedArray',arr);

// primeNumber:
// let n=23;
// if(n<=1) console.log('Not a prime');
// let count=0;
// for(let i=2;i<=Math.sqrt(n);i++){
//     if(n%i===0){
//         count++;
//         if(i!==n/i) count++;
//     }
// }
// if(count===0) console.log('Prime number');
// else console.log('Not a Prime Number');


// Sieve of eratoshthenese:
const n=50;
const isPrime = new Array(n+1).fill(true);
isPrime[0]=isPrime[1]=false;
for(let p=2;p*p<=n;p++){
    if(isPrime[p]){
        for(let i=p*p;i<=n;i+=p){
            isPrime[i]=false;
        }
    }
}
const arr=[];
for(let i=2;i<=n;i++){
    if(isPrime[i]) arr.push(i);    
}

console.log(arr);

 



