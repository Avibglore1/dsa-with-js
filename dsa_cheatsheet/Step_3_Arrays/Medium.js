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

const nums=[1,1,3,1,2,6,1,1,5,8,4,1,1];
let frequencyCount={};
let majorityCount=Math.floor(nums.length/2);
for(let i=0;i<nums.length;i++){
    if(frequencyCount[nums[i]]) frequencyCount[nums[i]] ++;
    else frequencyCount[nums[i]] = 1;
    if(frequencyCount[nums[i]]>majorityCount) {
        console.log(nums[i]);
        break;        
    };
}






