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
// let s="a good   example";

// s=s.trim().split(/\s+/).reverse().join(' ');
// console.log(s);


// Isomorphic String:
const s='egg';
const t='add';

function isomorphic(s,t){
if(s.length!==t.length) return false;
let sObj={},tObj={};
for(let i=0;i<s.length;i++){
    let schar=s[i];
    let tchar=t[i];

    if(sObj[schar] && sObj[schar]!==tchar) return false;
    if(tObj[tchar] && tObj[tchar]!==schar) return false;

    sObj[schar] = tchar;
    tObj[tchar] = schar;
}
return true;
}
console.log(isomorphic(s,t));
