// for(let i=1;i<=6;i++){
//     console.log(i)
// }


// for(let i=6;i>=1;i--){
//     console.log(i);
// }


// let sum=0;
// let n=7;
// for (let i=1;i<=n;i++){
//     sum += i;
// }
// console.log("sum", sum)


// let fact=1;
// let n=Number(prompt("Enter a number"))
// if(isNaN(n)){
//     console.log("Wrong input");
// }else{
//     for(let i=1;i<=n;i++){
//         fact *= i;
//     }
    
//     console.log("factorial", fact);
// }



// let n=231;
// factors = "";
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         factors += i + " "
//     }
// }
// console.log(factors);



//  let n=Number(prompt("Enter a number"));
//  function prime(n){
//     if(n==1) return false;
//     if(n==2) return true;
//     if(n%2==0) return false;
//     for(let i=3;i<=Math.floor(Math.sqrt(n));i=i+2){
//         if(n%i==0){
//             return false
//         }
//     }
//     return true;
//  }
//  console.log(`${n} is ${prime(n) ? "a Prime Number" : "Not a Prime Number"}`);

// let n=10023;
// let sum = 0;
// while(n>0){
// let r = n%10;
// sum += r;
// n=Math.floor(n/10);
// }
// console.log("sum", sum);



// let n=40585;
// let temp = n;
// let sum = 0;
// let fact;
// while(n>0){
// let r = n%10;
// fact=1;
// for(let i = 1;i<=r;i++){
//     fact *= i
// }
// sum += fact
// n=Math.floor(n/10);
// }
// if(sum == temp){
//     console.log(temp,"is a Strong Number")
// }else{
//     console.log(temp,"is Not a Strong number");
// }



   
// let obj={
//     firstName : "Avinash",
//     matches:['Cricket', 'Football', 'Hockey'],
//     sayHi:function(){
//         console.log("Say hi!")
//     }
// }

// for(let key in obj){
//     console.log("key:", key,"..............","value:", obj[key])
// }


/**********************************revision************** */

// for(let i=1;i<=6;i++){
//     console.log('i',i);
// }

// reverse,sum,factorial,factors,prime:

// const n = Number(prompt("Enter a number"));
// if(isNaN(n)) console.log("Enter integer value");
// for(let i=n;i>=1;i--) console.log(i);

// sum
// let sum = 0;
// for(let i=0;i<5;i++){
//     sum += i;
// }
// console.log('sum',sum);

// FACTORIAL
// let fact = 1;
// for(let i=1;i<=5;i++){
//     fact *= i;
// }
// console.log('factorial',fact);

// factors:
// let n = 87;
// let factors = '';
// for(let i=1;i<=n;i++){
//     if(n%i===0) factors +=i + " ";
// }
// console.log('factors:',factors);


// primeNo:
// let factors = 0;
// let n = Number(prompt("Enter a anumber"));
// for(let i=2;i<n;i++){
//     if(n%i===0) factors++
// }
// if(factors===0) console.log('primeNumber');
// else console.log('consonantNumber');

// optimisedcodeforPrimeNumber
let n = Number(prompt("Enter a number"));
function prime(n){
if(n===1) return false;
if(n===2) return true;
if(n%2===0)return false;
for(let i=3;i<=Math.sqrt(n);i+=2){
    if(n%i===0) return false;
}
return true;
}

if(prime(n)) console.log('primeNumber');
else console.log('notaprimeNumber');



