// let s = 'Avinash';

// console.log(s.slice(-4,s.length));
// console.log(s);

/*****when we try to print s,we get same original value since strings are unlike array and cannot be mutated*** */

// let s = 'My';

// console.log(s.concat(" ","name ",'is ','Avinash ','Kumar'));

/*******revision************** */
const s='Avinash';
let rev='';
// for(let char of s){
//     console.log(char);
// }

// for(let i=0;i<s.length;i++){
//     console.log(s[i]);
    
// }

for(let i=s.length-1;i>=0;i--){
  rev= rev.concat(s[i])
}
console.log(rev);
