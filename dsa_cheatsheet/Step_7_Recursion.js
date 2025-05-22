// const n=50;
// function countGoodNumbers(n){
// let MOD=1_000_000_007n;
// function modPow(base,exponent){
//     let result=1n;
//     base=BigInt(base);
//     exponent=BigInt(exponent);
//     base=base%MOD;
//     while(exponent>0){
//         if(exponent%2n===1n) result=(result*base)%MOD;
        
    
//     base=(base*base)%MOD;
//     exponent=exponent/2n;
//     }
//     return result;
// }
// let evenCount=Math.ceil(n/2);
// let oddCount=Math.floor(n/2);

// let evenWays=modPow(5n,evenCount);
// let oddWays=modPow(4n,oddCount);

// return Number((evenWays*oddWays)%MOD);
// }

// console.log(countGoodNumbers(n));


// Generate Parenthsesis:
// const n=4;
// function genrateParenthesis(n){
// let result=[];
// function backtrack(current,open,close){
//     if(current.length===2*n){
//         result.push(current);
//         return
//     }
//     if(open<n) backtrack(current+'(',open+1,close);
//     if (close<open) backtrack(current+')',open,close+1);
// }
// backtrack('',0,0);
// return result;
// }
// console.log(genrateParenthesis(n));


// printallsubsequence:
const nums=[1,2,3]
function subsequence(nums){
let result=[];
function backtrack(start,current){
result.push([...current]);
for(let i=start;i<nums.length;i++){
    current.push(nums[i]);
    backtrack(i+1,current);
    current.pop();
}
}
backtrack(0,[]);
return result
}
console.log(subsequence(nums));
