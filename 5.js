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
let word='Hello World';
word = word.toLowerCase()
let frequency ={};
for (let i =0;i<word.length;i++){
    if(word[i]===" "){
        continue
    }
    if(frequency[word[i]]){
        frequency[word[i]] ++;
    }else{
        frequency[word[i]] = 1
    }
}

console.log("original:", frequency);
console.log("sorted object:", Object.fromEntries(Object.entries(frequency).sort()));



