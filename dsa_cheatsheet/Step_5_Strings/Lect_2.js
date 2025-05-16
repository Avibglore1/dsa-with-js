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
const s="LVIII";
let romanMap={
  'I':1,
  'V':5,
  'X':10,
  'L':50,
  'C':100,
  'D':500,
  'M':1000
}
let total=0,preValue=0;
for(let i=s.length-1;i>=0;i--){
  let currentValue = romanMap[s[i]];
  if(currentValue<preValue) total -= currentValue;
  else total += currentValue;
  preValue=currentValue
}
console.log(total);
