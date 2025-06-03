// Majority Element-I:

// const arr = [2,2,1,1,1,2,2];
// let majorityItem = arr[0];
// let count=1;
// for(let i=1;i<arr.length;i++){
//     if(majorityItem === arr[i]){
//         count++;
//     }else{
//         if(count===0){
//             majorityItem = arr[i];
//             count=1;
//         }else{
//             count--;
//         }
//     }
// }
// console.log('majorityItem',majorityItem);


// Kadane's Algorithm:maximum sum in a subarray
// const nums = [2, 3, 5, -2, 7, -4];
// let sum=0,maxSum=-Infinity;
// for(let i=0;i<nums.length;i++){
//     sum += nums[i];
//     if(sum>maxSum) maxSum = sum;
//     if(sum<0) sum = 0;
// }
// console.log('maxsum',maxSum);


// MaximumProfit:
// const nums = [7,1,5,3,6,4];
// let minPrice = Infinity;
// let MaximumProfit = -Infinity;
// for(let i=0;i<nums.length;i++){
//     if(nums[i]<minPrice) minPrice = nums[i];
//     if(nums[i]-minPrice>MaximumProfit) MaximumProfit = nums[i]-minPrice;
// }
// console.log('maxProfit', MaximumProfit);


// leaderInAnArray:
// const nums = [-3, 4, 5, 1, -4, -5];
// let arr = [];
// let maxSoFar = nums[nums.length-1];
// arr.push(maxSoFar);
// for(let i=nums.length-2;i>=0;i--){
//     if(nums[i]>maxSoFar){
//         arr.unshift(nums[i]);
//         maxSoFar = nums[i]
//     }
// }

// console.log(arr);


// Subarray Sum Equals K:
// const nums = [1,2,3];
// let sum,k=3,count=0;
// for(let i=0;i<nums.length;i++){
//     sum=0;
//     for(let j=i;j<nums.length;j++){
//         sum += nums[j];
//         if(sum===k) count++;
//     }
// }
// console.log('count',count);


/***************revision************************ */

// Two Sum Problem:
// const nums=[3,3];
// const target = 6;
// const obj={};
// for(let i=0;i<nums.length;i++){
//     let diff = target-nums[i];
//     if(diff in obj) {
//         console.log([obj[diff],i]) ;
//         break;
//     }
//     obj[nums[i]]=i;
// }


// 75. Sort Colors:
// const nums= [2,0,2,1,1,0];
// let i=0,j=0,k=nums.length-1,temp;
// while(i<=k){
//     if(nums[i]===0){
//         temp=nums[i];
//         nums[i]=nums[j];
//         nums[j]=temp;
//         i++;
//         j++;
//     }
//     else if(nums[i]===2){
//         temp=nums[i];
//         nums[i]=nums[k];
//         nums[k]=temp;
//         k--;
//     }
//     else i++;
// }
// console.log(nums);


// 169. Majority Element:

// const nums=[1,1,3,1,2,6,1,1,5,8,4,1,1];
// let frequencyCount={};
// let majorityCount=Math.floor(nums.length/2);
// for(let i=0;i<nums.length;i++){
//     if(frequencyCount[nums[i]]) frequencyCount[nums[i]] ++;
//     else frequencyCount[nums[i]] = 1;
//     if(frequencyCount[nums[i]]>majorityCount) {
//         console.log(nums[i]);
//         break;        
//     };
// }


// kadane's Algorithm:
// const nums = [-2,1,-3,4,-1,2,1,-5,4];
// let sum=0,maxSum=-Infinity;
// let start=0,end=0,tempStart=0;
// for(let i=0;i<nums.length;i++){
//     sum +=nums[i];
//     if(sum>maxSum) {
//         maxSum=sum;
//         start=tempStart;
//         end=i;
//     }
//     if(sum<0) {
//         sum=0;
//         tempStart=i+1;
//     }

// }
// let temp = nums.slice(start,end+1);
// console.log({maxSum,temp});


// 2149. Rearrange Array Elements by Sign:
// const nums=[3,1,-2,-5,2,-4];
// let result=[];
// let positives=0,negative=1;
// for(let i=0;i<nums.length;i++){
//     if(nums[i]>0){
//         result[positives]=nums[i];
//         positives += 2;
//     }else{
//         result[negative]=nums[i];
//         negative += 2;
//     }
// }
// console.log(result);


// set matrix to zero:
// const matrix=[[1,1,1],[1,0,1],[1,1,1]];
// let m=matrix.length;
// let n=matrix[0].length;

// let firstRowZero=false,firstColZero=false;
// for(let i=0;i<m;i++){
//     if(matrix[i][0]===0){
//         firstColZero=true;
//         break;
//     }
// }

// for(let j=0;j<n;j++){
//     if(matrix[0][j]===0){
//         firstRowZero=true;
//         break;
//     }
// }

// for(let i=1;i<m;i++){
//     for(let j=1;j<n;j++){
//         if(matrix[i][j]===0){
//             matrix[i][0]=0;
//             matrix[0][j]=0;
//         }
//     }
// }

// for(let i=1;i<m;i++){
//     if(matrix[i][0]===0){
//         for(let j=1;j<n;j++){
//             matrix[i][j]=0;
//         }
//     }
// }

// for(let j=1;j<n;j++){
//     if(matrix[0][j]===0){
//         for(let i=1;i<m;i++){
//             matrix[i][j]=0;
//         }
//     }
// }

// if(firstRowZero){
//     for(let j=0;j<n;j++){
//         matrix[0][j]=0;
//     }
// }

// if(firstColZero){
//     for(let i=0;i<m;i++){
//         matrix[i][0]=0
//     }
// }

// console.log(matrix);




// nextPermutaion:
// const arr=[1,5,1];
// let n=arr.length;
// let i=n-2;
// while(i>=0 && arr[i]>=arr[i+1]){
//     i--;
// }
// if(i>=0){
//     let j=n-1;
//     while(arr[j]<=arr[i]){
//         j--
//     }
//     [arr[i],arr[j]] = [arr[j],arr[i]];
// }

// reverse(arr,i+1,n-1);

// function reverse(nums,start,end){
//     while(start<end){
//         [nums[start],nums[end]] = [nums[end],nums[start]];
//         start++;
//         end--
//     }
    
// }



// console.log(arr);


// leaders in an array:
const nums=[1,2,5,3,1,2]
function leader(nums){
let largest=nums[nums.length-1];
let arr=[largest];
for(let i=nums.length-2;i>=0;i--){
    if(nums[i]>largest){
        largest=nums[i];
        arr.unshift(nums[i]);
    }
}
return arr
}
console.log(leader(nums));
