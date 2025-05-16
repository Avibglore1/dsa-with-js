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

let s="-91283472332"
 function atoi(s){
let result='';
    let newString;
    if(s.length===0) return 0;
    let trimmed = s.trim();
  let sign= trimmed[0];
  if(sign==='-'|| sign=== "+") newString = trimmed.slice(1); 
  else{
    newString = trimmed;
  }
    for(let char of newString){
        if(char<'0' || char>'9') break;
        result +=char
    }
    if(result==='') return 0;
    let temp = Number(result);
   
    if (sign==='-'){
        if(temp>Math.pow(2,31)) temp=Math.pow(2,31);
        return -temp;
    }
    if(temp>Math.pow(2,31)-1) temp=Math.pow(2,31);
    return temp;
 }
 
 console.log(atoi(s));