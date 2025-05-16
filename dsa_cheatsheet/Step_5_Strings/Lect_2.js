// Depth of nesting:
// const s= "()(())((()()))";
// let count=0,maxCount=0;
// for(let char of s){
//     if(char==='('){
//         count++;
//         if(count>maxCount) maxCount=count;
//     }
//     else if(char===')') count--;
// }
// console.log(maxCount);

// Atoi function:

// let s="-91283472332"
//  function atoi(s){
// let result='';
//     let newString;
//     if(s.length===0) return 0;
//     let trimmed = s.trim();
//   let sign= trimmed[0];
//   if(sign==='-'|| sign=== "+") newString = trimmed.slice(1); 
//   else{
//     newString = trimmed;
//   }
//     for(let char of newString){
//         if(char<'0' || char>'9') break;
//         result +=char
//     }
//     if(result==='') return 0;
//     let temp = Number(result);
   
//     if (sign==='-'){
//         if(temp>Math.pow(2,31)) temp=Math.pow(2,31);
//         return -temp;
//     }
//     if(temp>Math.pow(2,31)-1) temp=Math.pow(2,31);
//     return temp;
//  }
 
//  console.log(atoi(s));


// Roman Numeral to Integer:
// const s="LVIII";
// let romanMap={
//   'I':1,
//   'V':5,
//   'X':10,
//   'L':50,
//   'C':100,
//   'D':500,
//   'M':1000
// }
// let total=0,preValue=0;
// for(let i=s.length-1;i>=0;i--){
//   let currentValue = romanMap[s[i]];
//   if(currentValue<preValue) total -= currentValue;
//   else total += currentValue;
//   preValue=currentValue
// }
// console.log(total);


// longestPalindromeInWord:Optimised solution:
// const s="cbbd";

// function validPalindrome(s){
//   let start=0,end=0;
//   for(let i=0;i<s.length;i++){
//     let len1=longest(i,i);
//     let len2=longest(i,i+1);
//     let len = Math.max(len1,len2);
//     if(len>end-start){
//       start = i-Math.floor((len-1)/2);
//       end=i+Math.floor(len/2);
//     }
//   }

//   function longest(left,right){
//     while(left>=0 && right<s.length && s[left]===s[right]){
//       left--;
//       right++;
//     }
//     return right-left-1;
//   }
//   return s.substring(start,end+1)
// }
// console.log(validPalindrome(s));


// sum of beauty of substring:
const word="aabcbaa";

function beautyString(s){
  let sum=0;
for(let i=0;i<s.length;i++){
  let frequency=new Array(26).fill(0);
  for(let j=i;j<s.length;j++){
    const idx=s.charCodeAt(j)-97;
    frequency[idx]++;

    let min=Infinity,max=0;
    for(let count of frequency){
      if(count===0) continue;
      min=Math.min(min,count);
      max=Math.max(max,count);
    }
     sum += max-min;
  }
}
return sum;
}
console.log(beautyString(word));

