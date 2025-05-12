/**
 * 
 * 2918. Minimum Equal Sum of Two Arrays After Replacing Zeros
 *  You are given two arrays nums1 and nums2 consisting of positive integers.

You have to replace all the 0's in both arrays with strictly positive integers such that the sum of elements of both arrays becomes equal.

Return the minimum equal sum you can obtain, or -1 if it is impossible.

 

Example 1:

Input: nums1 = [3,2,0,1,0], nums2 = [6,5,0]
Output: 12
Explanation: We can replace 0's in the following way:
- Replace the two 0's in nums1 with the values 2 and 4. The resulting array is nums1 = [3,2,2,1,4].
- Replace the 0 in nums2 with the value 1. The resulting array is nums2 = [6,5,1].
Both arrays have an equal sum of 12. It can be shown that it is the minimum sum we can obtain.
Example 2:

Input: nums1 = [2,0,2,0], nums2 = [1,4]
Output: -1
Explanation: It is impossible to make the sum of both arrays equal.
 * 
 * 
 * 
 * ***/

// const nums1=[2,0,2,0];
// const nums2 = [1,4];

// var minSum = function(nums1, nums2) {
//     let sum1=sum2=count1=count2=0;
//     for(let i=0;i<nums1.length;i++){
//         sum1 +=nums1[i] ;
//         if(nums1[i]===0) count1++;
//     }
//     for(let i=0;i<nums2.length;i++){
//         sum2 +=nums2[i] ;
//         if(nums2[i]===0) count2++;
//     }
//     let minSum1 = sum1 + count1;
//     let minSum2 = sum2 + count2;

//     if(count1===0 && count2===0) return sum1===sum2?sum1:-1
//     if(count1===0) return sum1>=minSum2 ? sum1 : -1;
//     if(count2===0) return sum2>=minSum1 ? sum2: -1;
//     return Math.max(minSum1,minSum2);
   
// };
// console.log(minSum(nums1,nums2));




/**
 * 2094. Finding 3-Digit Even Numbers
Solved
Easy
Topics
Companies
Hint
You are given an integer array digits, where each element is a digit. The array may contain duplicates.

You need to find all the unique integers that follow the given requirements:

The integer consists of the concatenation of three elements from digits in any arbitrary order.
The integer does not have leading zeros.
The integer is even.
For example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements.

Return a sorted array of the unique integers.

 

Example 1:

Input: digits = [2,1,3,0]
Output: [102,120,130,132,210,230,302,310,312,320]
Explanation: All the possible integers that follow the requirements are in the output array. 
Notice that there are no odd integers or integers with leading zeros.
Example 2:

Input: digits = [2,2,8,8,2]
Output: [222,228,282,288,822,828,882]
Explanation: The same digit can be used as many times as it appears in digits. 
In this example, the digit 8 is used twice each time in 288, 828, and 882. 
Example 3:

Input: digits = [3,7,5]
Output: []
Explanation: No even integers can be formed using the given digits.* 
 * 
 */

const digits=[2,1,3,0];
let result=new Set();
    for(let i=0;i<digits.length;i++){
        for(let j=0;j<digits.length;j++){
            for(let k=0;k<digits.length;k++){
                if(i===j || j===k || i===k) continue;
                let hundreds = digits[i],tens=digits[j],units=digits[k];
                if(hundreds===0) continue;
                if(units%2===1) continue;
                const num = hundreds*100+tens*10+units*1;
                result.add(num);

            }
        }
    }
   console.log(Array.from(result).sort((a,b)=>a-b));
    