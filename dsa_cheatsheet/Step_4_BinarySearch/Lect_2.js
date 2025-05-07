//  Find the Smallest Divisor Given a Threshold:
// const nums = [44,22,33,11,1];
// const threshold = 5;
// function smallest_divisor(nums,threshold){
//    let left=1,right=Math.max(...nums),mid;
//    function Sum(divisor){
//        let sum=0;
//        for(let i=0;i<nums.length;i++){
//            sum += Math.ceil(nums[i]/divisor);
//        }
//        return sum
//    }
//    while(left<right){
//        mid = Math.floor((left+right)/2);
//        if(Sum(mid)>threshold) left=mid+1;
//        else right = mid;
//    }
//    return left;
// }
// console.log(smallest_divisor(nums,threshold));


// Kth Missing Positive Number:
// TimeComplexity:O(n)
// const arr = [1,2,3,4];
// const k=2;

// function missing_Number(nums,k){
// let i=0,num=1;
// while(k>0){
//     if(i<nums.length && num===nums[i]) i++;
//     else{
//         k--;
//         if(k===0) return num;
//     }
//     num++;
// }
// }
// console.log(missing_Number(arr,k));




// Kth Missing Positive Number:
// TimeComplexity:O(logn)
// const arr = [2,3,4,7,11];
// const k=5;

// function missing_binarySearch(nums,k){
// let left=0,right=nums.length,mid,missing;
// while(left<right){
//     mid = Math.floor((left+right)/2);
//     missing = nums[mid]-(mid+1);
//     if(missing<k) left=mid+1;
//     else right=mid;
// }
// return left+k;
// }

// console.log(missing_binarySearch(arr,k));



// searching target element in a 2d array:
const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
const target = 3;
function twodArray(matrix,target){
    const m = matrix.length;
    const n = matrix[0].length;
    let left=0,right = m*n-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        let row = Math.floor(mid/n);
        let col = mid%n;
        let value = matrix[row][col];
        if(value===target) return true;
        else if(value<target) left=mid+1;
        else right=mid-1;
    }
return false;
}
console.log(twodArray(matrix,target))