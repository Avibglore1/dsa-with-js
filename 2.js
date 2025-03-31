// let age = Number(prompt("Enter your age"));
// if(isNaN(age)){
//     console.log("Wrong input");
// }
// else if(age<=18){
//     console.log("Not a valid voter");
// }else{
//     console.log("Valid voter");
// }


// let price = Number(prompt("Enter the total purchased amount"));
// let discount,netPayableAmt;
// if(isNaN(price)){
//     console.log("Wrong input");
// }else if(price<=5000){
//     discount = 0;
// }else if(price <= 7000){
//     discount = 5/100 * price;
// }else if(price <= 9000){
//     discount = 10/100 * price;
// }else{
//     discount = 20/100 * price;
// }
// netPayableAmt = price - discount;
// console.log("Net Payable Amount = ", netPayableAmt);
// console.log('Discount allocated in percentage', (price-netPayableAmt)/price * 100);



// let unit = Number(prompt("Enter consumption of Electricity in units"));
// let cost;
// if(isNaN(unit)){
//     console.log("Wrong input");
// }
// else if(unit<=100){
//     cost = 4.2*unit;
// }
// else if(unit<=200){
//     cost = 100 * 4.2 + (unit-100)*6;
// }
// else if(unit<=400){
//     cost = 100 * 4.2 + 100 * 6 + (unit-200) * 8;
// }
// else{
//     cost = 100 * 4.2 + 100 * 6 + 200 * 8 + (unit-400) * 13;
// }
// console.log("Net payable amount = ", cost);



// let amount = Number(prompt("Enter the amount"));
// let fiveHundNotes,twoHundNotes,onehundNotes,fiftyNotes,twentyNotes,tens,ones;
// let balanceAmt;

// fiveHundNotes = Math.floor(amount/500);
// balanceAmt = amount - fiveHundNotes * 500;
// twoHundNotes = Math.floor(balanceAmt/200);
// balanceAmt = balanceAmt - twoHundNotes * 200;
// onehundNotes = Math.floor(balanceAmt/100);
// balanceAmt = balanceAmt - onehundNotes * 100;
// fiftyNotes = Math.floor(balanceAmt/50);
// balanceAmt = balanceAmt - fiftyNotes * 50;
// twentyNotes = Math.floor(balanceAmt/20);
// balanceAmt = balanceAmt - twentyNotes * 20;
// tens = Math.floor(balanceAmt/10);
// balanceAmt = balanceAmt - tens * 10;
// ones = balanceAmt;
// console.log("Input amount: ", amount)
// console.log(`
//     500 notes: ${fiveHundNotes}
//     200 notes: ${twoHundNotes}
//     100 notes: ${onehundNotes}
//     50 notes: ${fiftyNotes}
//     20 notes: ${twentyNotes}
//     10 notes: ${tens}
//     chillars: ${ones}`
// );


const arr = [1,8,-58,987,true];
arr.splice(1,0,45);
console.log(arr)