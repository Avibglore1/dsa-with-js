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
// const nums=[1,2,3]
// function subsequence(nums){
// let result=[];
// function backtrack(start,current){
// result.push([...current]);
// for(let i=start;i<nums.length;i++){
//     current.push(nums[i]);
//     backtrack(i+1,current);
//     current.pop();
// }
// }
// backtrack(0,[]);
// return result
// }
// console.log(subsequence(nums));


// subsequence sum=k;
// const nums= [4, 2, 10, 5, 1, 3];
// const k=5;
// function subsequence(nums,k){
//     let count=0;
//     let result=[]
//     function backtrack(start,current,currentSum){
//         if(currentSum===k){
//             result.push([...current]);
//             count++
//         } 
//         for(let i=start;i<nums.length;i++){
//             current.push(nums[i]);
//             backtrack(i+1,current,currentSum+nums[i]);
//             current.pop();
//         }
//     }
//     backtrack(0,[],0)
//     return {count,result};
// }
// console.log(subsequence(nums,k));

// check if sum is there in subsequence:
// let flag=false;
// const nums= [4, 3, 9, 2];
// const k=10;
// function backtrack(start,current,currentSum){
// if(currentSum===k){
//     flag=true;
//     return true;
// }
// for(let i=start;i<nums.length;i++){
//     current.push(nums[i]);
//     if(backtrack(i+1,current,currentSum+nums[i])) return true;
//     current.pop();
// }
// }
// backtrack(0,[],0);
// console.log(flag?'Yes':'No');


// print subsequence whose sum=target,repetetive element and less than 150 search.
// const candidates = [2, 3, 5, 4];
// const target=7;

// let result=[];
// function backtrack(start,current,currentSum){
// if(currentSum===target){
//     result.push([...current]);
    
// }
// if(currentSum>target) return
// for(let i=start;i<candidates.length;i++){
//     current.push(candidates[i]);
//     backtrack(i,current,currentSum+candidates[i]);
//     current.pop();
// }
// return result
// }
// console.log(backtrack(0,[],0))


// combinationSum-II:
// const candidates = [2, 5, 2, 1, 2] ;
// const target=5;
// function uniqueCandidate(candidates,target){
// candidates.sort((a,b)=>a-b);
// let result=[];
// function backtrack(start,current,currentSum){
//     if(currentSum===target) {
//         result.push([...current]);
//         return
//     }
//     if(currentSum>target) return
//     for(let i=start;i<candidates.length;i++){
//         if(i>start && candidates[i]===candidates[i-1]) continue
//         current.push(candidates[i]);
//         backtrack(i+1,current,currentSum+candidates[i]);
//         current.pop()
//     }
// }
// backtrack(0,[],0)
// return result
// }
// console.log(uniqueCandidate(candidates,target));


// print sum in a recursion:
// const nums = [5, 2, 1];
// function sum(nums){
//     let result=[];
//     function backtrack(index,currentSum){
//         if(index===nums.length){
//             result.push(currentSum);
//             return
//         }
//         backtrack(index+1,currentSum+nums[index]);
//         backtrack(index+1,currentSum)
//     }
//     backtrack(0,0);
//     return result
// }
// console.log(sum(nums));



// Given an integer array nums, which can have duplicate entries, provide the power set. 
// Duplicate subsets cannot exist in the solution set. Return the answer in any sequence.
// const nums=[5,1,2,5]
// function subset(nums){
// let result=[];
// nums.sort((a,b)=>a-b)
// function backtrack(start,current){
//     result.push([...current])
//     for(let i=start;i<nums.length;i++){
//         if(i>start && nums[i]===nums[i-1]) continue
//         current.push(nums[i])
//         backtrack(i+1,current)
//         current.pop()
//     }
// }
// backtrack(0,[])
// return result
// }
// console.log(subset(nums));

// sum of k combination equal n:
// const k=3;
// const n=9;

// function sumCombination(n,k){
//     let result=[]
//     function backtrack(start,current,sum){
//         if(current.length===3){
//             if (sum===n) result.push([...current])
//             return
//         }
//         for(let i=start;i<=9;i++){
//             if(sum+i>n) break;
//             current.push(i);
//             backtrack(i+1,current,sum+i);
//             current.pop()
//         }
//     }
//     backtrack(1,[],0)
//     return result
// }
// console.log(sumCombination(n,k));



// letter combination of a phone number:
// const digits = "3";
// function letterPhone(digits){
//     let result=[]
// if(digits.length===0) return []
// let digitsToChar={
//     '2':'abc',
//     '3':'def',
//     '4':'ghi',
//     '5':'jkl',
//     '6':'mno',
//     '7':'pqrs',
//     '8':'tuv',
//     '9':'wxyz'
//     }
//     function backtrack(index,path){
//         if(path.length===digits.length){
//             result.push(path);
//             return
//         }
//         let letters = digitsToChar[digits[index]];
//         for(let char of letters){
//             backtrack(index+1,path+char)
//         }
//     }
//     backtrack(0,'')
//     return result
// }
// console.log(letterPhone(digits));

let a=11;
let b=22;
let c = a+b+ a++ + b++ + ++a + ++b;
console.log(a);
console.log(b);
console.log(c);








