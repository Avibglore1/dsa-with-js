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
    // const nums = [8,15,25,56,890];
    // const target = 28;
    // let first = 0,last = nums.length-1,mid;
    // let ans = nums.length;
    // while(first<=last){
    //     mid = Math.floor((first+last)/2);
    //     if(nums[mid]>=target){
    //         ans = mid;
    //         last = mid-1;
    //     }else first = mid+1;
    // }
    // console.log(ans);


    // Upper Bound:
    // const nums = [8,15,25,56,890];
    // const target = 28;
    // let first = 0,last = nums.length-1,mid;
    // let ans = nums.length;
    // while(first<=last){
    //     mid = Math.floor((first+last)/2);
    //     if(nums[mid]>target){
    //         ans = mid;
    //         last = mid-1;
    //     }else first = mid+1;
    // }
    // console.log(ans);


    // Search insert position:
    // const nums = [8,15,25,56,890];
    // const target = 28;
    // let first=0,last = nums.length-1,mid;
    // let flag = false;
    // while(first<=last){
    //     mid = Math.floor((first+last)/2);
    //     if(nums[mid]===target) {
    //         flag = true;
    //         console.log(mid);
    //         break;
    //     }
    //     else if(nums[mid]>target) last = mid-1;
    //     else first = mid+1;
    // }
    // if(!flag) console.log(first);
    

    // Floor and Ceil in Sorted Array:
    // const nums = [8,15,25,56,890];
    // const target = 28;
    // let floor=-1,ceil=-1;
    // let first=0,last = nums.length-1,mid;
    // function floorCeil(){
    //     while(first<=last){
    //         mid = Math.floor((first+last)/2);
    //         if(nums[mid]===target) return [target,target];
    //         else if(nums[mid]>target){
    //             ceil = nums[mid];
    //             last = mid-1;
    //         }else{
    //             floor = nums[mid];
    //             first = mid+1;
    //         }
    //     }
    //     return [floor,ceil]
    // }
   
    // const ans = floorCeil();
    // console.log(ans);


    // Find First and Last Position of Element in Sorted Array:
    // const nums = [8,15,25,56,890];
    // const target = 28;
    // let firstIndex,lastIndex;
    // function find_index(is_first){
    //     let left=0,right=nums.length-1,mid;
    //     let result = -1;
    //     while(left<=right){
    //         mid = Math.floor((left+right)/2);
    //         if(nums[mid]===target){
    //             result = mid;
    //             if(is_first) right=mid-1;
    //             else left = mid+1;
    //         }
    //         else if(nums[mid]>target) right = mid-1;
    //         else left = mid+1;
    //     }
    //     return result;
    // }
    // firstIndex = find_index(true);
    // lastIndex = find_index(false);
    // console.log([firstIndex,lastIndex]);

    
    // Search in Rotated Sorted Array:
//      const nums = [4,5,6,7,0,1,2];
//     const target = 0;
//     function search(){
//         let left=0,right = nums.length-1,mid;
//         while(left<=right){
//             mid = Math.floor((left+right)/2);
//             if(nums[mid]===target) return mid;
//             if(nums[left]<=nums[mid]){
//                 if(nums[left]<=target && target < nums[mid]) right = mid-1;
//                 else left = mid+1;
//             }else{
//                 if(nums[mid]<target && target<=nums[right]) left=mid+1;
//                 else right = mid-1;
//             }
//         }
//         return -1;
//     }
// console.log(search());


// Search in Rotated Sorted Array:with duplicates
// const nums = [2,5,6,0,0,1,2];
// const target = 3;
//   function search_In_Duplicates(){
//     let left = 0,right = nums.length-1,mid;
//     while(left<=right){
//         mid = Math.floor((left+right)/2);
//         if(nums[mid]===target) return true;
//         if(nums[left]===nums[mid] && nums[mid]===nums[right]){
//             left++;
//             right--
//         }else if(nums[left]<=nums[mid]){
//             if(nums[left]<=target && target<nums[mid]) right = mid-1;
//             else left = mid+1;
//         }else{
//             if(nums[mid]<target && target <= nums[right]) left = mid+1;
//             else right = mid-1
//         }
//     }
//     return false
//   }

//   console.log(search_In_Duplicates())



// Find Minimum in Rotated Sorted Array:
// const nums= [11,13,15,17];
// function search(){
//     let left=0,right=nums.length-1,mid;
//     while(left<right){
//         mid = Math.floor((left+right)/2);
//         if(nums[mid]>nums[right]) left = mid+1;
//         else right = mid;
//     }
//     return nums[left]
// }
// console.log(search());




// Find Minimum in Rotated Duplicates Sorted Array:
// const nums = [2,2,2,0,1];
// function minimum_Search(){
// let left=0,right=nums.length-1,mid;
// while(left<right){
//     mid = Math.floor((left+right)/2);
//     if(nums[mid]>nums[right]) left = mid+1;
//     else if(nums[mid]<nums[right]) right=mid;
//     else right--
// }
// return nums[left]
// }
// console.log(minimum_Search());


// Number of rotation=index of smallest element in rotated ascending order array:
// const nums = [4, 5, 6, 7, 0, 1, 2, 3];
// function minimum_Search(){
// let left=0,right=nums.length-1,mid;
// while(left<right){
//     mid = Math.floor((left+right)/2);
//     if(nums[mid]>nums[right]) left = mid+1;
//     else if(nums[mid]<nums[right]) right=mid;
//     else right--
// }
// return [left,nums[left]]
// }
// console.log(minimum_Search());


// Single Element in a Sorted Array:
// const nums = [1,1,2,3,3,4,4,8,8] //2
// function singleElement(nums){
// let low=0,high = nums.length-1,mid;
// while(low<high){
// mid = Math.floor((low+high)/2);
// if(mid%2===1) mid--;
// if(nums[mid]===nums[mid+1]) low=mid+2;
// else high = mid;
// }
// return nums[low];
// }
// console.log(singleElement(nums));



 
