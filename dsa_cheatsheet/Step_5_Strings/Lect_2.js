// Depth of nesting:
const s= "()(())((()()))";
let count=0,maxCount=0;
for(let char of s){
    if(char==='('){
        count++;
        if(count>maxCount) maxCount=count;
    }
    else if(char===')') count--;
}
console.log(maxCount);