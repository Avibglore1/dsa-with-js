// Remove outermost parenthesis:
// const s="()()";
// let result='';
// let count=0;
// for(let char of s){
//     if(char==='('){
//         if(count>0) result +=char;
//         count++;
//     }
//     if(char===')'){
//         count--;
//         if(count>0) result +=char;
//     }
// }

// console.log(result);


// reverse a word haaving whitespaces in leading/trailing and spaces within word:
let s="a good   example";

s=s.trim().split(/\s+/).reverse().join(' ');
console.log(s);

