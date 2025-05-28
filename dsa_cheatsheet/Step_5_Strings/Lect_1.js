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
// const s='egg';
// const t='add';

// function isomorphic(s,t){
// if(s.length!==t.length) return false;
// let sObj={},tObj={};
// for(let i=0;i<s.length;i++){
//     let schar=s[i];
//     let tchar=t[i];

//     if(sObj[schar] && sObj[schar]!==tchar) return false;
//     if(tObj[tchar] && tObj[tchar]!==schar) return false;

//     sObj[schar] = tchar;
//     tObj[tchar] = schar;
// }
// return true;
// }
// console.log(isomorphic(s,t));


// Longest common prefix:
// const str=["dog","racecar","car"];
// function commonPrefix(str){
// for(let i=0;i<str[0].length;i++){
//     let char=str[0][i];
//     for(let j=1;j<str.length;j++){
//         if(i>=str[j].length || str[j][i]!==char) return str[0].slice(0,i);
//     }
// }
// return str[0];
// }
// console.log(commonPrefix(str));


// rotate string:
// const s='abcde';
// const goal='adeac';
// function rotateString(s,goal){
//     if(s.length!==goal.length) return false;
//     return (s+s).includes(goal);
// }
// console.log(rotateString(s,goal));


// anagram strings:
//  return s.split('').sort().join('')===t.split('').sort().join('');


// frequency of chars,arrange in decreasing order of frequency:
// let s="Aabb";
// let frequency={};
// for(let char of s){
//     if(frequency[char]) frequency[char]++;
//     else frequency[char] = 1;
// }

// let sortedKeys = Object.keys(frequency).sort((a,b)=>frequency[b]-frequency[a]);
// console.log(sortedKeys);
// let result='';
// for(let char of sortedKeys){
//     result += char.repeat(frequency[char])
// }
// console.log(result);


// const arr =  [4, 4, 5, 5, 6];
// let frequency={};
// let result;
// for(let num of arr){
//     if(frequency[num]) frequency[num]++;
//     else frequency[num]=1;
// }
// let maxFrequency=0;
// for(let num in frequency){
//     let currentFreq=frequency[num];
//     let currentNum=parseInt(num);
//     if(currentFreq>maxFrequency) {
//         maxFrequency=currentFreq;
//         result=currentNum;
//     }
//     else if(maxFrequency===currentFreq && currentNum<result) result=currentNum
// }
// console.log(result);

/*************revision********************* */

// Q.Remove outer parenthesis:
// const s="()()" ;

// let result='';
// let opened=0;
// for(let char of s){
//     if(char==='('){
//         if(opened>0) result += char;
//         opened++
//     }else{
//         opened--;
//         if(opened>0) result += char;
//     }
// }
// console.log(result);



// Q.reverse a string such that there should be only single space between words:
let s='   How   is  u';
console.log(s.trim().replace(/\s+/g,' ').split(' ').reverse().join(' '));
