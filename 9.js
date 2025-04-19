// Bubble-sort
// const arr = new Array(5);
// for(let i=0;i<arr.length;i++){
//     arr[i] = prompt("Enter a number");
//     if(arr[i] === null) break;
//     else arr[i] = Number(arr[i]);
// }

// console.log('arr',arr);


// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-i-1;j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }

// console.log('sortedArray',arr);


// selection sort
let min,temp,index,slicedArr;
const arr = [5,12,22,41,12,1];
console.log('arr',arr);
for(let i=0;i<arr.length-1;i++){
    slicedArr = arr.slice(i);    
    min = Math.min(...slicedArr);    
    index = slicedArr.indexOf(min) + i;
    temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;  
}
console.log('sortedarray',arr);


