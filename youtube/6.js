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


// left-rotation by k elements;
// const arr = [5,12,30,85,41];
// let k = Number(prompt("Enter a number"));
// console.log('arr',arr);
// k = k%arr.length;
// for(j=0;j<k;j++){
//     let copy = arr[0];
// for(let i=0;i<arr.length-1;i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] = copy
// }

// console.log('leftrotationbyk',arr);



// right rotation by k element;
// const arr=[1,2,3,4,5,6];
// let k = Number(prompt('Enter k value'));
// k = k%arr.length;
// console.log('arr',arr);

// for(j=0;j<k;j++){
//     let copy = arr[arr.length-1]
// for(let i=arr.length-1;i>0;i--){
//     arr[i] = arr[i-1];
// }
// arr[0] = copy
// }
// console.log('rightrotationbyk',arr);


// 2nd approach left rotation by k elemement
// const arr = [1,2,3,4,5];
// let k = Number(prompt("Enter a number"));
// k = k%arr.length;
// let temp = [];
// console.log('arr',arr);

// for(let i=0;i<arr.length;i++){
//     temp[i] = arr[(i+k)%arr.length];
// }
// console.log('leftrotationbyk', temp);

// 2nd approach right rotation by k element
// const arr = [1,2,3,4,5];
// let k = Number(prompt("Enter a number"));
// k = k%arr.length;
// let temp = [];
// console.log('arr',arr);
// for(let i=0;i<arr.length;i++){
//     temp[(i+k)%arr.length] = arr[i];
// }

// console.log('rightrotationbykelement',temp);


// ReverseBlockAlgorithm-best Approach:

// const arr=[1,2,3,4,5];
// let k = Number(prompt('Enter a number'));
// let temp;
// k = k%arr.length;
// console.log('arr',arr);

// reverse(0,k-1);
// reverse(k,arr.length-1);
// reverse(0,arr.length-1)

// function reverse(i,j){
//     while(i<j){
//         temp = arr[i];
//         arr[i]= arr[j];
//         arr[j] = temp;
//         i++;
//         j--
//         }
// }

// console.log('leftrotationbyk',arr);




// const arr=[1,2,3,4,5];
// let k = Number(prompt('Enter a number'));
// let temp;
// k = k%arr.length;
// console.log('arr',arr);

// reverse(arr.length-k,arr.length-1);
// reverse(0,arr.length-1-k);
// reverse(0,arr.length-1)

// function reverse(i,j){
//     while(i<j){
//         temp = arr[i];
//         arr[i]= arr[j];
//         arr[j] = temp;
//         i++;
//         j--
//         }
// }

// console.log('rightrotationbyk',arr);


// remove duplicates from sortedArray
// const arr = [1,5,8,8,11,13];

// const set = new Set(arr);
// console.log(Array.from(set));
// let j=1
// for(let i=0;i<arr.length-1;i++){
//     if(arr[i]===arr[i+1]) continue;
//     else{
//         arr[j] = arr[i+1];
//         j++
//     }
// }

// console.log('arr',arr);
// console.log('uniqueElements',j);



/*****above removing duplicate algo works same for both descending and ascending order */

 
// mergesortedarray

// const arr1 = [1,5,8,11,14];
// const arr2 = [2,4,6,8];

// const set = new Set([...arr1,...arr2])
// const combinedArray = Array.from(set);
// combinedArray.sort((a,b)=>a-b);

// console.log('combinedArray',combinedArray);


// let temp = []
// let k=i=j=0;

// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]) {
//         temp[k] = arr1[i];
//         i++;
//         k++;
//     }else{
//         temp[k] = arr2[j];
//         j++;
//         k++
//     }
// }
// while(i<arr1.length){
//     temp[k] = arr1[i];
//     k++;
//     i++
// }while(j<arr2.length){
//     temp[k] = arr2[j];
//     k++;
//     j++;
// }

// console.log(temp);


// var merge = function(nums1, m, nums2, n) {
    
//     let i = m - 1;     
//     let j = n - 1;     
//     let k = m + n - 1; 
    

//     while (i >= 0 && j >= 0) {
//         if (nums1[i] > nums2[j]) {
//             nums1[k--] = nums1[i--];
//         } else {
//             nums1[k--] = nums2[j--];
//         }
//     }
    
//     while (j >= 0) {
//         nums1[k--] = nums2[j--];
//     }
// };

// sortcolor

// const arr = [2,0,2,1,1,0]
// let i=j=0;
// let temp;
// let k = arr.length-1
// while(i<=k){
//     if(arr[i] === 0){
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++;
//         i++;
//     }else if(arr[i] === 2){
//         temp = arr[i];
//         arr[i] = arr[k];
//         arr[k] = temp;
//         k--;
//     }else{
//         i++
//     }
// }

// console.log(arr);


    // maximum subarray
//     const arr = [-2,1,-3,4,-1,2,1,-5,4];
//     let sum = 0;
//     let maxSum = -Infinity;

//     for(let i=0;i<arr.length;i++){
//     sum +=arr[i];
//     if(sum>maxSum) maxSum=sum;
//     if(sum<0) sum=0;
   
// }
// console.log('maxsum',maxSum);



// mostrepeatednumber in array
// const arr = [2,2,1,1,1,2,2];

// let item =arr[0],count=1;
// for(let i=1;i<arr.length;i++){
// if(count === 0){
//     item = arr[i];
//     count = 1
// }else if(arr[i] === item) count++;
// else count--
// }

// if(count>0){
//     console.log('maximum repeated value:',item);
// }

// console.log('count',count);
// console.log('item',item);

/*******************************revision********************************** */

// leftRotatioBy1element
// const arr = [5,84,56,5,23] //[84,56,5,23,5]
// let copy = arr[0];
// for(let i=0;i<arr.length-1;i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] = copy;
// console.log('arr',arr);

// rightrotationBy1element:
// const arr = [85,45,70,74,25,63]; //[63,85,45,70,74,25]
// let copy = arr[arr.length-1];
// for(let i=arr.length-1;i>0;i--){
//     arr[i] = arr[i-1];
// }
// arr[0] = copy;
// console.log('arr',arr);

// leftrotationbykelement
// const arr=[52,41,63,74,85];//[41,63,74,85,52]=>[63,74,85,52,41]=>[74,85,52,41,63]=>[85,52,41,63,74]
// let k = Number(prompt('Enter a number'));
// k = k%arr.length;
// for(let j=0;j<k;j++){
//     let copy = arr[0];
// for(let i=0;i<arr.length-1;i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] = copy;
// }
// console.log('arr',arr);


// right rotation by k element
// const arr=[52,41,63,74,85]; //[85,52,41,63,74] =>[74,85,52,41,63]=>[63,74,85,52,41]=>[41,63,74,85,52,41]
// let k = Number(prompt('Enter a number'));
// k = k%arr.length;
// for(let j=0;j<k;j++){
//     let copy = arr[arr.length-1];
//     for(let i=arr.length-1;i>0;i--){
//         arr[i] = arr[i-1]
//     }
//     arr[0] = copy;
// }
// console.log('arr',arr);


//formula method for left and right rotation:
// const arr = [5,64,52,31,28,97];
// console.log('arr',arr);
// let k = Number(prompt('Enter a number'));
// let temp = [];
// for(let i=0;i<arr.length;i++){
//     temp[i] = arr[(i+k)%arr.length];
// }
// console.log('temp',temp);


// const arr = [5,64,52,31,28,97];
// console.log('arr',arr);
// let k = Number(prompt('Enter a number'));
// let temp = [];
// for(let i=0;i<arr.length;i++){
//     temp[(i+k)%arr.length] = arr[i];
// }
// console.log('temp',temp);

// reverseBlockMethod:
// leftrotationbykelement:
// const arr = [5,85,41,25,36];
// console.log('arr',arr);

// let k = Number(prompt("Enter a number"));
// k = k%arr.length
// let temp;
// reverse(0,k-1)
// reverse(k,arr.length-1);
// reverse(0,arr.length-1);
// function reverse(i,j){
//     while(i<j){
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--
//     }
// }
// console.log('arr',arr);


// rightrotation
// const arr = [5,85,41,25,36];
// console.log('arr',arr);

// let k = Number(prompt("Enter a number"));
// k = k%arr.length
// let temp;
// reverse(0,arr.length-1);
// reverse(0,k-1);
// reverse(k,arr.length-1);

// function reverse(i,j){
//     while(i<j){
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--
//     }
// }
// console.log('arr',arr);

// remove duplicates from array
// const arr = [1,2,5,5,8,9,9];
// console.log('arr',arr);

// let j=0;
// for(let i=1;i<arr.length;i++){
//     if(arr[i]!==arr[j]){
//        j++;
//        arr[j] = arr[i]
//     }
// }
// console.log('arr',arr.slice(0,j+1));


// mergeSortedArray
// const arr1 =[1,2,5,8,9];
// const arr2 = [2,5,8,11,36];

// let i=j=k=0;
// let temp=[];
// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         temp[k++] = arr1[i++]
//     }else{
//         temp[k++] = arr2[j++]
//     }
// }
// while(i<arr1.length){
//     temp[k++] = arr1[i++]
// }
// while(j<arr2.length){
//     temp[k++] = arr2[j++];
// }
// console.log('temp',temp);


// sort color:
// const arr = [0,1,0,2,2,1,0,1,2];
// let j=0;
// let i=1;
// let k = arr.length-1;
// let temp;
// while(i<=k){
// if(arr[i]===0){
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//     i++;
// }else if(arr[i]===2){
//     temp = arr[i];
//     arr[i] = arr[k];
//     arr[k] = temp;
//     k--
// }else{
//     i++
// }
// }

// console.log('arr',arr);


//  Best Time to Buy and Sell Stock:

// const arr = [7,1,5,3,6,4];
// let minPrice = Infinity;
// let maxprofit = 0;

// for(let i=0;i<arr.length;i++){
//     if(arr[i]<minPrice){
//         minPrice=arr[i];
//     }
//   if(arr[i]-minPrice>maxprofit){
//     maxprofit = arr[i]-minPrice;
// }
// }
// console.log('maxProfit',maxprofit);



// maximum sum in a subarray
// const arr = [-2,1,-3,4,-1,2,1,-5,4];
// let sum=0;
// let maxSum = -Infinity;

// for(let i=0;i<arr.length;i++){
//     sum +=arr[i];
//     if(sum>maxSum) maxSum = sum;
//      if(sum<0) sum = 0;
// }
// console.log('maxSum',maxSum);


//  Boyer-Moore Majority Vote Algorithm :
// const arr = [2,2,1,2,1,2,2,1];
// let item = arr[0];
// let count = 1;
// for(let i=1;i<arr.length;i++){
//     if(count ===0){
//         item = arr[i];
//         count = 1;
//     }else if(arr[i] === item){
//         count++
//     }else{
//         count--
//     }
// }

// if(count>0) console.log(item);



/********revision*********************revision*******************************revision**********/
// left rotaion:
// const arr=[1,2,3,4,5]
// let copy=arr[0];
// for(let i=0;i<arr.length-1;i++){
//     arr[i]=arr[i+1];
// }
// arr[arr.length-1]=copy;
// console.log(arr);


//right rotation by 1 element:
// const arr=[10,20,30,40,50];
// let copy=arr[arr.length-1];
// for(let i=arr.length-1;i>0;i--){
//     arr[i]=arr[i-1]
// }
// arr[0]=copy;
// console.log(arr);



// left rotaion by k steps:
// const arr=[10,20,30,40] //[20,30,40,10]->[30,40,10,20]->[40,10,20,30]->[10,20,30,40]
// let k=Number(prompt("Enter number of times array to be rotated"));
// k=k%arr.length
// for(let i=1;i<=k;i++){
//     let copy= arr[0];
//     for(let j=0;j<arr.length-1;j++){
//         arr[j]=arr[j+1]
//     }
//     arr[arr.length-1]=copy;
// }
// console.log(arr);


// better approach than above for left and right rotation:
// left-rotation by k steps:
// const arr=[10,20,30,40,50];
// let k=2;
// let temp=new Array(arr.length);
// for(let i=0;i<arr.length;i++){
//     temp[i]=arr[(i+k)%arr.length]
// }
// console.log(temp);


// right rotation by k steps:
// const arr=[1,2,3,4,5]; //[5,1,2,3,4]->[4,5,1,2,3]->[3,4,5,1,2]->[2,3,4,5,1]->[1,2,3,4,5]
// let k=2;
// let temp=[];
// for(let i=0;i<arr.length;i++){
//     temp[(i+k)%arr.length]=arr[i];
// }
// console.log(temp);


// three-reverse method for left and right rotaion:
// left rotation by k steps:
// const arr=[10,20,30,40] //[20,30,40,10]->[30,40,10,20]->[40,10,20,30]
// let k=5;
// k=k%arr.length;
// reverse(0,k-1);
// reverse(k,arr.length-1);
// reverse(0,arr.length-1)
// function reverse(i,j){
//     while(i<j){
//         [arr[i],arr[j]]=[arr[j],arr[i]];
//         i++;
//         j--
//     }
// }
// console.log(arr);

// right rotation:

// const arr=[1,2,3,4,5]; //[5,1,2,3,4]->[4,5,1,2,3]->[3,4,5,1,2]->[2,3,4,5,1]->[1,2,3,4,5]
// let k=3;
// reverse(0,arr.length-1);
// reverse(0,k-1);
// reverse(k,arr.length-1);
// function reverse(i,j){
//     while(i<j){
//         [arr[i],arr[j]] = [arr[j],arr[i]];
//         i++;
//         j--
//     }
// }
// console.log(arr);


// merge sorted array:
// const arr1=[2,5,6];
// const arr2=[1,3,4,8];
// let i=0,j=0;
// let temp=[];
// let k=0;
// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         temp[k++]=arr1[i++];
//     }else{
//         temp[k++] = arr2[j++];
//     }
// }
// while(i<arr1.length){
//     temp[k++]=arr1[i++];
// }
// while(j<arr2.length){
//     temp[k++]=arr2[j++];
// }
// console.log(temp);

// merge sorted array in-place:
const arr1=[2,5,6];
const arr2=[1,3,4,8];
let i=arr1.length-1;
let j=arr2.length-1;
let k=arr1.length+arr2.length-1;
while(i>=0 && j>=0){
    if(arr1[i]>arr2[j]){
        arr1[k--]=arr1[i--]
    }else{
        arr1[k--]=arr2[j--]
    }
}
while(j>=0){
    arr1[k--]=arr2[j--]
}
console.log(arr1);
