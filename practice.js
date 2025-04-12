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

// Post-increment is commonly used in loops:
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

// let n = Number(prompt("Enter a number"));
// let sum = 0;
// for(let i=1;i<=n;i++){
//     sum += i;
//     console.log(i);
// }
// console.log("sum", sum);

// let n = Number(prompt("Enter a number"));
// let fact = 1
// for(let i=n;i>=1;i--){
//     console.log(i); 
//     fact *=i;
// }
// console.log('factorial:',fact);


// let n = Number(prompt("Enter a number"));
// let factors = '';
// for(let i=1;i<=n;i++){
//     if(n%i===0) factors +=i+","
// }
// console.log(`factors of ${n}:`, factors.slice(0,-1));  //js supports -ve indexing


// let n=Number(prompt("Enter a number"));
// if(n<=1) console.log("Not a prime Number");
// else if(n===2) console.log("Prime Number");
// else if(n%2===0) console.log("Not a prime Number");

// else {
//     let isPrime = true;
//     for (let i=3;i<=Math.sqrt(n);i+=2){
//         if(n%i===0) {
//             isPrime = false;
//             break;
//         }
//    }
//    console.log(`${isPrime?"It's a prime number":"Not a prime number"}`); 
// }

// sum of digits of a numnber
// let n = Number(prompt("Enter a number"))
// let sum = 0,r;
// while(n>0){
//     r = n%10;
//     sum += r;
//     n = Math.floor(n/10);
// }
// console.log("Sum:",sum);


// strong number
// let n = Number(prompt("Enter a number"));
// let temp=n,sum=0,r,fact;
// while(n>0){
//     fact = 1;
//     r = n%10;
//     for(let i=1;i<=r;i++){
//         fact *= i;
//     }
//     sum += fact;
//     n = Math.floor(n/10);
// }
// if(sum===temp) console.log("Strong number");
// else console.log("Not a strong number");

// let obj={
//     firstName : "Avinash",
//     matches:['Cricket', 'Football', 'Hockey'],
//     sayHi:function(){
//         console.log("hi");
//     }
// }

// for(let key in obj){
//     console.log("key:", key,"..............","value:", obj[key])
// }

// console.log(obj.sayHi());


// let computerNumber = Math.floor(Math.random()*100) +1;
// let guessedNumber;
// do{
//      guessedNumber = prompt("Enter a number");
//      if(guessedNumber === null){
//         break;
//      }
//      guessedNumber = Number(guessedNumber)
//     if(guessedNumber === computerNumber){
//         alert("You won 🎉"); 
//     }
//     else if(guessedNumber < computerNumber){
//         alert("You typed smaller value");  
//     }else{
//         alert("Your value is larger");
//     }
// }while (guessedNumber !== computerNumber)


    /****************************************************Lecture-4******************************** */

    // const arr = new Array(5);

    // for (let i=0;i<arr.length;i++){
    //      arr[i] = prompt("Enter a number");
    //     if(arr[i] === null){
    //         console.log("Input cancelled by user");
    //         break;            
    //     };
    //     arr[i] = Number(arr[i])
    // }
    // console.log(arr);
    

    // const arr=new Array(5);
    // let sum=0;
    // for(let i=0;i<arr.length;i++){
    //     arr[i] = prompt("Enter a number");
    //     if(arr[i] === null) break;
    //     else if(isNaN(arr[i])) {
    //         console.log('Wrong Input entered');
    //         break;
    //     }
    //     console.log(arr[i]);
    //     sum += Number(arr[i]);
    // }
    // console.log('sum',sum);
    

    // MAXIMUM AND 2ND MAXIMUM VALUE IN AN ARRAY
    // const arr = [5,-5,85,74,52,102];
    // const max = Math.max(...arr);
    // console.log("Maximum value", max);

    // const index = arr.indexOf(max);
    // arr.splice(index,1);
    
    // const max2 = Math.max(...arr);
    // console.log('Second maximum value:', max2);


    // if we have duplicate values and we dont want repeated values to take up so for this:

    // const arr = [5,5,85,85,96,74,52,23,96];
    // const uniqueArr = [... new Set(arr)].sort((a,b)=>b-a);
    // console.log(`arr: ${arr}\nuniqueArr: ${uniqueArr}`);
    // const max1 = uniqueArr[0];
    // const max2 = uniqueArr[1]
    // console.log('Maximum value:',max1);
    // console.log('Second Maximum value:',max2);
    
    
   /*******************************************Lecture-5********************************** */

//    const word = "Avinash Kumar"
//    for(let i=0;i<word.length;i++){
//     if(word[i]===" ") continue;
//     console.log(word[i]);
//    }
    

    // const word = "Avinash kumar";
    // for(let i=word.length-1;i>=0;i--){
    //     if(word[i]===" ")continue;
    //     console.log(word[i]);
    // }

    // const word = 'Avinash Kumar'
    // let reverse = '';
    // for(let i=word.length-1;i>=0;i--){
    //     reverse += word[i]
    // }
    // console.log(reverse);

    // const word = "Avinash Kumar";
    // let  arr = word.split('');
    // arr.reverse();
    // console.log(arr.join(''));
    

    // const input = prompt("Enter a word");
    // const word = input.replace(/\s+/g,'').toLowerCase();
    // const arrWord = word.split('');
    // arrWord.reverse();
    // const reversedWord = arrWord.join('');
    // if(reversedWord === word) console.log('palindrome');
    // else console.log('Not a palindrome');
    
    // const word = "Happy New Year";
    // let toggledWord='';
    // for(let i=0;i<word.length;i++){
    //     if(word[i] === word[i].toLowerCase()) toggledWord += word[i].toUpperCase();
    //     else if(word[i] === word[i].toUpperCase()) toggledWord += word[i].toLowerCase();
    //     else toggledWord += word[i];
    // }
    // console.log('toggled word:',toggledWord);


    const word = prompt("Enter a word").toLowerCase();
    const frequency = {};
    
    for(let i=0;i<word.length;i++){
        if(frequency[word[i]]) frequency[word[i]]++
        else frequency[word[i]] = 1;
    }
    console.log('frequency:',frequency);

    const arr = Object.entries(frequency);
    // console.log('arr', arr);
    arr.sort((a,b)=>b[1]-a[1]);
    arr.forEach(([char,count])=>{
        console.log(`${char}: ${count}`);
    })
    
    
    
    

    
    















