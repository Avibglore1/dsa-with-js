// Hashing

// most frequent element:

const arr = [1, 2, 2, 3, 3];
let frequency={}
for(let i=0;i<arr.length;i++){
    if(frequency[arr[i]]) frequency[arr[i]]++;
    else frequency[arr[i]] = 1;
}
 let maxFrequency = Math.max(...Object.values(frequency)); //value max

 let mosFrequent = Object.keys(frequency).filter(key=>frequency[key]===maxFrequency).map(Number); //array of max keys in number


 console.log(Math.min(...mosFrequent));