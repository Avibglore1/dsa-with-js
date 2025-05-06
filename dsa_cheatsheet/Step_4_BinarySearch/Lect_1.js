// const nums= [8,15,25,56,890];
// let target = 56;
// let first = 0,last=nums.length-1,mid;
// let flag = false;
// while(first<=last){
//     mid = Math.floor((first+last)/2);
//     if(nums[mid]===target) {
//         flag = true;
//         console.log(mid);
//         break;
//     }
//     else if (nums[mid]>target) last = mid-1;
//     else first = mid+1;
// }
// if(!flag) console.log('Target element not found');



// Lower Bound:
const nums = [8,15,25,56,890];
const target = 28;
let first = 0,last = nums.length-1,mid;
let ans = nums.length;
while(first<=last){
    mid = Math.floor((first+last)/2);
    if(nums[mid]>=target){
        ans = mid;
        last = mid-1;
    }else first = mid+1;
}
console.log(ans);

