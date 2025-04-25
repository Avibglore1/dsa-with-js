// Strings

// print each character on a new line

// let word = "Avinash Kumar";
// for (let i=0;i<word.length;i++){
//     if(word[i] === " "){
//         continue;
//     }
//     console.log(word[i]);
// }


// print in reverse order

// let word="Avinash Kumar";
// let arrayWord = word.split("");
// console.log(arrayWord)
// console.log(arrayWord.reverse());
// console.log(arrayWord.join(""));


// string is palindrome or not

// const inputWord = prompt("Enter a word");
// const reversedWord = inputWord.split("").reverse().join("");
// // console.log(inputWord);
// // console.log(reversedWord);

// if(inputWord.toLowerCase() === reversedWord.toLowerCase()){
//     console.log("Palindrome word");
// }else{
//     console.log("Not a palindrome");
// }



// toggle each character
// let word = "Happy New Year";
// let toggledWord = "";
// for(let i=0;i<word.length;i++){
//     if(word[i] === word[i].toUpperCase()){
//         toggledWord += word[i].toLowerCase();
//     }else{
//         toggledWord += word[i].toUpperCase();
//     }
// }
// console.log(word);
// console.log(toggledWord);



// frequency of each letter in word
// let word = 'Hello World';
// let frequency = {};
// let orderedChars = []; // Array to track character order

// for (let i = 0; i < word.length; i++) {
//     if (word[i] === " ") {
//         continue;
//     }
    
//     if (frequency[word[i]]) {
//         frequency[word[i]]++;
//     } else {
//         frequency[word[i]] = 1;
//         orderedChars.push(word[i]); // Add character to ordered array
//     }
// }

// console.log("original:", frequency);


// let orderedFrequency = {};
// orderedChars.forEach(char => {
//     orderedFrequency[char] = frequency[char];
// });

// console.log("ordered:", orderedFrequency);





/*************revision******************** */

// eachchar in newLine
// const word = 'Avinash Kumar';
// for(let i=0;i<word.length;i++){
//     if(word[i]==='') continue
//     console.log(word[i]);    
// }

// reverse,palindrome,toggle,frequencyofeachchar:

// const word = prompt("Enter a name");
// let reverse = '';
// for(let i=word.length-1;i>=0;i--){
//     reverse +=word[i];
// }
// console.log('reversedWord',reverse);



// const word = prompt("Enter a name");
// let reverse = '';
// for(let i=word.length-1;i>=0;i--){
//     reverse +=word[i];
// }
// if(reverse === word) console.log('palindromeWord');
// else console.log('not a palindromeWord');


// toggle:
// const word = 'Avinash Kumar';
// let toggledWord='';
// for(let i=0;i<word.length;i++){
//     if(word[i]===word[i].toUpperCase()) toggledWord += word[i].toLowerCase();
//     else toggledWord += word[i].toUpperCase();    
// }
// console.log('toggledWord',toggledWord);

// count character in word:
let word = "Avinahsh";

let frequency = {};
let chars = [];
for(let i=0;i<word.length;i++){
    if(frequency[word[i]]) frequency[word[i]] ++;
    else {
        frequency[word[i]] = 1; //countofeachChar
        chars.push(word[i])//uniquecharacterremoving duplicates
    }
}

console.log('frequency',frequency);
console.log('chars',chars);


//this already has with O(n) space complexity and time complexity,its a good approach