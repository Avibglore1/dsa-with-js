// const arr = [1,5,8,9,12];
// [5,8,9,12,1];>>>>>>>>>>>>>>Left roation by 1
// let temp = arr[0];
// for(let i=0;i<arr.length-1;i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] =temp; 
// console.log(arr)


// [12,1,5,8,9]>>>>>>>>>>>right rotation by 1;
// let temp = arr[arr.length-1]
// for(let i=arr.length-1;i>=1;i--){
//     arr[i] = arr[i-1];
// }
// arr[0] = temp;

// console.log(arr);


// left rotation by k element
// let k = prompt("Enter number of times array to be rotated");
// k = k%arr.length;

// for(let j=0;j<k;j++){
//     let temp = arr[0];
//     for(let i=0;i<arr.length-1;i++){
//     arr[i] = arr[i+1];
//     }
//     arr[arr.length-1] =temp; 
// }

// console.log(arr);


// right rotation by k element

// const arr = [1,5,8,9,12];
// let k = prompt("Enter number of times element to be rotated right");

// k = k%arr.length;

// for(let j=0;j<k;j++){
//     let temp = arr[arr.length-1]
//     for(let i=arr.length-1;i>=1;i--){
//     arr[i] = arr[i-1];
// }
//     arr[0] = temp;
// }



// 2nd approach of left rotaion by k element by formula
// const arr = [1,5,8,9,12];
// let temp = [];
// const k = Number(prompt("Enter no of times element to be rotated left"))
// for(let i=0;i<arr.length;i++){
//     temp[i] = arr[(i+k)%arr.length]
// }

// console.log(temp);




// right rotation by k element by formula
// const arr = [1,5,8,9,12];
// let temp = new Array(arr.length);
// const k = Number(prompt("Enter no of times element to be rotated right"))
// for(let i=0;i<arr.length;i++){
//     temp[(i+k)%arr.length] =arr[i]
// }

// console.log(temp);



// 3rd approach -reverse block algorithm-left rotation

// let length_of_array = Number(prompt("Enter length of array"));
// let arr = new Array(length_of_array);
// for(let i=0;i<length_of_array;i++){
//     arr[i] = Number(prompt("Enter elements in an array"));
// }
// let k = Number(prompt('Enter value of k'));
// k=k%length_of_array;
// reverse(0,k-1);
// reverse(k,arr.length-1);
// reverse(0,arr.length-1);
// console.log((arr));

// function reverse(i,j){
//     while(i<j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--
//     }  
// }


// 3rd approach -right rotaion w/o extra space and w/o time complexity of n2;
// const length_of_Array = Number(prompt("Enter length of the array"));
// let arr = new Array(length_of_Array);
// for(let i=0;i<length_of_Array;i++){
//     arr[i] = Number(prompt("Enter elements in an array"));
//     if(arr[i]=== null){
//         break;
//     }
// }
// let k = Number(prompt("Enter number of rotation to be done"));
// k = k%length_of_Array;

// reverse(0,arr.length-1);
// reverse(0,k-1);
// reverse(k,arr.length-1);
// console.log(arr);

// function reverse(i,j){
//     while(i<j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--
//     }
// }



// In-place removal for already sorted arrays
// const nums = [0,0,1,1,1,2,2,2,3,4,5]

// function removeDuplicates(arr){
//     if(arr.length === 0) return 0;
//     let uniqueIndex = 0;
//     for(let i=1;i<arr.length;i++){
//         if(arr[i] !== arr[uniqueIndex]){
//             uniqueIndex++;
//             arr[uniqueIndex] = arr[i]
//         }
//     }
//     return uniqueIndex + 1;
// }
// const uniqueNums = removeDuplicates(nums);
// console.log(uniqueNums);



// const a = [1,5,8,52];
// const b = [2,3,5,9,31];

// let temp = [...a,...b];
// console.log(temp);
// temp.sort((a,b)=>a-b)
// console.log(temp);
// const uniqueArr = [...new Set(temp)];
// console.log('uniqueArr', uniqueArr);

// buy and sell stocks
// const arr = [7,1,5,3,6,4];
// let maxProfit=0;
// let min = arr[0];

// for(let i=1;i<arr.length;i++){
//     if(arr[i]<min){
//         min = arr[i];
//     }else{
//         if(arr[i]-min>maxProfit){
//             maxProfit = arr[i]-min
//         }
//     }
// }

// console.log(maxProfit);

// move 0's to left and 2's to right
// const arr = [1,1,0,1,2,0,1,0,2,1,1]
// let j=0;
// let i=0;
// let k = arr.length-1
// let temp;
// while(i<=k){
// if(arr[i] === 2){
// temp = arr[i];
// arr[i] = arr[k];
// arr[k] = temp;
// k--
// }
// else if(arr[i] === 0){
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//     i++
// }
// else{
//     i++
// }

// }
// console.log(arr);

// maximum sum in subarray
// var maxSubArray = function(nums){
//     let max = -Infinity;
//     let sum = 0;
//     for(let i=0;i<nums.length;i++){
//         sum += nums[i];
//         max = Math.max(sum,max);
//         if(sum<0) sum=0;
//     }
//     return max;
// }

// const largestSum = maxSubArray([-2,-1,-3,4,-1,2,1,-5,4]);
// console.log(largestSum);


// maximum frequecy element-Boyer-Moore Majority Vote algorithm,
// const arr = [2,1,2,2,1,1,2,3,1,1,3,1,1,5,5];
// let answer = arr[0];
// let count = 1
// for(let i=1;i<arr.length;i++){
//     if(arr[i]===answer){
//         count++
//     }else{
//         if(count === 0){
//             answer = arr[i];
//             count++;
//         }else{
//             count--
//         }
//     }
// }
// console.log(arr);

// console.log(answer);


// Trapping water
// const arr= [4,2,0,3,2,5];

// let leftArr=[]
// let rightArr=[];
// let leftmax = arr[0];
// let rightmax = arr[arr.length-1];
// let min,diff,sum=0;
// for(let i=0;i<arr.length;i++){
//     leftmax = Math.max(arr[i],leftmax);
//     leftArr[i] = leftmax
// }

// for(let i=arr.length-1;i>=0;i--){
//    rightmax = Math.max(arr[i],rightmax);
//    rightArr[i] = rightmax
// }

// for(let i=0;i<arr.length;i++){
//     min = Math.min(leftArr[i],rightArr[i]);
//     diff = min-arr[i];
//     sum +=diff
    
// }
// console.log(sum);


/********************************Revison************** */

// leftrotation by 1 element:
// const arr = [5,12,10,85,6];//[12,10,85,6,5]
// console.log('arr',arr);

// let copy = arr[0];
// for(let i=0;i<arr.length-1;i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] = copy;

// console.log('left-rotation',arr);

// rightrotation by 1:
// const arr = [5,20,32,41,21] //[21,5,20,32,41]
// console.log('arr',arr);

// let copy = arr[arr.length-1];
// for(let i=arr.length-1;i>=1;i--){
//     arr[i] = arr[i-1]
// }

// arr[0] = copy;
// console.log('rightrotation',arr);







