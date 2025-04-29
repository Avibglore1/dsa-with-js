// largest number:
let nums = [3,8,8,4,56,56];
let max = nums[0];
for(let i=1;i<nums.length;i++){
     if(nums[i]>max) max=nums[i];
}

console.log('maximum',max);
