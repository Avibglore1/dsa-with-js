// const nums = [2,5,8,9,12, 18,20,25,67,101,125];

// let target = 120;
// let first = 0;
// let last = nums.length-1;
// let mid;

// function binarySearch(){
//     while(first<=last){
//         mid = Math.floor((first+last)/2);
//         if(nums[mid]===target) return mid;
//         else if(nums[mid]>target) last = mid-1;
//         else first = mid+1;    
//         }
//         return undefined
// }

// const index = binarySearch();
// if(index === undefined) console.log('Search Item not found');
// else console.log('Search element available at index', index);


/**************question and solution******************* */
//  Binary Search:
const nums= [8,15,25,56,890];
let target = 56;
let first = 0,last=nums.length-1,mid;
let flag = false;
while(first<=last){
    mid = Math.floor((first+last)/2);
    if(nums[mid]===target) {
        flag = true;
        console.log(mid);
        break;
    }
    else if (nums[mid]>target) last = mid-1;
    else first = mid+1;
}
if(!flag) console.log('Target element not found');






    