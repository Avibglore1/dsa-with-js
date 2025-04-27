// const arr = [];

// for (let i=0;i<5;i++){
//     num=prompt("Enter a number");
//     arr.push(num)
//     if (num === null) {
//         console.log("Input cancelled by user");
//         break;
//       }
// }

// console.log(arr);

// sum:
// const arr = new Array(4);
// let sum = 0;
// for (let i=0;i<arr.length;i++){
//     arr[i] = Number(prompt("Enter a number"))
//     sum +=arr[i]
//     console.log(arr[i]);
// }
// console.log("sum",sum)


// largest and 2nd largest
// const arr = new Array(7);
// let max = Number(prompt("Enter the first number"));
// let smax = Number(prompt("Enter the second number"));
// console.log(max);
// console.log(smax);
// if(max<smax){
//     let temp = max;
//     max = smax;
//     smax = temp; 
// }
// for(let i=2;i<arr.length;i++){
//     arr[i] = (prompt("Enter contnious number"));
//     if(arr[i]=== null){
//         break;
//     }
//     arr[i] = Number(arr[i])
//     if(arr[i]>max){
//         smax = max;
//         max = arr[i];
//     }else if(arr[i]>smax && arr[i] < max){
//         smax = arr[i];
//     }
//     console.log(arr[i]);
// }
// console.log("maximum number", max);
// console.log("second maximum value", smax);


// minimum and 2nd minimum
// const arr = new Array(7);
// let min = Number(prompt("Enter the first number"));
// let smin = Number(prompt("Enter the second number"));
// if(min>smin){
//     let temp = min;
//     min = smin;
//     smin = temp; 
// }
// for(let i=2;i<arr.length;i++){
//     arr[i] = (prompt("Enter contnious number"));
//     if(arr[i]=== null){
//         break;
//     }
//     arr[i] = Number(arr[i])
//     if(arr[i]<min){
//         smin = min;
//         min = arr[i];
//     }else if(arr[i]<smin && arr[i] > min){
//         smin = arr[i];
//     }
// }
// console.log("minimum number", min);
// console.log("second minimum value", smin);


// -ve numbers on left and +ve on right
// let temp;
// let j=0;
// let arr = [2,-5,6,-8,7,-1,8,5,-6]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<0){
//         temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         j++;
//     }
// }
// console.log(arr);


/****************************revision*********************** */

// const arr = [];
// let num ;
// for(let i=0;i<5;i++){
//     num = Number(prompt("Enter a number"));
//     arr.push(num);
// }

// console.log('arr',arr);

// w/opushingnumbersonarray

// const arr=[];
// let sum = 0;
// for(let i=0;i<=5;i++){
//     arr[i] = Number(prompt('Enter a number'));
//     sum += arr[i];
// }
// console.log('arr',arr);
// console.log('sum',sum);

// let arr = new Array(5);
// let max,smax,temp;

// max = arr[0]= Number(prompt('Enter a number'));
// smax = arr[1] = Number(prompt("Enter a number"));
// if(smax>max){
//     temp = max;
//     max = smax;
//     smax = temp;
// }
// for(let i=2;i<5;i++){
//     arr[i] = Number(prompt("Enter a number"));
//     if(arr[i]>max){
//         smax = max;
//         max = arr[i];
//     }else if(arr[i]>smax && arr[i]<max){
//         smax = arr[i];
//     }
// }
// console.log('arr',arr);

// console.log('max',max);
// console.log('smax',smax);


// (-ve)nos on left and (+ve)on right
// const arr = [-5,-87,56,45,74,-85,-6];
// let j=0,temp;
// for(i=0;i<arr.length;i++){
//     if(arr[i]<0){
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++
//     }
// }
// console.log('arr',arr);






