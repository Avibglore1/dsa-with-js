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
const nums = [7,1,5,3,6,4];
let minPrice = Infinity;
let MaximumProfit = -Infinity;
for(let i=0;i<nums.length;i++){
    if(nums[i]<minPrice) minPrice = nums[i];
    if(nums[i]-minPrice>MaximumProfit) MaximumProfit = nums[i]-minPrice;
}
console.log('maxProfit', MaximumProfit);


