// Hashing

// most frequent element:

// const arr = [1, 2, 2, 3, 3];
// let frequency={}
// for(let i=0;i<arr.length;i++){
//     if(frequency[arr[i]]) frequency[arr[i]]++;
//     else frequency[arr[i]] = 1;
// }
//  let maxFrequency = Math.max(...Object.values(frequency)); //value max

//  let mosFrequent = Object.keys(frequency).filter(key=>frequency[key]===maxFrequency).map(Number); //array of max keys in number


//  console.log(Math.min(...mosFrequent));




/*********
 * 3541. Find Most Frequent Vowel and Consonant
User Accepted:13664
User Tried:13887
Total Accepted:14555
Total Submissions:16918
Difficulty:Easy
You are given a string s consisting of lowercase English letters ('a' to 'z').

Your task is to:

Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
Find the consonant (all other letters excluding vowels) with the maximum frequency.
Return the sum of the two frequencies.

Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

The frequency of a letter x is the number of times it occurs in the string.
 

Example 1:

Input: s = "successes"

Output: 6

Explanation:

The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
The output is 2 + 4 = 6.
Example 2:

Input: s = "aeiaeia"

Output: 3

Explanation:

The vowels are: 'a' (frequency 3), 'e' ( frequency 2), 'i' (frequency 2). The maximum frequency is 3.
There are no consonants in s. Hence, maximum consonant frequency = 0.
The output is 3 + 0 = 3.
 * 
 *
 */

var maxFreqSum = function(s) {
    let frequency_vowel={};
    let frequency_consonant = {};
    s=s.replace(/[^a-zA-Z]/g, '').toLowerCase();
    for(let i=0;i<s.length;i++){
        if(s[i]==='a' || s[i]==='e' || s[i]==='i' || s[i]==='o' || s[i]==='u'){
            if(frequency_vowel[s[i]]) frequency_vowel[s[i]]++;
            else frequency_vowel[s[i]] = 1;
        }else{
            if(frequency_consonant[s[i]]) frequency_consonant[s[i]]++;
            else frequency_consonant[s[i]] = 1;
        }
    }
     let maxFreVowel = 0;
    if (Object.keys(frequency_vowel).length > 0) {
        maxFreVowel = Math.max(...Object.values(frequency_vowel));
    }
    
    let maxFreConst = 0;
    if (Object.keys(frequency_consonant).length > 0) {
        maxFreConst = Math.max(...Object.values(frequency_consonant));
    }

    
    return maxFreVowel+maxFreConst
};

console.log(maxFreqSum('Aviinash'));



