// Remove outermost parenthesis:
const s="()()";
let result='';
let count=0;
for(let char of s){
    if(char==='('){
        if(count>0) result +=char;
        count++;
    }
    if(char===')'){
        count--;
        if(count>0) result +=char;
    }
}

console.log(result);
