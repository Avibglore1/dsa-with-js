// You are given an integer n. You need to return the number of digits in the number.
let count = 0;
let n=Number(prompt("Enter a number"));
if(n===0) console.log('no_of_digits',1);;
n=Math.abs(n)
while(n>0){
    count++;
    n=Math.floor(n/10);
}
console.log('no_of_digits',count);
