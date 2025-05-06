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
    const nums = [8,15,25,56,890];
    const target = 28;
    let floor=-1,ceil=-1;
    let first=0,last = nums.length-1,mid;
    function floorCeil(){
        while(first<=last){
            mid = Math.floor((first+last)/2);
            if(nums[mid]===target) return [target,target];
            else if(nums[mid]>target){
                ceil = nums[mid];
                last = mid-1;
            }else{
                floor = nums[mid];
                first = mid+1;
            }
        }
        return [floor,ceil]
    }
   
    const ans = floorCeil();
    console.log(ans);
    

