//  Find the Smallest Divisor Given a Threshold:
const nums = [44,22,33,11,1];
const threshold = 5;
function smallest_divisor(nums,threshold){
   let left=1,right=Math.max(...nums),mid;
   function Sum(divisor){
       let sum=0;
       for(let i=0;i<nums.length;i++){
           sum += Math.ceil(nums[i]/divisor);
       }
       return sum
   }
   while(left<right){
       mid = Math.floor((left+right)/2);
       if(Sum(mid)>threshold) left=mid+1;
       else right = mid;
   }
   return left;
}
console.log(smallest_divisor(nums,threshold));