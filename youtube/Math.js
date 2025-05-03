// gcd/hcf:
/***
 * let a = 20, b = 32;
 * a = 20, b = 12;
 * a = 8, b = 12;
 * a = 8, b = 4;
 * a = 4, b = 4;
 * so anser is 4 
 * 
 */


// let n1 = 32,n2 = 20;
// function fn(a,b){
//     while(a!=b){
//         if(a>b) a = a-b;
//         else b = b-a;
//     }
//     console.log('gcd',a);
// }

// fn(n1,n2)


// let n1 = 32,n2 = 20;
// function fn(a,b){
// if(a===b) return a;
// if(a>b) return fn(a-b,b);
// else return fn(a,b-a)
// }
// console.log(fn(n1,n2));


// let n1 = 32,n2 = 20;
// function fn(a,b){
//   if(a===0) return b;
//   else if(b===0) return a;
//   if(a>b) return fn(a%b,b);
//   else return fn(a,b%a)
// }
// fn(n1,n2);


// most appropriate answer:

// let n1 = 32,n2 = 20;
// function fn(a,b){
// if(b===0) return a;
// return fn(b,a%b);
// }
// console.log(fn(n1,n2));

// print prime upton:

// let n = 25;
// let arr = new Array(n+1).fill(true);
// for(let i=2;i<=Math.sqrt(n);i++){
//   if(arr[i]){
//     for(let j = i*i;j<=n;j=j+i){
//       arr[j] = false;
//     }
//   }
// }
// for(let i=2;i<arr.length;i++){
//   if(arr[i]) console.log(i);
// }


let x = 2,n=7;
let isPositive = n>0;
n = Math.abs(n);
function pow(x,n){
if(n===0) return 1;
let ans = pow(x,Math.floor(n/2));
if(n% 2===0) return ans * ans;
else return ans*ans*x;
}
ans = pow(x,n)
isPositive ? console.log(ans) : console.log(1/ans);
