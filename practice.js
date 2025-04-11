// alert('i am reachable');

// console.log("hello + how do u do");

// let firstName = "John";
// let lastName = "Doe";
// let fullName = `${firstName}.${lastName}`; //templateliteral
// console.log(fullName);

// let x = 5;
// let y = x++; // y = 5, x = 6

// let a = 5;
// let b = ++a; // a = 6, b = 6

// // Post-increment is commonly used in loops:
// const A =(Math.PI * 5).toFixed(3);
// const B = Number(A)
// console.log(typeof(B));

// let num = 10.346;

// num.toFixed(0);  // "10" (rounds to nearest integer)
// num.toFixed(1);  // "10.3" (rounds to 1 decimal place)
// num.toFixed(2);  // "10.35" (rounds to 2 decimal places - notice the rounding up)
// num.toFixed(4);  // "10.3460" (adds zeroes if needed to match specified decimal places)

// let num2 = 0.5;
// num2.toFixed(0);  // "1" (rounds up since it's 0.5)

// let num3 = 0.49;
// num3.toFixed(0);  // "0" (rounds down)



// for(let i=0;i<10;i++){
//     let age = (prompt("Enter your age"));
//     if(age === null){
//         break;
//     }
// }


/*************************************************lecture-2**************************************** */

// const age = Number(prompt("Enter your age"));

// if(isNaN(age))  console.log("Wrong Input");

// else if(age>=18){
//     console.log("Eligible to vote"); 
// }
// else{
//     console.log("Under age");  
// }


// let price = Number(prompt("Enter the purchased cost"));
// let discount;
// if(isNaN(price)) console.log("Wrong Input");
// else if(price<5000) {
//     discount = .05*price;
// }else if(price<7000) discount= .07*price;
// else if(price<9000) discount = .1*price;
// else discount = .15*price;

// console.log("price is:",price);
// console.log("discount is:",discount);



// let unit = Number(prompt("Enter the electricity consumption unit"));
// let cost;
// if(isNaN(unit)) console.log("Wrong Input");
// else if(unit<=100) cost = 4.2*unit;
// else if(unit<=200) cost = 4.2*100 + (unit-100)*6;
// else if(unit<=400) cost = 4.2*100 + 100*6+(unit-200)*8;
// else cost = 4.2*100+6*100+8*200+(unit-400)*13;
// console.log('Cost incurred:', cost);



// let amount = Number(prompt("Enter denomination valur in Rs"));
// let notes_500,notes_200,notes_100,notes_50,notes_20,notes_10,notes_5,coins,remainder;

// notes_500 = Math.floor(amount/500);
// remainder = amount%500;
// notes_200 = Math.floor(remainder/200);
// remainder = remainder%200;
// notes_100 = Math.floor(remainder/100);
// remainder = remainder%100;
// notes_50 = Math.floor(remainder/50);
// remainder = remainder%50;
// notes_20 = Math.floor(remainder/20);
// remainder = remainder%20;
// notes_10 = Math.floor(remainder/10);
// remainder = remainder %10;
// notes_5 = Math.floor(remainder/5);
// remainder = coins = remainder % 5;


// console.log('amount is', amount);
// console.log(`****************************`);

// console.log("500 notes:", notes_500);
// console.log("200 notes:", notes_200);
// console.log("100 notes:", notes_100);
// console.log("50 notes:", notes_50);
// console.log("20 notes:", notes_20);
// console.log("10 notes:", notes_10);
// console.log("5 notes:", notes_5);
// console.log("coins:", coins);



// const arr = [1,8,-58,987,true];
// const splicedArr = arr.splice(1,3,45); //stores deleted values
// console.log(arr);
// console.log(splicedArr);



/*************************************************lecture-3**************************************** */
