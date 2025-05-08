// Recursion
// Factorial:
// const n=5;
// function factorial(n){
//     if(n==1) return 1;
//     else return n*factorial(n-1);
// }

// console.log(factorial(n));


const arr=[1,2,3,4,5];
let n = 5;
function reverse(arr,start,end){
if(start>=end) return arr;
let temp=arr[start];
arr[start] = arr[end];
arr[end] = temp;

return reverse(arr,start+1,end-1)
}
console.log(reverse(arr,0,n-1))