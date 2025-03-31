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

let playAgain;
do {
    let computerNumber = Math.floor(Math.random()*100) + 1;
    let guessedNumber = null;
    let keepPlaying = true;
    
    while(guessedNumber !== computerNumber && keepPlaying) {
          let userInput = prompt("Enter a natural number between 1 to 100 which matches with computer number");
          
          // Handle cancel button press
          if(userInput === null) {
              console.log("Game canceled by user");
              keepPlaying = false;
              continue;
          }
          
          guessedNumber = Number(userInput);
          
          if(guessedNumber < computerNumber) {
              console.log("Number too low");
          } else if(guessedNumber > computerNumber) {
              console.log("Number too high");        
          } else {
              console.log("Congrats you win 🎉🎉🎉🤩🤩");
              
              // Handle cancel on play again prompt
              let playAgainInput = prompt("Want to play again, press yes");
              playAgain = playAgainInput;
              
              if(playAgainInput === null) {
                  playAgain = "no"; // Treat cancel as "no"
                  console.log("Game session ended");
              }
          }
    }
    
    if(!keepPlaying) {
        playAgain = "no"; // Exit outer loop if user canceled during gameplay
    }
    
} while(playAgain === "yes")
    