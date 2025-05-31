// largest number:
// let nums = [3,8,8,4,56,56];
// let max = nums[0];
// for(let i=1;i<nums.length;i++){
//      if(nums[i]>max) max=nums[i];
// }

// console.log('maximum',max);


// let arr = [2,23,45,65,365,45];
// if(arr.length<2) console.log(-1);
// else{
//      let max = arr[0];
// let smax = -Infinity;
// for(let i=0;i<arr.length;i++){
//      if(arr[i]>max){
//           smax = max;
//           max = arr[i];
//      }else if(arr[i]>smax && arr[i]<max){
//           smax = arr[i];
//      }
// }
// if(smax === -Infinity) console.log(-1);
// else console.log('secondmaximum',smax);
// }


// initiallysortedandrotated:
// const arr = [1,2,3];
// let count=0;

// for(let i=0;i<arr.length;i++){
//      if(arr[i]<arr[(i+1)%arr.length]){
//           count++;
//      }
// }
// if(count<=1) console.log(true);
// else console.log(false);


// uniqueElementinfront:
// const nums = [0,1,2,2,3,4,4];
// let j=0,temp;
// for(let i=1;i<nums.length;i++){
//      if(nums[i]!==nums[j]){
//           j++
//          nums[j] = nums[i]; 
//      }
// }
// console.log('unquie elements', j+1);
// console.log('arr',nums);


// rightrotatewithO(1)complexity:
// const arr = [9,85,65,12,42];
// reverse(0,arr.length-1);
// reverse(1,arr.length-1)
// function reverse(i,j){
//      while(i<j){
//           temp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = temp;
//           i++;
//           j--
//      }
// }

// console.log('arr',arr);


// movezerostorightend:

// const arr = [1,3,12] 
// let j=0,temp;
// for(let i=0;i<arr.length;i++){
//      if(arr[i]!==0){
//           temp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = temp;
//           j++;
//      }
// }

// console.log('arr',arr);



// MissingNumber:
// let nums = [9,6,4,2,3,5,7,0,1];
// let length = nums.length;
// nums.sort((a,b)=>a-b)
// for(let i=0;i<=length;i++){
//      if(i!==nums[i]) {
//           console.log(i);
//           break;
//      } 
// }

// above solution has time complexity of nlogn;

// let nums = [9,6,4,2,3,5,7,0,1];
// let length = nums.length;
// let expectedSum,actualSum=0;
// expectedSum = length * (length+1)/2;
// console.log('expectedSum',expectedSum);

// for(let i=0;i<length;i++){
//      actualSum += nums[i];
// }
// console.log('missingNumber',expectedSum-actualSum);


// maximumconsecutiveones:
// const nums = [1,1,0,1,1,1]
// let maxCount=0;
// let count=0;
// for(let i=0;i<nums.length;i++){
//      if(nums[i]===1){
//           count++;
//      }else{
//           if(count>maxCount){
//                maxCount = count;
//           }
//           count=0;
//      }
// }
// maxCount = count>maxCount ? count : maxCount;
// console.log('maximumconsecutiveones',maxCount);


// single against double:
// let result = 0;
// let nums = [4,0,2,1,0,2,1];

// for(let i=0;i<nums.length;i++){
//      result = result ^ nums[i]
// }
// console.log(result);


/*****************revision********** */

// const nums =  [3, 4, 1, 5, 3, -5];
// k=8;
//  k = k%nums.length;
//         reverse(0,k-1);
//         reverse(k,nums.length-1);
//         reverse(0,nums.length-1);
//         function reverse(i,j){
//             while(i<j){
//                 let temp = nums[i];
//                 nums[i] = nums[j];
//                 nums[j] = temp;
//                 i++;
//                 j--;
//             }
         
//         }
// console.log(nums);


// union of two arrays:
// const nums1 =  [1, 2, 3, 4, 5];
// const nums2 = [1, 2, 7];
// function unionArray(nums1, nums2) {
//         let temp=[];
//         let i=0,j=0,k=0;
//         while(i<nums1.length && j<nums2.length){
//             if(nums1[i]<nums2[j]) {
//                 if(k===0 || temp[k-1]!==nums1[i]) temp[k++] = nums1[i++];   
//             }
//             else if(nums1[i]===nums2[j]){
//                  if(k===0 || temp[k-1]!==nums2[j]) temp[k++] = nums2[i++];   
//                  j++;
//             }
//             else{
//                 if(k===0 || temp[k-1]!==nums1[i]) temp[k++] = nums1[j++]; 
//                 i++;
//             }
//         }
//         while(i<nums1.length){
//             if(temp[k-1]!==nums1[i]) temp[k++] = nums1[i++];
            
//         }while(j<nums2.length){
//            if(temp[k-1]!==nums2[j]) temp[k++] = nums2[j++];
//         }
//          return temp
//     }
// console.log(unionArray(nums1, nums2))


/************revision************* */

// const nums=[10,10,8];
// function maxSmax(nums){
// if(nums.length<2) return "second maximum doesnt exist"
// let max=-Infinity;
// let smax=-Infinity;
// for(let i=0;i<nums.length;i++){
//     if(nums[i]>max){
//         smax=max;
//         max=nums[i];
//     }
//     else if(nums[i]>smax && nums[i]<max){
//         smax=nums[i];
//     }
// }
// if(smax===-Infinity) return {max,smax:"secondmax do not exist"};
// else return {max,smax}
// }
// console.log(maxSmax(nums));


// check if array is sorted and rotated:
// const nums = [2,3,4,5];
// let count=0;
// for(let i=0;i<nums.length;i++){
//     if(nums[i]>nums[(i+1)%nums.length]) count++;
// }
// if(count<=1) {
//     if(nums[0]>nums[nums.length-1]) console.log('Array is sorted and rotated');
//     else console.log('Array is sorted');   
// } 
// else console.log('Array was not sorted initially');


// Remove duplicates from sorted Array:
// const nums=[0,0,1,1,1,2,2,3,3,4];
// let j=0;
// for(let i=1;i<nums.length;i++){
//     if(nums[i]!==nums[j]){
//         j++;
//         nums[j]=nums[i];
//     }
// }
// console.log('uniqueElements',j+1);


// rotate array right by k places:
// const nums = [1,2,3,4,5,6,7];
// const k=3;
// reverse(0,nums.length-1);
// reverse(0,k-1);
// reverse(k,nums.length-1);

// function reverse(i,j){
// while(i<j){
//     [nums[i],nums[j]] = [nums[j],nums[i]];
//     i++;
//     j--
// }
// }

// console.log(nums);


// move zeros to the end:
// const nums=[] //[1,3,12,0,0]:
// function moveZeros(nums){
//     if(nums.length<=1) return nums;
//     let j=0;
//     for(let i=1;i<nums.length;i++){
//     if(nums[i]!==0){
//         [nums[i],nums[j]] = [nums[j],nums[i]];
//         j++
//     }
// }
// return nums
// }
// console.log(moveZeros(nums));


// const nums = [2, 3, 4, 5, 3];
// const target=3;

// function search(nums,target){
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===target) return i
//     }
//     return -1
// }
// console.log(search(nums,target));



// union of two arrays:
const nums1= [3, 4, 6, 7, 9, 9];
const nums2= [1, 5, 7, 8, 8];
let i=0,j=0;
let temp=[],k=0;
while(i<nums1.length && j<nums2.length){
if(nums1[i]<nums2[j]){
    if(k===0 || temp[k-1]!==nums1[i]){
        temp[k++]=nums1[i];
    }
    i++;
}
else if(nums1[i]===nums2[j]){
    if(k===0 || temp[k-1]!==nums1[i]){
        temp[k++]=nums1[i];
    }
    i++;
    j++
}
else{
    if(k===0 || temp[k-1]!==nums2[j]){
        temp[k++] = nums2[j];
    }
    j++;
}
}

while(i<nums1.length){
    if(k===0 || temp[k-1]!==nums1[i]){
        temp[k++] = nums1[i];
    }
    i++
}

while(j<nums2.length){
    if(k===0 || temp[k-1]!==nums2[j]){
        temp[k++] = nums2[j]
    }
    j++
}

console.log(temp);

