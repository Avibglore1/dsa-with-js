// Recursion
// Factorial:
// const n=5;
// function factorial(n){
//     if(n==1) return 1;
//     else return n*factorial(n-1);
// }

// console.log(factorial(n));


// const arr=[1,2,3,4,5];
// let n = 5;
// function reverse(arr,start,end){
// if(start>=end) return arr;
// let temp=arr[start];
// arr[start] = arr[end];
// arr[end] = temp;

// return reverse(arr,start+1,end-1)
// }
// console.log(reverse(arr,0,n-1))

// let s='Hannat';
// let sentence = s;
// s=s.split('');
// let start=0,end=s.length-1;
// function palindromeCheck(s,start,end){
// if(start>=end) return s;
// let temp=s[start];
// s[start] = s[end];
// s[end] = temp;
// return palindromeCheck(s,start+1,end-1)
// }
// const ans = palindromeCheck(s,start,end);
// console.log(ans.join('').toUpperCase()===sentence.toUpperCase());



// fibonacci series:
// const n = 5;
// function fib(a){
// if(a===0 || a===1) return a;
// return fib(a-1) + fib(a-2);
// }
// console.log(fib(n));




// most frequent element:

const arr = [1, 2, 2, 3, 3];
let frequency={}
for(let i=0;i<arr.length;i++){
    if(frequency[arr[i]]) frequency[arr[i]]++;
    else frequency[arr[i]] = 1;
}
 let maxFrequency = Math.max(...Object.values(frequency)); //value max

 let mosFrequent = Object.keys(frequency).filter(key=>frequency[key]===maxFrequency).map(Number); //array of max keys in number


 console.log(Math.min(...mosFrequent));
 

