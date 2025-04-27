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
// let min,temp,index,slicedArr;
// const arr = [5,12,22,41,12,1];
// console.log('arr',arr);
// for(let i=0;i<arr.length-1;i++){
//     slicedArr = arr.slice(i);    
//     min = Math.min(...slicedArr);    
//     index = slicedArr.indexOf(min) + i;
//     temp = arr[index];
//     arr[index] = arr[i];
//     arr[i] = temp;  
// }
// console.log('sortedarray',arr);

    // const arr = [10,21,5,45,10,21];
    // console.log('arr',arr);
    // let j,key;
    // for(let i=1;i<arr.length;i++){
    //     key = arr[i];
    //     j=i-1;
    //     while(j>=0 && arr[j]>key){
    //         arr[j+1] = arr[j]
    //         j--
    //     }
    //     arr[j+1] = key
    // }
    // console.log('sortedArr',arr);
    

/***
 * 
 * Revise above
 */

// Bubble sort:
// let n = Number(prompt("Enter the size of array"));
// const arr = new Array(n);

// for(let i=0;i<n;i++){
//     arr[i] = prompt('Enter a number');
//     if(arr[i] === null) break;
//     else arr[i] = Number(arr[i])
// }

// console.log('arr',arr);
// let temp;
// for(let i=0;i<n-1;i++){
//     for(let j=0;j<n-1-i;j++){
//         if(arr[j]<arr[j+1]){
//             temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log('sortedarray',arr);

// Selection sort

// const arr = [10,21,5,45,10,21];
// console.log('arr',arr);

// let max,slicedArr,index,temp;
// for(let i=0;i<arr.length-1;i++){
//     slicedArr = arr.slice(i);
//     max = Math.max(...slicedArr);
//     index = slicedArr.indexOf(max) + i;
//     temp = arr[index];
//     arr[index] = arr[i];
//     arr[i] = temp
// }

// console.log('sortedArr',arr);


// const arr = [10,5,21,20,56,23];
// let key,j;
// for(let i=0;i<arr.length;i++){
//     key = arr[i];
//     j = i-1;
//     while(j>=0 && arr[j]<key){
//         arr[j+1] = arr[j];
//         j--
//     }
//     arr[j+1] = key
// }

// console.log('sortedArr',arr);